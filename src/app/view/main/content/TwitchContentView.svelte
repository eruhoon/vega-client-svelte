<script lang="ts">
  import IframeContentView from './IframeContentView.svelte';
  export let src: string | null = null;
  $: link = src
    ? `https://player.twitch.tv/?channel=${src}&parent=${location.hostname}`
    : null;
</script>

<IframeContentView src={link} allowfullscreen={true} />
