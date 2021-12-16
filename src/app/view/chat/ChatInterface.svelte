<script lang="ts">
  import { ChatService } from '../../model/chat/ChatService';
  import { ClipboardManager } from '../../model/clipboard/ClipboardManager';
  import { SessionService } from '../../model/session/SessionService';
  import { SocketService } from '../../model/socket/SocketService';
  import { WindowService } from '../../model/window/WindowService';

  const clipboardManager = new ClipboardManager();
  let imageInput: HTMLInputElement;
  let message: string = '';
  let userListShow = false;
  let isConnected = false;
  let isScrollLock = false;

  const toggleUserList = () => {
    const next = !userListShow;
    userListShow = next;
    WindowService.userListShow.set(next);
  };

  const toggleEmojiAttachView = () => {
    WindowService.toggleEmojiAttachView();
  };

  const clearChats = () => {
    ChatService.chats.set([]);
  };

  SocketService.isConnected.subscribe((v) => (isConnected = v));
  ChatService.scrollLock.subscribe((v) => (isScrollLock = v));

  function onImageChange() {
    console.log('on');
    const elm = imageInput;
    const file = elm?.files?.item(0);
    if (!file) {
      console.warn('image not found');
      return;
    }
    clipboardManager.uploadImageCacheWithFile(file, (imageUri) => {
      WindowService.openModal('upload-image-chat');
      ChatClipboardService.setCurrentImage(imageUri);
      imageInput.value = '';
    });
  }

  function onKeyPress(e: KeyboardEvent) {
    const { key } = e;
    if (key === 'Enter' && message.trim().length !== 0) {
      const privateKey = SessionService.getPrivateKey();
      if (!privateKey) {
        return;
      }
      SocketService.chat?.execute(privateKey, 'chat', message);
      message = '';
      ChatService.requestScrollDown(true);
    }
  }
</script>

<div class="chat-interface" on:click={(_) => ChatService.setActive(null)}>
  <div class="input-sticker">
    <div class="sticker-section">
      <div on:click={toggleUserList}>
        <i class="fas fa-address-book" />
      </div>
      <div on:click={clearChats}>
        <i class="fas fa-remove-format" />
      </div>
      <div
        class:hide={!isScrollLock}
        on:click={(_) => ChatService.requestScrollDown(true)}
      >
        <i class="fas fa-arrow-down" />
      </div>
    </div>

    <div class="sticker-section right">
      <div class:hide={isConnected}>
        <i class="fas fa-exclamation-triangle" />
      </div>
      <div on:click={(_) => toggleEmojiAttachView()}>
        <i class="far fa-smile" />
      </div>
      <div on:click={(_) => imageInput.click()}>
        <i class="fas fa-file-image" />
      </div>
    </div>
  </div>
  <input
    type="text"
    class="input-box"
    bind:value={message}
    on:keypress={onKeyPress}
  />
  <input
    type="file"
    accept="image/*"
    style="display: none"
    bind:this={imageInput}
    on:change={onImageChange}
  />
</div>

<style lang="scss">
  .chat-interface {
    position: relative;
    width: 100%;
    height: 100%;
    // 좌우측 채팅 부분에 대한 border의 1px 처리로
    margin-left: -1px;
    background-color: #2a2f38;
  }

  // 스티커 & 채팅 클리어 & 채팅 인원 안내
  .input-sticker {
    display: block;
    width: 100%;
    height: 30px;
    background-color: #1f2226;
    border-top: 1px solid #1d1f21;
    border-bottom: 1px solid #1d1f21;

    div {
      width: auto;
      height: auto;
      display: inline-block;
      color: #ffffff;
      user-select: none;

      i {
        padding: 8px 6px;
        font-size: 14px;
        /* margin: -3px; */
        display: inline-block;
        /* position: relative; */
        overflow: hidden;
      }

      &.hide {
        display: none;
      }

      &:hover {
        color: #ff4081;
      }
    }

    & > .sticker-section {
      display: inline-block;
      &.right {
        float: right;
      }
    }
  }

  .input-box {
    width: calc(100% - 0px);
    height: 47px;
    padding: 10px;
    margin: 0%;

    background: #2a2f38;
    font-size: 16px;
    color: #ffffff;
    border: none;
    outline: none;
  }
</style>
