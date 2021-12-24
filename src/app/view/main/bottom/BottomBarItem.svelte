<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { OptionService } from '../../../service/OptionService';

  export let icon: string;

  const dispatch = createEventDispatcher();
  let rightAlign = false;

  onMount(() => {
    OptionService.enableCheckerRightAlign.subscribe((it) => (rightAlign = it));
  });
</script>

<div class="root">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="icon" src={icon} on:click={() => dispatch('iconclick')} />

  <div class="detail" class:right-align={rightAlign}>
    <slot />
  </div>
</div>

<style lang="scss">
  $menu-icon-size: 60px;
  $menu-icon-size-5px: 65px;
  $background-color: var(--primary-background-color);

  .root {
    position: relative;
    display: inline-block;
    margin: 0;
    width: $menu-icon-size - 5px;
    height: $menu-icon-size;

    .icon {
      width: $menu-icon-size - 10px;
      height: $menu-icon-size - 10px;
      padding: 5px 2.5px;
      border-radius: 2px;
      opacity: 0.5;
    }

    .detail {
      position: absolute;
      display: none;
      bottom: $menu-icon-size;

      & {
        left: 5px;
        right: auto;
      }

      &.right-align {
        left: auto;
        right: 5px;
      }
    }

    &:first-child {
      margin-inline-start: 2.5px;
    }

    &:last-child {
      margin-inline-end: 2.5px;
    }

    &:hover {
      .icon {
        opacity: 1;
      }

      .detail {
        display: flex;
      }
    }
  }
</style>
