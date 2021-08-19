<script lang="ts">
  import type { ChatProperty } from '../../model/chat/ChatProperty';
  import { ChatService } from '../../model/chat/ChatService';
  import ChatEntry from './entry/ChatEntry.svelte';
  import type { ChatEntryProp } from './entry/ChatEntryProp';

  let chats: ChatProperty[] = [];

  $: props = chats.map<ChatEntryProp>((c) => {
    return {
      icon: c.icon,
      nickname: c.nickname,
      senderType: 'PC',
    };
  });

  ChatService.chats.subscribe((c) => (chats = c));
</script>

<div class="chat-list">
  {#each props as prop}
    <ChatEntry {prop} />
  {/each}
</div>

<style lang="scss">
  .chat-list {
    position: relative;
    width: 100%;
    height: calc(100% - 80px);
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
</style>
