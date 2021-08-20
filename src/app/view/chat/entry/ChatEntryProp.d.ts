import type { ChatMessage } from '../../../model/chat/ChatMessage';

export type ChatEntryProp = {
  nickname: string;
  icon: string;
  senderType: ChatEntryPropType;
  messages: ChatMessage[];
};

export type ChatEntryPropType = 'PC' | 'MOBILE' | 'BOT';
