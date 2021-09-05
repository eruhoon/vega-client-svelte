<script lang="ts">
  import { get } from 'svelte/store';
  import { OptionService } from '../../../model/option/OptionService';

  import { WindowService } from '../../../model/window/WindowService';

  export let body = '';
  let show = !get(OptionService.enableDataSave);

  const openImageViewerPopup = () => {
    WindowService.openImageViewerPopup(body);
  };

  OptionService.enableDataSave.subscribe((it) => (show = !it));
</script>

<div class="container">
  {#if show}
    <img
      class="image"
      src={body}
      alt="이미지"
      on:click={openImageViewerPopup}
    />
  {:else}
    <div on:click={(_) => (show = true)}>이미지</div>
  {/if}
</div>

<style lang="scss">
  .container {
    width: 100%;
    height: auto;
    text-align: center;
  }
  .image {
    width: 90%;
    background: #1f2226;
    border: 1px solid rgb(10, 12, 14);
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>
