import { Readable, writable, Writable } from 'svelte/store';
import { ChatAdapter } from '../model/network/chat/ChatAdapter';
import { SocketChatCommand } from '../model/socket/command/SocketChatCommand';
import { SocketLoginCommand } from '../model/socket/command/SocketLoginCommand';
import { ModifyProfileCommand } from '../model/socket/command/SocketModifyProfileCommand';
import { NotifyUserCommand } from '../model/socket/command/SocketNotifyUserCommand';
import { SocketReactionCommand } from '../model/socket/command/SocketReactionCommand';
import type {
  SocketCommand,
  SocketCurrentUser,
  SocketModel,
  SocketMyStatus,
} from '../model/socket/common/SocketModel';
import { WebSocketModel } from '../model/socket/websocket/WebSocketModel';
import { HashGenerator } from '../util/hash/HashGenerator';
import { PushListService } from '../view/main/push/PushListService';
import { GroupedChatService } from './chat/GroupedChatService';
import { ChatService } from './ChatService';
import { SocketService } from './SocketService';
import { SoundService } from './SoundService';

class ChatNetworkServiceInit {
  #socket: SocketModel | null = null;
  #chatAdapter = new ChatAdapter();
  #isConnected: Writable<boolean> = writable(false);
  #applyMyStatusEvent: Writable<SocketMyStatus> = writable();
  #applyUsersEvent: Writable<SocketCurrentUser[]> = writable([]);

  get isConnected(): Readable<boolean> {
    return this.#isConnected;
  }

  get applyMyStatusEvent(): Readable<SocketMyStatus> {
    return this.#applyMyStatusEvent;
  }

  get applyUsersEvent(): Readable<SocketCurrentUser[]> {
    return this.#applyUsersEvent;
  }

  init(privateKey: string): void {
    if (this.#socket) {
      this.#socket.disconnect();
    }

    this.#socket = this.#createWebSocketModel(privateKey);
    SocketService.chat = new SocketChatCommand(this.#socket);
    SocketService.login = new SocketLoginCommand(this.#socket);
    SocketService.modifyProfile = new ModifyProfileCommand(this.#socket);
    SocketService.notifyUser = new NotifyUserCommand(this.#socket);
    SocketService.reaction = new SocketReactionCommand(this.#socket);

    this.#socket.onReceived((command: SocketCommand) => {
      switch (command.commandType) {
        case 'applyMyStatus':
          this.#applyMyStatusEvent.set(command.response);
          break;
        case 'applyCurrentUserList':
          this.#applyUsersEvent.set(command.response);
          break;
        case 'applyCurrentChatList':
          GroupedChatService.updateChats(
            this.#chatAdapter.toChats(command.response)
          );
          ChatService.requestScrollDown(true);
          break;
        case 'applyNotifyTo':
          console.log(command);
          break;
        case 'reaction':
          GroupedChatService.updateReactions(
            command.response.chatHash,
            command.response.reactions
          );
          break;
        case 'applyNotifyFrom':
          PushListService.push({
            hash: new HashGenerator().generate('applyNotifyFrom'),
            channel: 'alarm',
            mute: false,
            read: false,
            timestamp: Number.parseInt(command.response.timestamp),
            icon: command.response.from.icon,
            title: command.response.from.nickname,
            body: `"${command.response.from.nickname}"로 부터 알림이 왔어요.`,
          });
          SoundService.playNotificationSound();
          break;
        case 'chat':
          GroupedChatService.addChat(
            this.#chatAdapter.toChat(command.response)
          );
          ChatService.requestScrollDown();
          break;
        case 'link-update':
          GroupedChatService.updateLink(
            command.response.chatHash,
            command.response.title,
            command.response.thumbnail
          );
          ChatService.requestScrollDown();
          break;
      }
    });

    this.#socket.connect();
  }

  #createWebSocketModel(privateKey: string): SocketModel {
    const socket = new WebSocketModel();
    socket.setOnOpen(() => {
      this.#isConnected.set(true);
      SocketService.login?.execute(privateKey);
    });
    socket.setOnClose(() => {
      this.#isConnected.set(false);
      GroupedChatService.updateChats([]);
    });
    return socket;
  }
}

export const ChatNetworkService = new ChatNetworkServiceInit();
