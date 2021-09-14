<script>
  import LocalStreamContentView from '../main/content/LocalStreamContentView.svelte';
  import TotoroStreamContentView from '../main/content/TotoroStreamContentView.svelte';

  const urlParams = new URLSearchParams(window.location.search);
  const hasId = urlParams.has('id');
  const id = urlParams.get('id');
  const platform = urlParams.get('p');
</script>

{#if hasId}
  {#if platform === 'local'}
    <LocalStreamContentView src={id} />
  {:else if platform === 'totoro'}
    <TotoroStreamContentView src={id} />
  {:else}
    <p>error</p>
  {/if}
{:else}
  <p>error</p>
{/if}
