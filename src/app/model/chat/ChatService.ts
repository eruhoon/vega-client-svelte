import { get, writable, Writable } from 'svelte/store';
import type { ChatProperty } from './ChatProperty';
import type { ChatReaction } from './ChatReaction';

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

  updateReaction(chatMessageHash: string, reactions: ChatReaction[]) {
    this.chats.update((it) =>
      it.map((chat) => {
        chat.messages = chat.messages.map((msg) => {
          if (msg.hash === chatMessageHash) {
            msg.reactions = reactions;
          }
          return msg;
        });
        return chat;
      })
    );
  }
}

export const ChatService = new ChatServiceInit();

type ScrollDownCommand = (force: boolean) => void;
