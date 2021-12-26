<script lang="ts">
  import type { LocalStreamSource } from '../../model/window/Content';
  import LocalStreamContentView from '../main/content/LocalStreamContentView.svelte';
  import TotoroStreamContentView from '../main/content/TotoroStreamContentView.svelte';

  const urlParams = new URLSearchParams(window.location.search);
  const hasId = urlParams.has('id');
  const id = urlParams.get('id');
  const platform = urlParams.get('p');
  console.log(hasId, id, platform);

  let src: LocalStreamSource = {
    icon: '',
    url: id,
    title: '',
  };
</script>

{#if hasId}
  {#if platform === 'local'}
    <LocalStreamContentView {src} />
  {:else if platform === 'totoro'}
    <TotoroStreamContentView {src} />
  {:else}
    <p>error</p>
  {/if}
{:else}
  <p>error</p>
{/if}
