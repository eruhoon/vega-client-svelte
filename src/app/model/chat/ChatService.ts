import { get, writable, Writable } from 'svelte/store';
import type { ChatProperty } from './ChatProperty';

class ChatServiceInit {
  readonly chats: Writable<ChatProperty[]> = writable([]);
  readonly scrollLock: Writable<boolean> = writable(false);
  readonly scrollDown: Writable<ScrollDownCommand> = writable(
    (force: boolean) => {}
  );

  requestScrollDown(force: boolean = false) {
    const scrollDown = get(this.scrollDown);
    scrollDown(force);
  }
}

export const ChatService = new ChatServiceInit();

type ScrollDownCommand = (force: boolean) => void;
