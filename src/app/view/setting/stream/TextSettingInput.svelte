<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let value = '';
  export let name = '';
</script>

<div class="input-group">
  <p>
    {title}
    {#if subtitle}<small>({subtitle})</small>{/if}
  </p>
  <input type="text" bind:value {name} />
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

    input {
      width: 100%;
      background: #1f2226;
      border: 0px;
      border-radius: 0%;
      color: #ffffff;
      padding: 15px 10px;
    }
  }
</style>
