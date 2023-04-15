import io from 'socket.io-client';
import type { DonationSocketModel } from './DonationSocketModel';

export class DonationSocketioModel implements DonationSocketModel {

  #socket: SocketIOClient.Socket;

  constructor(host: string, privateKey: string) {
    this.#socket = DonationSocketioModel.#createSocket(host, privateKey);
    this.#socket.on('connect', () => {
      console.log('connected');
    });
  }

  static #createSocket(
    host: string, privateKey: string): SocketIOClient.Socket {
    return io.connect(`http://${host}?type=channel&key=${privateKey}`);
  }
}
