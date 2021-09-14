<script>
  const urlParams = new URLSearchParams(window.location.search);
  const hasId = urlParams.has('id');
  const id = urlParams.get('id');
</script>

{#if hasId}
  <p>{id}</p>
{:else}
  <p>error</p>
{/if}
