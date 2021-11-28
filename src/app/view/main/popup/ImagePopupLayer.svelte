<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';

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
    width: 100vw;
    height: 100vh;
    z-index: 50;
  }
</style>
