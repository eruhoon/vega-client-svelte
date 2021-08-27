import { writable, Writable } from 'svelte/store';
import type { SocketChatCommand } from './command/SocketChatCommand';
import type { SocketLoginCommand } from './command/SocketLoginCommand';
import type { ModifyProfileCommand } from './command/SocketModifyProfileCommand';

export const SocketService: SocketServiceInit = {
  login: null,
  chat: null,
  modifyProfile: null,
  isConnected: writable(false),
};

type SocketServiceInit = {
  login: SocketLoginCommand | null;
  chat: SocketChatCommand | null;
  modifyProfile: ModifyProfileCommand | null;
  isConnected: Writable<boolean>;
};
