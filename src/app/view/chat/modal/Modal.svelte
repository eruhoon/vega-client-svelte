<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';

  let modalWrapper: HTMLElement;

  const onClick = (e: Event) => {
    if (e.target === modalWrapper) {
      WindowService.closeModal();
    }
  };
</script>

<div class="click-blocker" />
<div class="modal-wrapper" on:click={onClick} bind:this={modalWrapper}>
  <slot name="modal" />
</div>

<style lang="scss">
  .modal-wrapper {
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
    z-index: 90;
  }
</style>
