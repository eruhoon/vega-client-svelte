import { Readable, writable, Writable } from 'svelte/store';
import type { NotificationTarget } from './NotificationTarget';

class NotifyUserServiceInit {
  #target: Writable<NotificationTarget | null> = writable(null);

  get target(): Readable<NotificationTarget | null> {
    return this.#target;
  }

  setTarget(target: NotificationTarget) {
    this.#target.set(target);
  }
}

export const NotifyUserService = new NotifyUserServiceInit();
