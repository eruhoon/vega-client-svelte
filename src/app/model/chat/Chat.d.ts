import type { ChatMessage } from './ChatMessage';
import type { ChatSender } from './ChatSender';

export type Chat = {
  sender: ChatSender;
  message: ChatMessage;
};
