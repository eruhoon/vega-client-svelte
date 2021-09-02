<script lang="ts">
  import VideoButton from './VideoButton.svelte';

  export let play: boolean = false;
  export let onClick = () => {};

  $: icon = play ? 'pause' : 'play';
</script>

<VideoButton icon="fas fa-{icon}" {onClick} />
