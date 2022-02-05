<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import type { Chat } from '../../model/chat/Chat';
  import type { ChatReaction } from '../../model/chat/ChatReaction';
  import type { ScrollDownEvent } from '../../service/chat/ScrollDownEvent';
  import { ChatService } from '../../service/ChatService';
  import { OptionService } from '../../service/OptionService';
  import { HashGenerator } from '../../util/hash/HashGenerator';
  import ChatEntry from './entry/ChatEntry.svelte';
  import type { ChatGroup } from './entry/ChatGroup';

  const hashGenerator = new HashGenerator();
  let enableBot: boolean = get(OptionService.enableBot);
  let scrollLock: boolean = false;
  let rootView: Element;

  OptionService.enableBot.subscribe((v) => (enableBot = v));

  let length: number = 0;
  let groups: ChatGroup[] = [];

  const scrollDown = (force: boolean) => {
    if (!force) {
      if (scrollLock) {
        return;
      }
    }
    setTimeout(() => {
      rootView.scrollTop = rootView.scrollHeight;
    });
  };

  onMount(() => {
    ChatService.scrollLock.subscribe((it) => (scrollLock = it));
    ChatService.updateChatsEvent.subscribe(onChatsUpdated);
    ChatService.addChatEvent.subscribe(onChatAdded);
    ChatService.scrollDownEvent.subscribe((it) => it && onScrollDownEvent(it));
    ChatService.updateReactionsEvent.subscribe((it) => {
      if (it) {
        const { chatHash, reactions } = it;
        updateReactions(chatHash, reactions);
      }
    });

    ChatService.updateLinkEvent.subscribe((it) => {
      if (it) {
        const { chatHash, title, thumbnail } = it;
        updateLink(chatHash, title, thumbnail);
      }
    });
  });

  function onChatsUpdated(chats: Chat[]) {
    groups = [];
    groups = [...updateChats(chats)];
    ChatService.requestScrollDown();
  }

  function onChatAdded(chat: Chat | null) {
    if (chat) {
      groups = [...addChat(groups, chat)];
    }
    scrollDown(false);
  }

  function updateChats(chats: Chat[]): ChatGroup[] {
    const props: ChatGroup[] = [];
    chats.forEach((chat) => addChat(props, chat));
    return props;
  }

  function removePrevChat(prev: ChatGroup[]) {
    const first = prev[0];
    const messages = first.messages;
    messages.shift();
    if (messages.length === 0) {
      prev.shift();
    }
    length--;
    return [...prev];
  }

  function addChat(prev: ChatGroup[], chat: Chat): ChatGroup[] {
    if (length > 50) {
      prev = removePrevChat(prev);
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
        hash: hashGenerator.generate('chat'),
        icon: chat.sender.icon,
        nickname: chat.sender.nickname,
        senderType: chat.sender.type,
        messages: [],
      };
      prev.push(last);
    }
    last.messages.push(chat.message);
    length++;
    return [...prev];
  }

  function updateReactions(chatHash: string, reactions: ChatReaction[]) {
    groups.forEach((group) => {
      const found = group.messages.find((m) => m.hash === chatHash);
      if (found) {
        found.reactions = reactions;
      }
    });
    groups = [...groups];
  }

  function updateLink(chatHash: string, title: string, thumbnail: string) {
    groups.forEach((group) => {
      const found = group.messages.find((m) => m.hash === chatHash);
      if (found) {
        const json = JSON.parse(found.body);
        json.info.title = title;
        json.info.thumbnail = thumbnail;
        found.body = JSON.stringify(json);
      }
    });
    groups = [...groups];

    scrollDown(false);
  }

  function onScroll() {
    const { scrollTop, scrollHeight, clientHeight } = rootView;
    const threashold = 500 + clientHeight;
    const diff = scrollHeight - scrollTop;
    ChatService.setScrollLock(diff > threashold);
  }

  function onScrollDownEvent(event: ScrollDownEvent) {
    scrollDown(event.force);
  }
</script>

<div class="chat-list" bind:this={rootView} on:scroll={onScroll}>
  {#each groups as prop (prop.hash)}
    {#if !(!enableBot && prop.senderType === 'BOT')}
      <ChatEntry {prop} messages={prop.messages} />
    {/if}
  {/each}
</div>

<style lang="scss">
  .chat-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 10px;
      height: 5px;
      border: 3px solid;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 50px;
      width: 50px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
    }
  }

  // 컬러 스크롤링 컬러셋
  .chat-list {
    background-color: var(--primary-background-color);
    scrollbar-color: var(--primary-activeground-color)
      var(--primary-background-color);
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: var(--primary-background-color);
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-track {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-activeground-color);
    }
  }
</style>
