import { get, Readable, writable, Writable } from 'svelte/store';
import type { ChatProperty } from '../model/chat/ChatProperty';
import type { ChatReaction } from '../model/chat/ChatReaction';

class ChatServiceInit {
  readonly chats: Writable<ChatProperty[]> = writable([]);
  readonly scrollLock: Writable<boolean> = writable(false);
  readonly #scrollDown: Writable<ScrollDownCommand> = writable(
    (force: boolean) => {}
  );
  readonly #activeChatMessage: Writable<string | null> = writable(null);

  get activeChatMessage(): Readable<string | null> {
    return this.#activeChatMessage;
  }

  get scrollDown(): Readable<ScrollDownCommand> {
    return this.#scrollDown;
  }

  registerScrollDownComamnd(command: ScrollDownCommand) {
    this.#scrollDown.set(command);
  }

  requestScrollDown(force: boolean = false) {
    const scrollDown = get(this.#scrollDown);
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

  updateLink(chatMessageHash: string, title: string, thumbnail: string) {
    this.chats.update((it) =>
      it.map((chat) => {
        chat.messages = chat.messages.map((msg) => {
          if (msg.hash === chatMessageHash) {
            const json = JSON.parse(msg.body);
            json.info.title = title;
            json.info.thumbnail = thumbnail;
            msg.body = JSON.stringify(json);
          }
          return msg;
        });
        return chat;
      })
    );
  }

  setActive(chatMessageHash: string) {
    this.#activeChatMessage.set(chatMessageHash);
  }
}

export const ChatService = new ChatServiceInit();

type ScrollDownCommand = (force: boolean) => void;
