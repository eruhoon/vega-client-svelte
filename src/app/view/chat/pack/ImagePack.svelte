<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';

  export let body = '';

  const openImageViewerPopup = () => {
    WindowService.openImageViewerPopup(body);
  };
</script>

<div class="container">
  <img class="image" src={body} alt="이미지" on:click={openImageViewerPopup} />
</div>

<style lang="scss">
  .image {
    width: 100%;
  }
</style>
