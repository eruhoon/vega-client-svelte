<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';

  export let src: string;

  const close = () => WindowService.closeImageViewerPopup();
</script>

<div class="container" on:click={close}>
  <div class="background" />
  <div class="image-wrapper">
    <div class="image-box">
      <img {src} alt="current" />
    </div>
    <div class="text-box" />
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
      .image-box {
        width: auto;
        height: auto;

        background: #1f2226;
        border: 1px solid rgb(10, 12, 14);
        border-radius: 2px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        img {
          width: auto;
          height: auto;
        }
      }

      .text-box {
        position: absolute;
      }
    }
  }
</style>
