<script lang="ts">
  import type { IframePopupContent } from './IframePopupContent';
  import { PopupContentService } from './PopupContentService';
  export let content: IframePopupContent;
  $: src = content.src;
  $: title = src.title;
  $: link = src.link;
  let left = 50;
  let top = 50;
  let width = 400;
  let height = 300;
  let moveMode = false;
  const allowfullscreen = true;

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
    <span class="material-icons"> live_tv </span>
    <div class="title">{title}</div>
    <button on:mousedown={onExit}>
      <i class="material-icons">clear</i>
    </button>
  </div>
  <iframe class="content" src={link} {allowfullscreen} {title} />
</div>
{#if moveMode}
  <div class="movebox" on:mousemove={onDrag} on:mouseup={onDragEnd} />
{/if}

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
      background: white;
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
    background: #ffffff;
    color: #424242;
    span {
      padding: 0 5px 0 5px;
    }
    .title {
      display: inline-block;
      width: calc(100% - 30px);
      height: 40px;
      line-height: 40px;
      font-size: 15px;
    }
    button {
      width: 30px;
      height: 30px;
      margin: 5px;
      padding: 0;
      border-radius: 50%;
      background: #ffffff;
      color: #424242;
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
