export interface SocketModel {
  send(request: SocketRequest): void;
  onReceived(callback: SocketCallback): void;
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

export type SocketCallback = (response: SocketCommand) => void;

export type SocketCommand = SocketChatCommand | SocketApplyMyStatusCommand;

type BaseSocketCommand<T, Request, Response> = {
  hash: string;
  commandType: T;
  request: Request;
  response: Response;
};

type SocketChatCommand = BaseSocketCommand<'chat', any, any>;

type SocketApplyMyStatusResponse = {
  coin: number;
  exp: number;
  icon: string;
  iconBorderColor: string;
  level: number;
  need: number;
  nickname: string;
  statusMessage: string;
};
type SocketApplyMyStatusCommand = BaseSocketCommand<
  'applyMyStatus',
  null,
  SocketApplyMyStatusResponse
>;
