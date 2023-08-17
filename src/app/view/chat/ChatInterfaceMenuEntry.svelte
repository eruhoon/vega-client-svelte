<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: string | null = null;

  const dispatch = createEventDispatcher<{ onentryclick: string }>();

  function onEntryClick() {
    dispatch('onentryclick', hash);
  }
</script>

<div class="entry" on:click={onEntryClick}>
  {#if icon}
    <div class="icon">
      <img src={icon} alt={nickname} />
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

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
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
    }
  }
</style>
