import type { SocketModel } from '../common/SocketModel';

export class SocketLoginCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(privateKey: string): void {
    this.#socket.send({
      commandType: 'user-login',
      resource: {
        channel: 'chat',
        privateKey: privateKey,
      },
    });
  }
}
