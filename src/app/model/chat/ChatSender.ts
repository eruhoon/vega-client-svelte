export class ChatSender {
  readonly icon: string;
  readonly nickname: string;
  readonly type: ChatSenderType;

  constructor(icon: string, nickname: string, type) {
    this.icon = icon;
    this.nickname = nickname;
    this.type = type;
  }

  static equals(a: ChatSender, b: ChatSender) {
    return a.icon === b.icon && a.nickname === b.nickname && a.type === b.type;
  }
}

type ChatSenderType = 'PC' | 'BOT' | 'MOBILE';
