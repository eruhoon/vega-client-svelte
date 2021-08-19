import { ProfileService } from '../../service/ProfileService';
import { UserListService } from '../../service/UserListService';
import { ChatService } from '../chat/ChatService';
import { SocketChatCommand } from '../socket/command/SocketChatCommand';
import { SocketLoginCommand } from '../socket/command/SocketLoginCommand';
import { SocketService } from '../socket/SocketService';
import { WebSocketModel } from '../socket/websocket/WebSocketModel';
import { MyStatus } from '../status/MyStatus';

export class NetworkModel {
  #socket = new WebSocketModel();

  init(): void {
    SocketService.chat = new SocketChatCommand(this.#socket);
    SocketService.login = new SocketLoginCommand(this.#socket);
    this.#socket.setOnOpen(() => {
      SocketService.isConnected.set(true);
      SocketService.login?.execute(MyStatus.privateKey);
    });

    this.#socket.onReceived((command) => {
      switch (command.commandType) {
        case 'applyMyStatus':
          ProfileService.profileIcon.set(command.response.icon);
          ProfileService.nickname.set(command.response.nickname);
          break;
        case 'applyCurrentUserList':
          UserListService.users.set(command.response);
          break;
        case 'applyCurrentChatList':
          ChatService.chats.set(command.response);
          break;
      }
    });
  }
}
