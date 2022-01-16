<script lang="ts">
  const urlParams = new URLSearchParams(window.location.search);
  const hasSecret = urlParams.has('secret');
  const secret = urlParams.get('secret');
</script>

{#if hasSecret}
  <p>{secret}</p>
{:else}
  <p>Error: Invalid Secret Key</p>
{/if}
