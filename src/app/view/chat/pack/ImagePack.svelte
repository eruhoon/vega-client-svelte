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
    background: #1f2226;
    border: 1px solid rgb(10, 12, 14);
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>
