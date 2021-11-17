<script lang="ts">
  import { WindowService } from '../../model/window/WindowService';
  import ContentView from './content/ContentView.svelte';

  export let subViewActivated = false;
  let height = 200;
  let offset = -1;

  function onContentCloseClick() {
    WindowService.closeContent();
  }

  function onTouchStart(e: TouchEvent) {
    const touches = e.changedTouches;
    if (touches.length > 0) {
      offset = touches[0].clientY;
    }
  }

  function onTouchMove(e: TouchEvent) {
    const touches = e.changedTouches;
    if (touches.length > 0) {
      const y = touches[0].clientY;
      const diff = offset - y;
      height = height - diff;
      offset = y;
    }
  }
</script>

<div class="container">
  {#if subViewActivated}
    <div class="sub-division" style="height: {height}px">
      <ContentView />
      <button class="fab" on:click={onContentCloseClick}>
        <i class="fas fa-times" />
      </button>
    </div>
    <div
      class="divider"
      on:touchstart={onTouchStart}
      on:touchmove={onTouchMove}
    />
  {/if}
  <div class="main-division">
    <slot name="main" />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .sub-division {
    position: relative;
    width: 100%;
    min-height: 100px;
    max-height: 300px;
    flex-shrink: 0;

    .fab {
      position: absolute;
      right: 10px;
      bottom: -15px;
      width: 30px;
      height: 30px;
      margin: 0;
      z-index: 2;
      border: none;
      border-radius: 15px;
    }
  }

  .main-division {
    position: relative;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    background: #2a2f38;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 40%), 0 0 15px 0 rgb(0 0 0 / 30%),
      0 0 20px 4px rgb(0 0 0 / 30%);
  }

  .divider {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: 10px;

    &::after {
      position: absolute;
      top: -10px;
      left: 0;
      width: 100%;
      height: 30px;
      content: '';
      z-index: 1;
    }
  }
</style>
