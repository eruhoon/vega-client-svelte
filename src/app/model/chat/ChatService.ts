import { writable, Writable } from 'svelte/store';
import type { ChatProperty } from './ChatProperty';

export const ChatService: ChatServiceInit = {
  chats: writable([]),
  scrollLock: writable(false),
};

type ChatServiceInit = {
  readonly chats: Writable<ChatProperty[]>;
  readonly scrollLock: Writable<boolean>;
};
