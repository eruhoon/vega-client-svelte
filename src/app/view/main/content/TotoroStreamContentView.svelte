<script lang="ts">
  import FlvContentView from './FlvContentView.svelte';

  export let src: string = '';
  $: url = `https://parasite.banjai.tv/live/${src}.flv`;
</script>

<FlvContentView {url} />
