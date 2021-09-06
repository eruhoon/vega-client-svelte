<script lang="ts">
  import LinkPopupContent from './LinkPopupContent.svelte';
  import type { PopupContent } from './PopupContent';
  import { PopupContentService } from './PopupContentService';

  let contents: PopupContent[] = [];

  function getComponent(content: PopupContent) {
    switch (content.type) {
      case 'iframe':
        return LinkPopupContent;
    }
  }

  PopupContentService.contents.subscribe((it) => (contents = it));
</script>

<div class="popup-content-layer">
  {#each contents as content}
    <svelte:component this={getComponent(content)} {content} />
  {/each}
</div>

<style lang="scss">
  .popup-content-layer {
    position: fixed;
    width: 0;
    height: 0;
    z-index: 50;
  }
</style>
