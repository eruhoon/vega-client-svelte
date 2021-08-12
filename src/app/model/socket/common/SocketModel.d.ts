export interface SocketModel {
  send(request: SocketRequest): void;
}

export type SocketRequest = SocketLoginRequest | SocketChatRequest;

type SocketLoginRequest = {
  commandType: 'user-login';
  resource: {
    channel: 'chat';
    privateKey: string;
  };
};

type SocketChatRequest = {
  commandType: 'chat';
  resource: {
    userKey: string;
    msg: string;
    type: string;
  };
};
