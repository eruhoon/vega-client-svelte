<script lang="ts">
  import type { LocalStreamSource } from '../../../model/window/Content';

  import FlvContentView from './FlvContentView.svelte';

  export let src: LocalStreamSource = { icon: '', url: '', title: '' };

  $: url = `https://parasite.banjai.tv/live/${src.url}.flv`;
  $: icon = src?.icon;
  $: title = src?.title;
</script>

<FlvContentView {icon} {url} {title} />
