import type {
  SocketModel,
  SocketRequest,
  SocketCommand,
  SocketCallback,
} from '../common/SocketModel';

export class WebSocketModel implements SocketModel {
  static readonly #HTTPS_URL = 'wss://mycast.xyz:8002';

  #webSocket: WebSocket;
  #callback: SocketCallback;
  #onOpen: () => void;

  constructor() {
    this.#webSocket = this.connect();
    this.#onOpen = () => {};
    this.#callback = (_) => {};
  }

  setOnOpen(onOpen: () => void): void {
    this.#onOpen = onOpen;
  }

  send(request: SocketRequest): void {
    console.log('send', request);
    this.#webSocket.send(JSON.stringify(request));
  }

  onReceived(callback: SocketCallback): void {
    this.#callback = callback;
  }

  #onRawMessage(messageEvent: MessageEvent): void {
    const data: SocketCommand = JSON.parse(messageEvent.data);
    this.#callback(data);
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
