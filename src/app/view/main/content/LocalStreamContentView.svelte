<script lang="ts">
  import FlvContentView from './FlvContentView.svelte';

  export let src: string = '';
  $: url = `https://mycast.xyz:8087/live/${src}.flv`;
</script>

<FlvContentView {url} />
