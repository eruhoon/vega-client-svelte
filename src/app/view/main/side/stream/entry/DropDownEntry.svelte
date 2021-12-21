<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { StreamInfo } from '../../../../../model/stream/StreamInfo';

  const dispatch = createEventDispatcher();

  export let stream: StreamInfo;
  export let supportFavorite = true;
  export let isFavorite = false;
  let active = false;
  let thumbnailError = false;
  $: icon = stream.icon;
  $: title = stream.title;
  $: thumbnail = stream.thumbnail;
</script>

<div class="container" on:contextmenu|preventDefault={() => (active = !active)}>
  <div class="info-section">
    <img src={icon} alt={title} />
    <span>{title}</span>

    {#if active}
      <button
        class="icon"
        on:click|stopPropagation={() => dispatch('shareclick')}
      >
        <i class="fas fa-link" />
      </button>
      {#if supportFavorite}
        <button
          class="icon"
          on:click|stopPropagation={() => dispatch('favoriteclick')}
        >
          <i class="fas fa-star" class:activated={isFavorite} />
        </button>
      {/if}
      <button
        class="icon"
        on:click|stopPropagation={() => dispatch('newwindowclick')}
      >
        <i class="fas fa-external-link-alt" />
      </button>
    {/if}
  </div>
  {#if active}
    <div class="thumbnail-section">
      <img
        src={thumbnail}
        on:error={() => (thumbnailError = true)}
        alt="{title} thumbnail"
        style="visibility:{thumbnailError ? 'hidden' : 'visible'}"
      />
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    user-select: none;
  }

  .thumbnail-section {
    display: flex;
    width: 100%;
    height: auto;
    max-height: 200px;
    border-color: var(--primary-hoverground-color);

    img {
      width: calc(100% - 10px);
      height: auto;
      margin: 5px;
    }
  }

  .info-section {
    position: relative;
    display: flex;
    width: 100%;
    height: 30px;
    list-style-type: none;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    img {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }

    span {
      padding-left: 10px;
      width: calc(100% - 40px);
      max-width: calc(100% - 40px);
      font-size: 12px;
      line-height: 12px;
      padding-top: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      border: 0px;
      border-radius: 15px;
      margin: 2px;
      padding: 2px 10px;
      color: var(--primary-foreground-color);
      background-color: var(--primary-hoverground-color);
      &:hover {
        background-color: var(--primary-activeground-color);
        color: var(--primary-activeground-font-color);
      }
      i {
        font-size: 12px;
        line-height: 30px;
        &.activated {
          color: #ffff22;
        }
      }
    }
  }
</style>
