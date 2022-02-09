import { Readable, writable, Writable } from 'svelte/store';
import type { ScrollDownEvent } from './chat/ScrollDownEvent';

class ChatServiceInit {
  readonly #scrollLock: Writable<boolean> = writable(false);
  readonly #scrollDownEvent: Writable<ScrollDownEvent | null> = writable(null);
  readonly #activeChatMessage: Writable<string | null> = writable(null);

  get scrollLock(): Readable<boolean> {
    return this.#scrollLock;
  }

  get activeChatMessage(): Readable<string | null> {
    return this.#activeChatMessage;
  }

  get scrollDownEvent(): Readable<ScrollDownEvent | null> {
    return this.#scrollDownEvent;
  }

  requestScrollDown(force: boolean = false) {
    this.#scrollDownEvent.set({ force });
  }

  setActive(chatMessageHash: string) {
    this.#activeChatMessage.set(chatMessageHash);
  }

  setScrollLock(value: boolean) {
    this.#scrollLock.set(value);
  }
}

export const ChatService = new ChatServiceInit();
