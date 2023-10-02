<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ChatInterfaceMenuEntryIcon } from './ChatInterfaceMenuEntryIcon';
  import type { ChatInterfaceMenuEntryButton } from './ChatInterfaceMenuEntryButton';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: ChatInterfaceMenuEntryIcon | null = null;
  export let buttons: ChatInterfaceMenuEntryButton[] = [];

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
    {#each buttons as button}
      <i class={button.icon} on:click|stopPropagation={button.callback} />
    {/each}
    <slot />
  </div>
</div>

<style lang="scss">
  .entry {
    display: flex;
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
      flex-shrink: 0;

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
      flex-grow: 1;

      div {
        width: 100%;
        height: 30px;
        float: left;

        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 30px;
        }
      }
    }

    .icon-slot {
      flex-shrink: 0;
      width: auto;
      height: 30px;
      float: right;
      text-align: right;

      i {
        cursor: pointer;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
</style>
