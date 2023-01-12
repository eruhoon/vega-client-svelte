<script lang="ts">
  import { ClipboardManager } from '../../model/clipboard/ClipboardManager';
  import { WindowService } from '../../service/WindowService';
  import { ChatClipboardService } from '../../service/ChatClipboardService';
  import ChatInterface from './ChatInterface.svelte';
  import ChatList from './ChatList.svelte';
  import EmojiAttachView from './emoji/EmojiAttachView.svelte';
  import ChatUserList from './user/ChatUserList.svelte';
  import { onMount } from 'svelte';
  import ChatBotList from './user/ChatBotList.svelte';

  const clipboard = new ClipboardManager();

  let userListShow = false;
  let botListShow = false;
  let emojiAttachViewShow = false;

  WindowService.userListShow.subscribe((show) => (userListShow = show));
  WindowService.emojiAttachViewShow.subscribe(
    (show) => (emojiAttachViewShow = show)
  );

  onMount(() => {
    WindowService.botListShow.subscribe((it) => (botListShow = it));
  });

  function onPaste(e: ClipboardEvent) {
    if (!e.clipboardData) {
      return;
    }

    clipboard.uploadImageCache(e.clipboardData, (imageUri) => {
      ChatClipboardService.setCurrentImage(imageUri);
      WindowService.openModal('upload-image-chat');
    });
  }

  function onDrop(e: DragEvent) {
    const data = e.dataTransfer;
    const dropResult = clipboard.uploadImageCache(data, (uri) => {
      ChatClipboardService.setCurrentImage(uri);
      WindowService.openModal('upload-image-chat');
    });
    if (!dropResult) {
      clipboard.uploadImageCacheWithUrl(data, (uri) => {
        ChatClipboardService.setCurrentImage(uri);
        WindowService.openModal('upload-image-chat');
      });
    }
    return false;
  }
</script>

<div
  class="chat-page"
  on:paste={onPaste}
  on:dragover|preventDefault
  on:drop|preventDefault={onDrop}
>
  <div class="chat-list">
    <ChatList />
  </div>
  <div class="chat-user-list" class:hide={!userListShow}>
    <ChatUserList />
  </div>
  <div class="chat-user-list" class:hide={!botListShow}>
    <ChatBotList />
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
    max-height: 300px;

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
