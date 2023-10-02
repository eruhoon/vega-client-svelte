<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ChatInterfaceMenuEntryIcon } from './ChatInterfaceMenuEntryIcon';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: ChatInterfaceMenuEntryIcon | null = null;

  const dispatch = createEventDispatcher<{ onentryclick: string }>();

  function onEntryClick() {
    dispatch('onentryclick', hash);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="entry" on:click={onEntryClick}>
  {#if icon}
    <div class="icon">
      {#if icon.type === 'image'}
        <img src={icon.src} alt={nickname} />
      {:else if icon.type === 'fa'}
        <i class={icon.src} />
      {/if}
    </div>
  {/if}
  <div class="info">
    <div class="nickname">
      <p>{nickname}</p>
    </div>
  </div>
  <div class="icon-slot">
    <slot />
  </div>
</div>

<style lang="scss">
  .entry {
    display: block;
    width: calc(100% - 10px);
    height: 30px;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid var(--primary-hoverground-color);

    &:last-child {
      border-bottom: 0px;
    }

    .icon {
      width: 30px;
      height: 30px;
      overflow: hidden;
      float: left;
      border-radius: 30px;
      text-align: center;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }

      i {
        width: 30px;
        height: 30px;
        line-height: 30px;
      }
    }

    .info {
      width: calc(100% - 90px);
      height: 30px;
      float: left;
      padding-left: 8px;

      div {
        width: 100%;
        float: left;
        padding-top: 8px;

        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .icon-slot {
      width: 50px;
      height: 30px;
      float: right;
      text-align: center;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
