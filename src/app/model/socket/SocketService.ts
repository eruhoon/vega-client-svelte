import type { SocketChatCommand } from './command/SocketChatCommand';

export const SocketService: SocketServiceInit = {
  chat: null,
};

type SocketServiceInit = {
  chat: SocketChatCommand | null;
};
