import type { Chat } from '../../chat/Chat';
import type { ChatMessage } from '../../chat/ChatMessage';
import { ChatSender } from '../../chat/ChatSender';
import type { SocketCurrentChat } from '../../socket/common/SocketModel';

export class ChatAdapter {
  static #MAX_SIZE = 50;

  toChats(socketChats: SocketCurrentChat[]): Chat[] {
    const sliced = this.#sliceLastChat(socketChats);
    return sliced.map((socketChat) => this.toChat(socketChat));
  }

  toChat(socketChat: SocketCurrentChat): Chat {
    return {
      sender: this.#createChatSender(socketChat),
      message: this.#createChatMessage(socketChat),
    };
  }

  #createChatSender(socketChat: SocketCurrentChat): ChatSender {
    const senderType = socketChat.isMobile
      ? 'MOBILE'
      : socketChat.level === 100
      ? 'BOT'
      : 'PC';
    return new ChatSender(socketChat.icon, socketChat.nickname, senderType);
  }

  #createChatMessage(socketChat: SocketCurrentChat): ChatMessage {
    return {
      type: socketChat.type,
      hash: socketChat.hash,
      timestamp: socketChat.timestamp,
      body: socketChat.msg.response,
      reactions: socketChat.reactions,
    };
  }

  #sliceLastChat(raws: SocketCurrentChat[]): SocketCurrentChat[] {
    const length = raws.length;
    const start = Math.max(length - ChatAdapter.#MAX_SIZE, 0);
    return raws.slice(start);
  }
}
