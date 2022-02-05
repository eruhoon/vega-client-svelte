import { get, Readable, writable, Writable } from 'svelte/store';
import type { Chat } from '../model/chat/Chat';
import type { ChatReaction } from '../model/chat/ChatReaction';

class ChatServiceInit {
  readonly #updateChatsEvent: Writable<Chat[]> = writable([]);
  readonly #addChatEvent: Writable<Chat | null> = writable(null);
  readonly #updateReactionsEvent: Writable<UpdateReactions | null> =
    writable(null);
  readonly #updateLinkEvent: Writable<UpdateLink | null> = writable(null);
  readonly #scrollLock: Writable<boolean> = writable(false);
  readonly #scrollDown: Writable<ScrollDownCommand> = writable(
    (force: boolean) => {}
  );
  readonly #activeChatMessage: Writable<string | null> = writable(null);

  get scrollLock(): Readable<boolean> {
    return this.#scrollLock;
  }

  get updateChatsEvent(): Readable<Chat[]> {
    return this.#updateChatsEvent;
  }

  get addChatEvent(): Readable<Chat> {
    return this.#addChatEvent;
  }

  get updateReactionsEvent(): Readable<UpdateReactions | null> {
    return this.#updateReactionsEvent;
  }

  get updateLinkEvent(): Readable<UpdateLink | null> {
    return this.#updateLinkEvent;
  }

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

  updateChats(chats: Chat[]) {
    this.#updateChatsEvent.set(chats);
  }

  addChat(chat: Chat) {
    this.#addChatEvent.set(chat);
  }

  updateReactions(chatHash: string, reactions: ChatReaction[]) {
    this.#updateReactionsEvent.set({ chatHash, reactions });
  }

  updateLink(chatHash: string, title: string, thumbnail: string) {
    this.#updateLinkEvent.set({ chatHash, thumbnail, title });
  }

  setActive(chatMessageHash: string) {
    this.#activeChatMessage.set(chatMessageHash);
  }

  setScrollLock(value: boolean) {
    this.#scrollLock.set(value);
  }
}

export const ChatService = new ChatServiceInit();

type ScrollDownCommand = (force: boolean) => void;

type OnChatCallback = (chat: Chat) => void;

type UpdateReactions = {
  readonly chatHash: string;
  readonly reactions: ChatReaction[];
};

type UpdateLink = {
  readonly chatHash: string;
  readonly title: string;
  readonly thumbnail: string;
};
