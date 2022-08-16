<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let value = '';
  export let name = '';
  export let placeholder = '';
</script>

<div class="input-group">
  <p>
    {title}
    {#if subtitle}<small>({subtitle})</small>{/if}
  </p>
  <input type="text" bind:value {name} {placeholder} />
</div>

<style lang="scss">
  .input-group {
    width: 100%;
    margin-bottom: 15px;

    p {
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      background: var(--primary-hoverground-color);
      border: 0px;
      border-radius: 0%;
      color: var(--primary-foreground-color);
      padding: 10px 10px;
    }
  }
</style>
