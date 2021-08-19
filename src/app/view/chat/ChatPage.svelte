<script>
  import { WindowService } from '../../model/window/WindowService';

  import ChatInterface from './ChatInterface.svelte';
  import ChatList from './ChatList.svelte';
  import EmojiAttachView from './emoji/EmojiAttachView.svelte';
  import ChatUserList from './user/ChatUserList.svelte';

  let userListShow = false;
  let emojiAttachViewShow = false;

  WindowService.userListShow.subscribe((show) => (userListShow = show));
  WindowService.emojiAttachViewShow.subscribe(
    (show) => (emojiAttachViewShow = show)
  );
</script>

<div class="chat-page">
  <ChatList />
  <div class="chat-user-list" class:hide={!userListShow}>
    <ChatUserList />
  </div>
  <div class="emoji-attach" class:hide={!emojiAttachViewShow}>
    <EmojiAttachView />
  </div>
  <div class="chat-interface"><ChatInterface /></div>
</div>

<style lang="scss">
  $chat-interface-height: 80px;

  .chat-page {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .chat-user-list {
    display: block;
    position: absolute;
    left: 0;
    bottom: $chat-interface-height;
    width: 100%;
    height: 300px;

    &.hide {
      display: none;
    }
  }

  .emoji-attach {
    display: block;
    position: absolute;
    left: 0;
    bottom: $chat-interface-height;
    width: 100%;
    height: 300px;

    &.hide {
      display: none;
    }
  }

  .chat-interface {
    position: absolute;
    left: 1px;
    bottom: 0;
    width: 100%;
    height: $chat-interface-height;
  }
</style>
