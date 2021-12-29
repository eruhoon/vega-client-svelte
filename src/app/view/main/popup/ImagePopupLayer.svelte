<script lang="ts">
  import { WindowService } from '../../../service/WindowService';
  import ImageViewerPopup from './ImageViewerPopup.svelte';

  let currentImage: string = '';

  WindowService.currentImage.subscribe((v) => (currentImage = v));
</script>

{#if currentImage}
  <div class="popup-layer">
    <ImageViewerPopup src={currentImage} />
  </div>
{/if}

<style lang="scss">
  .popup-layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 50;
  }
</style>
