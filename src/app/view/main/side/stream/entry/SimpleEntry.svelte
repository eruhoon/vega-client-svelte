<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { StreamInfo } from '../../../../../model/stream/StreamInfo';

  const dispatch = createEventDispatcher();

  export let stream: StreamInfo;
  export let supportFavorite = true;
  export let isFavorite = false;

  $: icon = stream.icon;
  $: title = stream.title;
</script>

<div class="container">
  <img src={icon} alt={title} />
  <span>{title}</span>

  <button class="icon" on:click|stopPropagation={() => dispatch('shareclick')}>
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
</div>

<style lang="scss">
  .container {
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
      display: none;
      border: 0px;
      border-radius: 15px;
      margin: 2px;
      padding: 2px 10px;
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

  .container:hover {
    button {
      display: block;
    }
  }
</style>
