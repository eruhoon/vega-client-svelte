<script lang="ts">
  import { onMount } from 'svelte';

  import { ChatClipboardService } from '../../../model/chat/clipboard/ChatClipboardService';
  import { SessionService } from '../../../model/session/SessionService';
  import { SocketService } from '../../../model/socket/SocketService';

  import { WindowService } from '../../../model/window/WindowService';

  let root: HTMLElement;
  let currentImage: string;

  ChatClipboardService.currentImage.subscribe((it) => (currentImage = it));

  onMount(() => {
    root.focus();
  });

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      sendImage();
      WindowService.closeModal();
    }
  }

  function onSubmitClick() {
    sendImage();
    WindowService.closeModal();
  }

  function sendImage() {
    const privateKey = SessionService.getPrivateKey();
    SocketService.chat.execute(privateKey, 'image', currentImage);
  }
</script>

<div class="container" bind:this={root} on:keydown={onKeyDown} tabindex="0">
  <div class="image-mod">
    <div class="image-wrapper">
      <div class="title">
        <i class="material-icons"> add_photo_alternate </i>
        <p>클립보드 붙여넣기</p>
      </div>

      <img src={currentImage} alt="첨부된 이미지" />

      <button on:click={onSubmitClick}>
        <i class="material-icons">save_alt</i> 보내기
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .image-wrapper {
    width: 450px;
    max-width: 600px;
    max-height: 865px;
    opacity: 1;
    position: relative;
    background: #ffffff;
    border-radius: 5px;
    border: 5px solid #ffffff;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    .title {
      width: 100%;
      height: 40px;
      background: #ffffff;

      i {
        float: left;
        padding: 7px;
        font-size: 24px;
        line-height: 26px;
        color: #424242;
      }

      p {
        padding: 10px;
        color: #424242;
        margin: 0%;
      }
    }

    img {
      width: 100%;
      max-height: calc(860px - 100px);

      background: #ffffff;
      border-radius: 5px;
    }

    button {
      width: calc(100% + 10px);
      height: 60px;
      margin: -5px;
      background-color: #ff4081;
      border: 0px solid #f5f5f5;

      font-size: 24px;
      font-weight: bolder;
      line-height: 24px;
      color: #ffffff;

      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-top: 4px;
    }
  }
</style>
