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

export type ModifyProfileRequest = {
  name: string;
  icon: string;
  statusMessage: string;
};

export type ModifyProfileResponse = {
  name: string;
  icon: string;
  statusMessage: string;
};
