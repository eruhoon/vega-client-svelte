import { ProfileService } from '../../service/ProfileService';
import { UserListService } from '../../service/UserListService';
import { ChatService } from '../chat/ChatService';
import { SocketChatCommand } from '../socket/command/SocketChatCommand';
import { SocketLoginCommand } from '../socket/command/SocketLoginCommand';
import { ModifyProfileCommand } from '../socket/command/SocketModifyProfileCommand';
import type { SocketModel } from '../socket/common/SocketModel';
import { SocketService } from '../socket/SocketService';
import { WebSocketModel } from '../socket/websocket/WebSocketModel';
import { ChatAdapter } from './chat/ChatAdapter';

export class ChatNetworkModel {
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

    this.#socket.onReceived((command) => {
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
          ChatService.chats.set(this.#chatAdapter.toChats(command.response));
          break;
        case 'chat':
          ChatService.chats.update((prev) =>
            this.#chatAdapter.addChat(prev, command.response)
          );
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
    return socket;
  }
}
