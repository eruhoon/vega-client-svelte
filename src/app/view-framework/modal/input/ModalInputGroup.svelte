<script lang="ts">
  export let title = '';
  export let subtitle = '';
</script>

<div class="input-group">
  <p>
    {title}
    {#if subtitle}<small>({subtitle})</small>{/if}
  </p>
  <slot />
</div>

<style lang="scss">
  .input-group {
    width: 100%;
    margin-bottom: 15px;

    p {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 5px;
    }
  }
</style>
