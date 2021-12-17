<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatClipboardService } from '../../../service/ChatClipboardService';
  import { SessionService } from '../../../service/SessionService';
  import { SocketService } from '../../../service/SocketService';
  import { WindowService } from '../../../service/WindowService';

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
        <span class="icon">
          <i class="far fa-image" />
        </span>
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
  :focus-visible {
  }
  .container {
    &:focus-visible {
      outline: 1px solid #1f2226;
    }
  }
  .image-wrapper {
    width: 450px;
    max-width: 600px;
    max-height: 865px;
    opacity: 1;
    position: relative;
    background: #2a2f38;
    border-radius: 2px;
    border: 5px solid #2a2f38;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    .title {
      width: 100%;
      height: 40px;
      background: #2a2f38;

      span.icon {
        float: left;
        padding: 7px;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
      }

      p {
        padding: 10px;
        color: #ffffff;
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

      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      margin-top: 4px;
    }
  }
</style>
