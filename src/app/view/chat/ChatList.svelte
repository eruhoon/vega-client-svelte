<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import type { ChatProperty } from '../../model/chat/ChatProperty';
  import { ChatService } from '../../model/chat/ChatService';
  import { OptionService } from '../../model/option/OptionService';
  import { HashGenerator } from '../../util/hash/HashGenerator';
  import ChatEntry from './entry/ChatEntry.svelte';
  import type { ChatEntryProp } from './entry/ChatEntryProp';

  const hashGenerator = new HashGenerator();
  let saltIndex = 0;
  let enableBot: boolean = get(OptionService.enableBot);
  let scrollLock: boolean = false;
  let chats: ChatProperty[] = [];
  let rootView: Element;

  OptionService.enableBot.subscribe((v) => (enableBot = v));

  $: props = chats.map<ChatEntryProp>((c) => {
    return {
      hash: hashGenerator.generate('chat' + saltIndex++),
      icon: c.sender.icon,
      nickname: c.sender.nickname,
      senderType: c.sender.type,
      messages: c.messages,
    };
  });

  const onScroll = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = rootView;
    const threashold = 500 + clientHeight;
    const diff = scrollHeight - scrollTop;
    ChatService.scrollLock.set(diff > threashold);
  };

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
  ChatService.scrollLock.subscribe((it) => (scrollLock = it));
  ChatService.scrollDown.set(scrollDown);

  onMount(() => {
    ChatService.chats.subscribe((c) => {
      chats = c;
      ChatService.requestScrollDown();
    });
  });
</script>

<div class="chat-list" bind:this={rootView} on:scroll={(e) => onScroll(e)}>
  {#each props as prop (prop.hash)}
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
      width: 5px;
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
    background-color: #2a2f38;
    scrollbar-color: #ff4081 #2a2f38;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-track {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff4081;
    }
  }
</style>
