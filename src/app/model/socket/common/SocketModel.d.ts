export interface SocketModel {
  send(request: SocketRequest): void;
}

export type SocketRequest = SocketLoginRequest;

type SocketLoginRequest = {
  commandType: 'user-login';
  resource: {
    channel: 'chat';
    privateKey: string;
  };
};
