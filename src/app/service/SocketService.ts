import { Readable, writable, Writable } from 'svelte/store';
import type { SocketChatCommand } from '../model/socket/command/SocketChatCommand';
import type { SocketLoginCommand } from '../model/socket/command/SocketLoginCommand';
import type { ModifyProfileCommand } from '../model/socket/command/SocketModifyProfileCommand';
import type { NotifyUserCommand } from '../model/socket/command/SocketNotifyUserCommand';
import type { SocketReactionCommand } from '../model/socket/command/SocketReactionCommand';

class SocketServiceInit {
  login: SocketLoginCommand | null = null;
  chat: SocketChatCommand | null = null;
  notifyUser: NotifyUserCommand | null = null;
  modifyProfile: ModifyProfileCommand | null = null;
  reaction: SocketReactionCommand | null = null;
}

export const SocketService = new SocketServiceInit();
