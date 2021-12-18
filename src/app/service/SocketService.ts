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
  #isConnected: Writable<boolean> = writable(false);

  get isConnected(): Readable<boolean> {
    return this.#isConnected;
  }

  connect() {
    this.#isConnected.set(true);
  }

  disconnect() {
    this.#isConnected.set(false);
  }
}

export const SocketService = new SocketServiceInit();
