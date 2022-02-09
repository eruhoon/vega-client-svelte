import { Readable, Writable, writable } from 'svelte/store';
import type { Chat } from '../../model/chat/Chat';
import type { ChatReaction } from '../../model/chat/ChatReaction';
import { HashGenerator } from '../../util/hash/HashGenerator';
import type { ChatGroup } from '../../view/chat/entry/ChatGroup';

class GroupedChatServiceInit {
  readonly #hashGenerator = new HashGenerator();
  readonly #groupedChats: Writable<ChatGroup[]> = writable([]);

  get groupedChats(): Readable<ChatGroup[]> {
    return this.#groupedChats;
  }

  updateChats(chats: Chat[]) {
    let chatGroups: ChatGroup[] = [];
    chats.forEach((chat) => {
      chatGroups = this.#appendChat(chatGroups, chat);
    });
    this.#groupedChats.set(chatGroups);
  }

  addChat(chat: Chat) {
    this.#groupedChats.update((it) => {
      return this.#appendChat(it, chat);
    });
  }

  updateReactions(chatHash: string, reactions: ChatReaction[]) {
    this.#groupedChats.update((it) => {
      it.forEach((groupedChat) => {
        const messages = groupedChat.messages;
        const found = messages.find((m) => m.hash === chatHash);
        if (found) {
          found.reactions = reactions;
        }
      });
      return [...it];
    });
  }

  updateLink(chatHash: string, title: string, thumbnail: string) {
    this.#groupedChats.update((it) => {
      it.forEach((group) => {
        const found = group.messages.find((m) => m.hash === chatHash);
        if (found) {
          const json = JSON.parse(found.body);
          json.info.title = title;
          json.info.thumbnail = thumbnail;
          found.body = JSON.stringify(json);
        }
      });
      return [...it];
    });
  }

  #appendChat(prev: ChatGroup[], chat: Chat): ChatGroup[] {
    if (this.#getMessageLength(prev) > 50) {
      prev = this.#removePrevChat(prev);
    }

    const lastChatGroup = prev[prev.length - 1];
    let last: ChatGroup;
    if (
      lastChatGroup &&
      lastChatGroup.icon === chat.sender.icon &&
      lastChatGroup.nickname === chat.sender.nickname &&
      lastChatGroup.senderType === chat.sender.type
    ) {
      last = lastChatGroup;
    } else {
      last = {
        hash: this.#hashGenerator.generate('chat'),
        icon: chat.sender.icon,
        nickname: chat.sender.nickname,
        senderType: chat.sender.type,
        messages: [],
      };
      prev.push(last);
    }
    last.messages.push(chat.message);
    return [...prev];
  }

  #getMessageLength(groups: ChatGroup[]): number {
    return groups.length === 0
      ? 0
      : groups.map((e) => e.messages.length).reduce((a, b) => a + b);
  }

  #removePrevChat(prev: ChatGroup[]) {
    const first = prev[0];
    const messages = first.messages;
    messages.shift();
    if (messages.length === 0) {
      prev.shift();
    }
    return [...prev];
  }
}

export const GroupedChatService = new GroupedChatServiceInit();
