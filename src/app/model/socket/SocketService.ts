import { writable, Writable } from 'svelte/store';
import type { SocketChatCommand } from './command/SocketChatCommand';
import type { SocketLoginCommand } from './command/SocketLoginCommand';

export const SocketService: SocketServiceInit = {
  login: null,
  chat: null,
  isConnected: writable(false),
};

type SocketServiceInit = {
  login: SocketLoginCommand | null;
  chat: SocketChatCommand | null;
  isConnected: Writable<boolean>;
};
