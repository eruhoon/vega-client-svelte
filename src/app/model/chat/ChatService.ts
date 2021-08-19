import { writable, Writable } from 'svelte/store';
import type { ChatProperty } from './ChatProperty';

export const ChatService: ChatServiceInit = {
  chats: writable([]),
};

type ChatServiceInit = {
  readonly chats: Writable<ChatProperty[]>;
};
