<script lang="ts">
  import { ChatClipboardService } from '../../model/chat/clipboard/ChatClipboardService';

  import { ClipboardManager } from '../../model/clipboard/ClipboardManager';

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

  function onPaste(e: ClipboardEvent) {
    if (!e.clipboardData) {
      return;
    }

    new ClipboardManager().uploadImageCache(e.clipboardData, (imageUri) => {
      ChatClipboardService.setCurrentImage(imageUri);
      WindowService.openModal('upload-image-chat');
    });
  }
</script>

<div class="chat-page" on:paste={onPaste}>
  <div class="chat-list">
    <ChatList />
  </div>
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

  .chat-list {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(100% - #{$chat-interface-height});
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
