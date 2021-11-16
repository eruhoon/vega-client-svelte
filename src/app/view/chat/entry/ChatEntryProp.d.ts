import type { ChatMessage } from '../../../model/chat/ChatMessage';

export type ChatEntryProp = {
  hash: string;
  nickname: string;
  icon: string;
  senderType: ChatEntryPropType;
  messages: ChatMessage[];
};

export type ChatEntryPropType = 'PC' | 'MOBILE' | 'BOT';
