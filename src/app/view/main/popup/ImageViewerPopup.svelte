<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';

  export let src: string;

  const close = () => WindowService.closeImageViewerPopup();
</script>

<div class="container" on:click={close}>
  <div class="background" />
  <div class="image-wrapper">
    <img {src} alt="current" />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: black;
    }

    .image-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
        height: auto;
      }
    }
  }
</style>
