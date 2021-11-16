import type {
  SocketModel,
  SocketRequest,
  SocketCommand,
  SocketCallback,
} from '../common/SocketModel';

export class WebSocketModel implements SocketModel {
  static readonly #HTTPS_URL = 'wss://mycast.xyz:8002';

  #socket: WebSocket | null = null;
  #callback: SocketCallback;
  #onOpen: () => void;
  #onClose: () => void;

  constructor() {
    this.#socket = null;
    this.#onOpen = () => {};
    this.#onClose = () => {};
    this.#callback = (_) => {};
  }

  setOnOpen(onOpen: () => void): void {
    this.#onOpen = onOpen;
  }

  setOnClose(onClose: () => void): void {
    this.#onClose = onClose;
  }

  send(request: SocketRequest): void {
    this.#socket?.send(JSON.stringify(request));
  }

  onReceived(callback: SocketCallback): void {
    this.#callback = callback;
  }

  #onRawMessage(messageEvent: MessageEvent): void {
    const data: SocketCommand = JSON.parse(messageEvent.data);
    this.#callback(data);
  }

  connect(): void {
    const socket = new WebSocket(WebSocketModel.#HTTPS_URL);
    socket.onopen = () => this.#onOpen();
    socket.onmessage = (message) => this.#onRawMessage(message);
    socket.onclose = () => this.#onClose();
    this.#socket = socket;
  }

  disconnect(): void {
    this.#socket.close();
    this.#socket = null;
  }
}
