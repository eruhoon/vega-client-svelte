import type { SocketModel } from '../common/SocketModel';

export class SocketChatCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(privateKey: string, type: string, msg: string): void {
    this.#socket.send({
      commandType: 'chat',
      resource: { userKey: privateKey, type, msg },
    });
  }
}
