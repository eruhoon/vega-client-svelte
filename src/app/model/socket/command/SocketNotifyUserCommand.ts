import type { SocketModel } from '../common/SocketModel';

export class NotifyUserCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(privateKey: string, userHash: string): void {
    this.#socket.send({
      commandType: 'notify-user',
      resource: { from: privateKey, to: userHash },
    });
  }
}
