<script lang="ts">
  import VideoButton from './VideoButton.svelte';

  export let play: boolean = false;
  export let onClick = () => {};

  $: icon = play ? 'play' : 'pause';
</script>

<VideoButton icon="fas fa-{icon}" {onClick} />
