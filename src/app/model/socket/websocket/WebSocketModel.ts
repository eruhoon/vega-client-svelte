import type { SocketModel } from '../common/SocketModel';

export class WebSocketModel implements SocketModel {
  static readonly #HTTPS_URL = 'wss://mycast.xyz:8002';

  #webSocket: WebSocket;
  #onOpen: () => void;

  constructor() {
    this.#webSocket = this.connect();
    this.#onOpen = () => {};
  }

  setOnOpen(onOpen: () => void): void {
    this.#onOpen = onOpen;
  }

  // TODO: remove any
  send(request: any): void {
    console.log('send', request);
    this.#webSocket.send(JSON.stringify(request));
  }

  #onRawMessage(messageEvent: MessageEvent): void {
    console.log('message', messageEvent);
  }

  #onClose(): void {
    console.log('close');
  }

  connect(): WebSocket {
    const socket = new WebSocket(WebSocketModel.#HTTPS_URL);
    socket.onopen = () => this.#onOpen();
    socket.onmessage = (message) => this.#onRawMessage(message);
    socket.onclose = () => this.#onClose();
    return socket;
  }
}
