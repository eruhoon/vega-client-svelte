import type { ChatReaction } from './ChatReaction';

export type ChatMessage = {
  type: string;
  hash: string;
  timestamp: string;
  body: any; //TODO: remove any
  reactions: ChatReaction[];
};
