import type { ChatMessage } from '../../chat/ChatMessage';
import type { ChatProperty } from '../../chat/ChatProperty';
import { ChatSender } from '../../chat/ChatSender';
import type { SocketCurrentChat } from '../../socket/common/SocketModel';

export class ChatAdapter {
  toChats(socketChats: SocketCurrentChat[]): ChatProperty[] {
    let chats: ChatProperty[] = [];
    socketChats.forEach((socketChat) => {
      chats = this.addChat(chats, socketChat);
    });
    return chats;
  }

  addChat(
    chats: ChatProperty[],
    socketChat: SocketCurrentChat
  ): ChatProperty[] {
    const nextChats = chats.map((e) => e);
    const sender = this.#createChatSender(socketChat);
    const message = this.#createChatMessage(socketChat);
    const lastChat = nextChats[chats.length - 1];
    let chat: ChatProperty;
    if (lastChat && ChatSender.equals(lastChat.sender, sender)) {
      chat = lastChat;
    } else {
      chat = this.#createEmptyChat(sender);
      nextChats.push(chat);
    }
    chat.messages.push(message);
    return nextChats;
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
    };
  }

  #createEmptyChat(sender: ChatSender): ChatProperty {
    return {
      sender,
      messages: [],
    };
  }

  toChat(socketChat: SocketCurrentChat): ChatProperty {
    const senderType = socketChat.isMobile
      ? 'MOBILE'
      : socketChat.level === 100
      ? 'BOT'
      : 'PC';
    return {
      sender: {
        icon: socketChat.icon,
        nickname: socketChat.nickname,
        type: senderType,
      },
      messages: [],
    };
  }
}
