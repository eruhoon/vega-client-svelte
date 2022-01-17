import type { Chat } from '../../chat/Chat';
import type { ChatMessage } from '../../chat/ChatMessage';
import type { ChatProperty } from '../../chat/ChatProperty';
import { ChatSender } from '../../chat/ChatSender';
import type { SocketCurrentChat } from '../../socket/common/SocketModel';

export class ChatAdapter {
  static #MAX_SIZE = 50;

  toChats(socketChats: SocketCurrentChat[]): Chat[] {
    let chats: Chat[] = [];
    const sliced = this.#sliceLastChat(socketChats);
    sliced.forEach((socketChat) => {
      chats = this.addChat(chats, socketChat);
    });
    return chats;
  }

  addChat(chats: Chat[], socketChat: SocketCurrentChat): Chat[] {
    const nextChats = chats.slice(Math.max(0, chats.length - 50));
    return [
      ...nextChats,
      {
        sender: this.#createChatSender(socketChat),
        message: this.#createChatMessage(socketChat),
      },
    ];
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
