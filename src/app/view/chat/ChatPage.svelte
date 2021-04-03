<script>
  import ChatInterface from './ChatInterface.svelte';
  import ChatList from './ChatList.svelte';
</script>

<div class="chat-page">
  <ChatList />
  <!-- <chat-user-list *ngIf="isChatUserListShow()" />
    <emoji-attach-view *ngIf="isEmojiAttachViewShow()" />-->
  <div class="chat-interface"><ChatInterface /></div>
</div>

<style lang="scss">
  .chat-page {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  chat-user-list {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 300px;
  }

  emoji-attach-view {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 200px;
  }

  .chat-interface {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
  }
</style>
