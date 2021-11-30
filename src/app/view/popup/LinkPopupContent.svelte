<script lang="ts">
  import { onMount } from 'svelte';
  import type { IframePopupContent } from './IframePopupContent';
  import { PopupContentService } from './PopupContentService';

  export let content: IframePopupContent;
  $: src = content.src;
  $: title = src.title;
  $: link = src.link;
  let left: number;
  let top: number;
  const width = 400;
  const height = 300;
  let moveMode = false;
  const allowfullscreen = true;

  let windowWidth: number;
  let windowHeight: number;

  onMount(() => {
    left = (windowWidth - width) / 2;
    top = (windowHeight - height) / 2;
  });

  function onDragStart() {
    moveMode = true;
  }

  function onDragEnd() {
    moveMode = false;
  }

  function onDrag(e: MouseEvent) {
    if (moveMode) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function onExit() {
    PopupContentService.removeContent(content);
  }
</script>

<div
  class="link-popup"
  style="transform:translate({left}px, {top}px); width: {width}px; height: {height}px; "
>
  <div class="title-bar" on:mousedown={onDragStart}>
    <i class="fas fa-video" />
    <div class="title">{title}</div>
    <button on:mousedown={onExit}>
      <i class="fas fa-times" />
    </button>
  </div>
  <iframe class="content" src={link} {allowfullscreen} {title} />
</div>
{#if moveMode}
  <div class="movebox" on:mousemove={onDrag} on:mouseup={onDragEnd} />
{/if}
<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<style lang="scss">
  @mixin shadow() {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }

  $bg_color: '#000000';

  .link-popup {
    align-items: center;
    position: fixed;

    iframe.content {
      position: absolute;
      top: 30px;
      left: 0px;
      width: 100%;
      height: calc(100% - 30px);
      border: 0px;
      background: #1f2226;
    }
  }

  .movebox {
    position: fixed;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    z-index: 9999;
  }

  .title-bar {
    display: flex;
    position: absolute;
    width: 100%;
    height: 40px;
    top: -10px;
    align-items: center;
    cursor: default;
    opacity: 0;
    background: #1f2226;
    color: #ffffff;
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
      width: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      border-radius: 0%;
      background: #000000;
      color: #ffffff;
      border: none;
      outline: none;
      i {
        font-size: 20px;
        line-height: 20px;
        padding: 7px 6px;
      }
      &:hover {
        background: #ff4081;
        color: #ffffff;
      }
    }
  }

  .link-popup:hover {
    @include shadow();

    .title-bar {
      opacity: 1;
    }
  }
</style>
