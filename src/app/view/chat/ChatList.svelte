<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { GroupedChatService } from '../../service/chat/GroupedChatService';
  import type { ScrollDownEvent } from '../../service/chat/ScrollDownEvent';
  import { ChatService } from '../../service/ChatService';
  import { OptionService } from '../../service/OptionService';
  import ChatEntry from './entry/ChatEntry.svelte';
  import type { ChatGroup } from './entry/ChatGroup';

  let enableBot: boolean = get(OptionService.enableBot);
  let scrollLock: boolean = false;
  let rootView: Element;

  OptionService.enableBot.subscribe((v) => (enableBot = v));

  let groups: ChatGroup[] = [];

  const scrollDown = (force: boolean) => {
    if (!force) {
      if (scrollLock) {
        return;
      }
    }
    setTimeout(() => {
      rootView && (rootView.scrollTop = rootView.scrollHeight);
    });
  };

  onMount(() => {
    GroupedChatService.groupedChats.subscribe((it) => (groups = it));
    ChatService.scrollLock.subscribe((it) => (scrollLock = it));
    ChatService.scrollDownEvent.subscribe((it) => it && onScrollDownEvent(it));
  });

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
