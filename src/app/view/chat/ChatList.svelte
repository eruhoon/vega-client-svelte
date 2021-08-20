<script lang="ts">
  import { onMount } from 'svelte';

  import type { ChatProperty } from '../../model/chat/ChatProperty';
  import { ChatService } from '../../model/chat/ChatService';
  import ChatEntry from './entry/ChatEntry.svelte';
  import type { ChatEntryProp } from './entry/ChatEntryProp';

  let scrollLock: boolean = false;
  let chats: ChatProperty[] = [];
  let rootView: Element;

  $: props = chats.map<ChatEntryProp>((c) => {
    return {
      icon: c.sender.icon,
      nickname: c.sender.nickname,
      senderType: c.sender.type,
    };
  });

  const onScroll = (e: any) => {
    const threashold = 500;
    const { scrollTop, scrollHeight } = rootView;
    const diff = scrollHeight - scrollTop;
    ChatService.scrollLock.set(diff > threashold);
  };

  const scrollDown = () => {
    if (scrollLock) {
      return;
    }
    setTimeout(() => {
      rootView.scrollTop = rootView.scrollHeight;
    });
  };
  ChatService.scrollDown.set(scrollDown);

  onMount(() => {
    ChatService.chats.subscribe((c) => {
      chats = c;
      scrollDown();
    });
  });
</script>

<div class="chat-list" bind:this={rootView} on:scroll={(e) => onScroll(e)}>
  {#each props as prop}
    <div class="chat-entry">
      <ChatEntry {prop} />
    </div>
  {/each}
</div>

<style lang="scss">
  .chat-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: #2a2f38;

    scrollbar-color: #1f2226 #2a2f38;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border: 3px solid;
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
      height: 5px;
      background: #2a2f38;
    }
    &::-webkit-scrollbar-track {
      background: #2a2f38;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 50px;
      width: 50px;
      background: #1f2226;
      -webkit-border-radius: 8px;
      border-radius: 8px;
    }
  }

  .chat-entry {
    width: 100%;
    max-height: 300px;
  }
</style>
