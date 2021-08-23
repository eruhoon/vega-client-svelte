import type { SocketModel } from '../common/SocketModel';

export class SocketLoginCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(privateKey: string): void {
    if (!privateKey) {
      console.log('invalid value');
      return;
    }
    this.#socket.send({
      commandType: 'user-login',
      resource: {
        channel: 'chat',
        privateKey: privateKey,
      },
    });
  }
}
