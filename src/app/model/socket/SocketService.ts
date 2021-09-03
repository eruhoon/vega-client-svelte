import { writable, Writable } from 'svelte/store';
import type { SocketChatCommand } from './command/SocketChatCommand';
import type { SocketLoginCommand } from './command/SocketLoginCommand';
import type { ModifyProfileCommand } from './command/SocketModifyProfileCommand';
import type { NotifyUserCommand } from './command/SocketNotifyUserCommand';

export const SocketService: SocketServiceInit = {
  login: null,
  chat: null,
  modifyProfile: null,
  notifyUser: null,
  isConnected: writable(false),
};

type SocketServiceInit = {
  login: SocketLoginCommand | null;
  chat: SocketChatCommand | null;
  notifyUser: NotifyUserCommand | null;
  modifyProfile: ModifyProfileCommand | null;
  isConnected: Writable<boolean>;
};
