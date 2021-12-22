<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let icon: string;
</script>

<div class="root">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="icon" src={icon} on:click={() => dispatch('iconclick')} />
</div>

<style lang="scss">
  $menu-icon-size: 60px;
  $menu-icon-size-5px: 65px;
  $background-color: var(--primary-background-color);

  .root {
    position: relative;
    display: inline-block;
    width: $menu-icon-size - 5px;
    height: $menu-icon-size;

    .icon {
      width: $menu-icon-size - 10px;
      height: $menu-icon-size - 10px;
      padding: 5px 2.5px;
      border-radius: 2px;
      opacity: 0.5;
    }
  }

  .root:hover {
    .icon {
      opacity: 1;
    }
  }
</style>
