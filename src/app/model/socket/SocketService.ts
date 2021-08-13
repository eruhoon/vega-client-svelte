import type { SocketChatCommand } from './command/SocketChatCommand';
import type { SocketLoginCommand } from './command/SocketLoginCommand';

export const SocketService: SocketServiceInit = {
  login: null,
  chat: null,
};

type SocketServiceInit = {
  login: SocketLoginCommand | null;
  chat: SocketChatCommand | null;
};
