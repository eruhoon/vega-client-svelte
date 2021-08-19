export type ChatEntryProp = {
  nickname: string;
  icon: string;
  senderType: ChatEntryPropType;
};

export type ChatEntryPropType = 'PC' | 'MOBILE' | 'BOT';
