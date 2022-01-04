<script lang="ts">
  import { onMount } from 'svelte';

  import { WindowService } from '../../service/WindowService';
  import ContentView from './content/ContentView.svelte';

  const closeModeThreashold = 80;

  export let subViewActivated = false;
  let height = 200;
  let offset = -1;
  let closing = false;

  onMount(() => {
    height = 200;
    offset = -1;
    closing = false;
  });

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
      closing = height < closeModeThreashold;
    }
  }

  function onTouchEnd() {
    if (closing) {
      WindowService.closeContent();
    }
    closing = false;
  }
</script>

<div class="container">
  {#if subViewActivated}
    <div class="sub-division" style="height: {height}px">
      <ContentView />
      {#if closing}
        <div class="closing-guide" />
      {/if}
    </div>
    <div
      class="divider"
      on:touchstart={onTouchStart}
      on:touchmove={onTouchMove}
      on:touchend={onTouchEnd}
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

    .closing-guide {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background-color: black;
    }
  }

  .main-division {
    position: relative;
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
    background: var(--primary-background-color);
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
