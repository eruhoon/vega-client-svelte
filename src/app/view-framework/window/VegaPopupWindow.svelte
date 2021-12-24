<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  export let title = 'title';
  export let icon = 'video';

  const dispatch = createEventDispatcher();

  let left: number;
  let top: number;
  let moveMode = false;

  let width = 400;
  let height = 300;
  let resizeMode = false;

  let windowWidth: number;
  let windowHeight: number;

  onMount(() => {
    left = (windowWidth - width) / 2;
    top = (windowHeight - height) / 2;
  });

  function onDrag(e: MouseEvent) {
    if (moveMode) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onResize(e: MouseEvent) {
    if (resizeMode) {
      width += e.movementX;
      height += e.movementY;
    }
  }
</script>

<div
  class="popup-window"
  style="transform:translate({left}px, {top}px); width: {width}px; height: {height}px;"
>
  <div class="header" on:mousedown={() => (moveMode = true)}>
    <i class="fas fa-{icon}" />
    <div class="title">{title}</div>
    <button on:mousedown={(_) => dispatch('oncloseclick')}>
      <i class="fas fa-times" />
    </button>
  </div>
  <div class="body">
    <slot />
  </div>

  <div class="reszie-edge" on:mousedown={() => (resizeMode = true)} />

  {#if moveMode}
    <div
      class="movebox"
      on:mousemove={onDrag}
      on:mouseup={() => (moveMode = false)}
    />
  {/if}

  {#if resizeMode}
    <div
      class="resizebox"
      on:mousemove={onResize}
      on:mouseup={() => (resizeMode = false)}
    />
  {/if}
</div>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style lang="scss">
  @mixin shadow() {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  $bg_color: '#000000';

  .popup-window {
    align-items: center;
    position: fixed;

    .reszie-edge {
      $size: 10px;
      position: absolute;
      right: calc(-#{$size} / 2);
      bottom: calc(-#{$size} / 2);
      width: $size;
      height: $size;
      cursor: se-resize;
    }
  }

  .header {
    $header-size: 40px;
    display: flex;
    position: absolute;
    width: 100%;
    height: $header-size;
    top: -$header-size;
    align-items: center;
    cursor: default;
    opacity: 0;
    background: var(--primary-background-color);
    color: var(--primary-foreground-color);

    i {
      padding: 0 10px 0 15px;
    }

    .title {
      display: inline-block;
      width: calc(100% - 30px);
      height: 40px;
      line-height: 40px;
      font-size: 15px;
    }

    button {
      width: $header-size;
      height: $header-size;
      margin: 0;
      padding: 0;
      border-radius: 0%;
      background: var(--primary-hoverground-color);
      color: var(--primary-foreground-color);
      border: none;
      outline: none;
      i {
        font-size: 20px;
        line-height: 20px;
        padding: 7px 6px;
      }
      &:hover {
        background: var(--primary-activeground-color);
        color: var(--primary-activeground-font-color);
      }
    }
  }

  .body {
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .movebox,
  .resizebox {
    position: fixed;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    z-index: 9999;
  }

  .resizebox {
    cursor: se-resize;
  }

  .popup-window:hover {
    @include shadow();

    .header {
      opacity: 1;
    }
  }
</style>
