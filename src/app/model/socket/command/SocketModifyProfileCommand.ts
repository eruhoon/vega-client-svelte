import type { SocketModel } from '../common/SocketModel';

export class ModifyProfileCommand {
  #socket: SocketModel;

  constructor(socket: SocketModel) {
    this.#socket = socket;
  }

  execute(
    privateKey: string,
    userInfo: { icon: string; nickname: string; statusMessage: string }
  ): void {
    this.#socket.send({
      commandType: 'modify-profile',
      resource: {
        privateKey,
        userInfo,
      },
    });
  }
}
