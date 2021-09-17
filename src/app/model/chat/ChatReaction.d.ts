export type ChatReaction = {
  hash: string;
  timestamp: string;
  user: ChatReactionUser;
  value: string;
};

type ChatReactionUser = { hash: string; icon: string; nickname: string };
