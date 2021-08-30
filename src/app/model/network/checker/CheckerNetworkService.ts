import type {
  CheckerSocketModel,
  RefreshStream,
} from '../../socket/checker/CheckerSocketModel';
import { SocketIoCheckerSocketModel } from '../../socket/checker/SocketIoCheckerSocketModel';
import { StreamService } from '../../stream/StreamService';

class CheckerNetworkServiceInit {
  #socket: CheckerSocketModel | null = null;

  init(privateKey: string) {
    this.#socket = this.#createSocketIoCheckerSocket(privateKey);
  }

  #createSocketIoCheckerSocket(privateKey: string): CheckerSocketModel {
    const host = 'mycast.xyz:9000';
    const socket = new SocketIoCheckerSocketModel(host, privateKey);
    socket.onRefreshStream((s) => this.#onRefreshStream(s));
    return socket;
  }

  #onRefreshStream(streams: RefreshStream) {
    console.log('refresh_streams', streams);
    StreamService.setLocals(streams.local);
  }
}

export const CheckerNetworkService = new CheckerNetworkServiceInit();
