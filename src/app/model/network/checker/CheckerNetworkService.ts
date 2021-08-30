import type { CheckerSocketModel } from '../../socket/checker/CheckerSocketModel';
import { SocketIoCheckerSocketModel } from '../../socket/checker/SocketIoCheckerSocketModel';

class CheckerNetworkServiceInit {
  #socket: CheckerSocketModel | null = null;

  init(privateKey: string) {
    this.#socket = this.#createSocketIoCheckerSocket(privateKey);
  }

  #createSocketIoCheckerSocket(privateKey: string): CheckerSocketModel {
    const host = 'mycast.xyz:9000';
    const socket = new SocketIoCheckerSocketModel(host, privateKey);
    socket.onRefreshStream((s) => this.#onRefreshStream(s));
    return;
  }

  #onRefreshStream(streams: any) {
    console.log('refresh_streams', streams);
  }
}

export const CheckerNetworkService = new CheckerNetworkServiceInit();
