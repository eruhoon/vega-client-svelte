import type { ChatMessage } from './ChatMessage';
import type { ChatSender } from './ChatSender';

export type ChatProperty = {
  sender: ChatSender;
  messages: ChatMessage[];
};
