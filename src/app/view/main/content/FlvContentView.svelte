<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type FlvJs from './flv';

  export let url: string;

  let flvPlayer: FlvJs.FlvPlayer | null;
  let videoElement: HTMLMediaElement;

  const mountPlayer = (element: HTMLMediaElement, url: string): any | null => {
    // @ts-ignore
    const flvJs = flvjs;

    if (flvJs.isSupported()) {
      const player: FlvJs.Player = flvJs.createPlayer({
        enableWorker: false,
        lazyLoadMaxDuration: 3 * 60,
        type: 'flv',
        isLive: true,
        autoCleanupSourceBuffer: true,
        url,
      });
      player.attachMediaElement(element);
      player.load();
      console.log(player);

      return player;
    }
  };

  onMount(() => {
    flvPlayer = mountPlayer(videoElement, url);
    flvPlayer.play();
  });

  onDestroy(() => {
    flvPlayer?.destroy();
    flvPlayer = null;
  });
</script>

<div class="root">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoElement} />
</div>

<style lang="scss">
  .root {
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
    }
  }
</style>
