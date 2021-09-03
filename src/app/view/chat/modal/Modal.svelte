<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';
</script>

<div class="root">
  <div class="click-blocker" on:click={(_) => WindowService.closeModal()} />
  <slot name="modal" />
</div>

<style lang="scss">
  .root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
  }

  .click-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
  }
</style>
