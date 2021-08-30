import type { CheckerSocketModel } from '../../socket/checker/CheckerSocketModel';
import { SocketIoCheckerSocketModel } from '../../socket/checker/SocketIoCheckerSocketModel';

class CheckerNetworkServiceInit {
  #socket: CheckerSocketModel | null = null;

  init(privateKey: string) {
    const host = 'mycast.xyz:9000';
    this.#socket = new SocketIoCheckerSocketModel(host, privateKey);
  }
}

export const CheckerNetworkService = new CheckerNetworkServiceInit();
