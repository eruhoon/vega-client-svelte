import type {
  CheckerSocketModel,
  RefreshStream,
} from '../model/socket/checker/CheckerSocketModel';
import { SocketIoCheckerSocketModel } from '../model/socket/checker/SocketIoCheckerSocketModel';
import { StreamService } from './StreamService';

class CheckerNetworkServiceInit {
  #socket: CheckerSocketModel | null = null;

  init(privateKey: string) {
    this.#socket = this.#createSocketIoCheckerSocket(privateKey);
  }

  #createSocketIoCheckerSocket(privateKey: string): CheckerSocketModel {
    const host = 'mycast.xyz:9001';
    const socket = new SocketIoCheckerSocketModel(host, privateKey);
    socket.onRefreshStream((s) => this.#onRefreshStream(s));
    return socket;
  }

  #onRefreshStream(streams: RefreshStream) {
    StreamService.setLocals(streams.local);
    StreamService.setExternals(streams.external);
  }
}

export const CheckerNetworkService = new CheckerNetworkServiceInit();
