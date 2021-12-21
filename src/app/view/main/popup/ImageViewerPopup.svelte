<script lang="ts">
  import { WindowService } from '../../../service/WindowService';

  export let src: string;

  let bodyElement: HTMLBodyElement;
  let imageElement: HTMLImageElement;
  $: bodyWidth = bodyElement?.clientWidth;
  $: bodyHeight = bodyElement?.clientHeight;
  $: imageWidth = imageElement?.clientWidth || 0;
  $: imageHeight = imageElement?.clientHeight || 0;
  $: imageClass = imageWidth > imageHeight ? 'horizontal' : 'vertical';
  $: overSized = bodyWidth * 0.8 < imageWidth || bodyHeight * 0.8 < imageHeight;

  const close = () => WindowService.closeImageViewerPopup();
</script>

<div class="container" on:click={close}>
  <div class="background" />
  <div class="image-wrapper">
    <div class="image-info">
      <div class="image-box" class:oversize={overSized}>
        <img
          bind:this={imageElement}
          class={imageClass}
          {src}
          alt="current"
          style="max-height: {bodyHeight * 0.8}px"
        />
      </div>
      <div class="image-menu" />
    </div>
  </div>
</div>
<svelte:window bind:innerWidth={bodyWidth} bind:innerHeight={bodyHeight} />

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.6;
      background: black;
    }

    .image-wrapper {
      position: absolute;
      display: inline-flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;

      .image-info {
        .image-box {
          text-align: center;
          &.oversize {
            width: 80%;
            height: 80%;
          }

          img {
            width: auto;
            height: auto;
            max-height: 100%;
            max-width: 100%;
            background: var(--primary-background-color);
            border: 1px solid rgb(10, 12, 14);
            border-radius: 2px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px 0 rgba(0, 0, 0, 0.06);
            &.vertical {
              width: auto;
              height: 100%;
            }
            &.horizontal {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }
</style>
