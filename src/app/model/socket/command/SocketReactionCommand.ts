import type { SocketModel } from '../common/SocketModel';

export class SocketReactionCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(privateKey: string, chatHash: string, reaction: string): void {
    this.#socket.send({
      commandType: 'reaction',
      resource: { userKey: privateKey, chatHash, reaction },
    });
  }
}
