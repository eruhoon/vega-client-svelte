import { ChatService } from '../model/chat/ChatService';
import { ChatAdapter } from '../model/network/chat/ChatAdapter';
import { SocketChatCommand } from '../model/socket/command/SocketChatCommand';
import { SocketLoginCommand } from '../model/socket/command/SocketLoginCommand';
import { ModifyProfileCommand } from '../model/socket/command/SocketModifyProfileCommand';
import { NotifyUserCommand } from '../model/socket/command/SocketNotifyUserCommand';
import { SocketReactionCommand } from '../model/socket/command/SocketReactionCommand';
import type {
  SocketCommand,
  SocketModel,
} from '../model/socket/common/SocketModel';
import { SocketService } from '../model/socket/SocketService';
import { WebSocketModel } from '../model/socket/websocket/WebSocketModel';
import { HashGenerator } from '../util/hash/HashGenerator';
import { PushListService } from '../view/main/push/PushListService';
import { ProfileService } from './ProfileService';
import { UserListService } from './UserListService';

class ChatNetworkServiceInit {
  #socket: SocketModel | null = null;
  #chatAdapter = new ChatAdapter();

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
          ProfileService.statusMessage.set(command.response.statusMessage);
          ProfileService.profileIcon.set(command.response.icon);
          ProfileService.nickname.set(command.response.nickname);
          break;
        case 'applyCurrentUserList':
          UserListService.users.set(command.response);
          break;
        case 'applyCurrentChatList':
          ChatService.chats.set([]);
          ChatService.chats.set(this.#chatAdapter.toChats(command.response));
          break;
        case 'applyNotifyTo':
          console.log(command);
          break;
        case 'reaction':
          ChatService.updateReaction(
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
            timestamp: command.response.timestamp,
            icon: command.response.from.icon,
            title: command.response.from.nickname,
            body: `"${command.response.from.nickname}"로 부터 알림이 왔어요.`,
          });
          break;
        case 'chat':
          ChatService.chats.update((prev) =>
            this.#chatAdapter.addChat(prev, command.response)
          );
          break;
        case 'link-update':
          ChatService.updateLink(
            command.response.chatHash,
            command.response.title,
            command.response.thumbnail
          );
          break;
      }
    });

    this.#socket.connect();
  }

  #createWebSocketModel(privateKey: string): SocketModel {
    const socket = new WebSocketModel();
    socket.setOnOpen(() => {
      SocketService.isConnected.set(true);
      SocketService.login?.execute(privateKey);
    });
    socket.setOnClose(() => {
      SocketService.isConnected.set(false);
      ChatService.chats.set([]);
      this.init(privateKey);
    });
    return socket;
  }
}

export const ChatNetworkService = new ChatNetworkServiceInit();
