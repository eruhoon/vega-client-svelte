<script>
  import ChatEntry from "./entry/ChatEntry.svelte";

  const chats = [1];
</script>

<div class="chat-list">
  {#each chats as chat}
    <ChatEntry />
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

  chat-entry {
    display: block;
    width: 100%;
    min-height: 50px;

    border-bottom: 1px solid #1f2226;
    &:last-child {
      border-bottom-color: #1f2226;
    }
  }
</style>
