import { writable, Writable } from 'svelte/store';
import type { SocketChatCommand } from '../model/socket/command/SocketChatCommand';
import type { SocketLoginCommand } from '../model/socket/command/SocketLoginCommand';
import type { ModifyProfileCommand } from '../model/socket/command/SocketModifyProfileCommand';
import type { NotifyUserCommand } from '../model/socket/command/SocketNotifyUserCommand';
import type { SocketReactionCommand } from '../model/socket/command/SocketReactionCommand';

export const SocketService: SocketServiceInit = {
  login: null,
  chat: null,
  modifyProfile: null,
  notifyUser: null,
  reaction: null,
  isConnected: writable(false),
};

type SocketServiceInit = {
  login: SocketLoginCommand | null;
  chat: SocketChatCommand | null;
  notifyUser: NotifyUserCommand | null;
  modifyProfile: ModifyProfileCommand | null;
  reaction: SocketReactionCommand | null;
  isConnected: Writable<boolean>;
};
