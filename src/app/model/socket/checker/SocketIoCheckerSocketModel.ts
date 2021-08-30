import io from 'socket.io-client';
import type {
  CheckerSocketModel,
  OnRefreshStreams,
} from './CheckerSocketModel';

export class SocketIoCheckerSocketModel implements CheckerSocketModel {
  #socket: SocketIOClient.Socket;
  #onRefreshStream: OnRefreshStreams | null = null;

  constructor(host: string, privateKey: string) {
    this.#socket = SocketIoCheckerSocketModel.#createSocket(host, privateKey);
    this.#socket.on('connect', () => {
      console.log('connected');
    });
    this.#socket.on('refresh_streams', (raw: any) => {
      this.#onRefreshStream(raw);
    });
    this.#socket.on('new_stream_notification', (raw: any) => {
      console.log('new_stream_notification', raw);
    });
  }

  onRefreshStream(callback: OnRefreshStreams | null) {
    this.#onRefreshStream = callback;
  }

  static #createSocket(
    host: string,
    privateKey: string
  ): SocketIOClient.Socket {
    return io.connect(`https://${host}?key=${privateKey}`);
  }
}
