<script lang="ts">
  export let zIndex: number;
</script>

<div class="layer" style="z-index: {zIndex}">
  <slot />
</div>

<style lang="scss">
  .layer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
</style>
