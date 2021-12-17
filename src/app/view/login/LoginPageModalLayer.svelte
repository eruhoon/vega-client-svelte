<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let zIndex: number = 50;
  const dispatch = createEventDispatcher();
</script>

<section class="layer" style="z-index: {zIndex}">
  <div
    class="background"
    on:click|self={(_) => dispatch('onbackgroundclick')}
  />
  <slot />
</section>

<style lang="scss">
  .layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: black;
      opacity: 0.7;
    }
  }
</style>
