<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { StreamInfo } from '../../../../../model/stream/StreamInfo';

  const dispatch = createEventDispatcher();

  export let stream: StreamInfo;
  export let supportFavorite = true;
  export let isFavorite = false;
  let thumbnailError = false;

  $: title = stream.title;
  $: icon = stream.icon;
  $: thumbnail = stream.thumbnail;
  $: description = stream.description;

  function onThumbnailError() {
    thumbnailError = true;
  }
</script>

<div class="container">
  <div class="left-section">
    <img
      src={thumbnail}
      on:error={onThumbnailError}
      alt="{title} thumbnail"
      style="visibility:{thumbnailError ? 'hidden' : 'visible'}"
    />
  </div>
  <div class="right-section">
    <div class="header">
      <img src={icon} alt={title} />
      <span>{title}</span>
    </div>
    <p class="body">{description}</p>
    <div class="footer">
      {#if supportFavorite}
        <button on:click|stopPropagation={() => dispatch('favoriteclick')}>
          <i class="fas fa-star" class:activated={isFavorite} />
        </button>
      {/if}
      <button on:click|stopPropagation={() => dispatch('shareclick')}>
        <i class="fas fa-link" />
      </button>
      <button on:click|stopPropagation={() => dispatch('newwindowclick')}>
        <i class="fas fa-external-link-alt" />
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 80px;
    list-style-type: none;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
  }

  .left-section {
    flex-shrink: 0;
    width: 40%;

    img {
      margin: 5px;
      width: calc(100% - 10px);
      height: auto;
    }
  }

  .right-section {
    flex-grow: 1;
    width: 0;

    .header {
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
    }

    .body {
      width: 100%;
      margin: 0;
      font-size: 14px;
      line-height: 14px;
      padding: 4px;
      padding-bottom: 6px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .footer {
      width: 100%;

      button {
        width: 30px;
        height: 30px;
        padding: 0;
        border: 0px;
        border-radius: 15px;
        color: #ffffff;
        background-color: #2a2f38;
        &:hover {
          background-color: #ff4081;
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
  }
</style>
