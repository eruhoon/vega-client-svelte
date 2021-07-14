export class ChatEntryProp {
  nickname: string = '시구르나';
  icon: string = 'https://i.imgur.com/9kpJJW6.jpg';
  senderType: ChatEntryPropType = 'PC';
}

export type ChatEntryPropType = 'PC' | 'MOBILE' | 'BOT';
