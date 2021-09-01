<script lang="ts">
  import IframeContentView from './IframeContentView.svelte';

  export let src: string | null = null;
  $: link = src ? getLink(src) : null;

  const host = 'https://player.twitch.tv';

  const getLink = (src: string | null) => {
    return `${host}?channel=${src}&parent=${location.hostname}`;
  };
</script>

<IframeContentView src={link} allowfullscreen={true} />
