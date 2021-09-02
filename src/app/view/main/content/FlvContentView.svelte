<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type FlvJs from './flv';
  import VideoInterface from './video/VideoInterface.svelte';

  export let url: string;
  let paused: boolean;
  let muted: boolean;
  let flvPlayer: FlvJs.FlvPlayer | null;
  let videoElement: HTMLMediaElement;
  let interfaceShow = false;
  let volume: number = 0.5;

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

  const videoBlur = () => {
    console.log('blur');
  };

  const onMouseWheel = (e: WheelEvent) => {
    const delta = Math.sign(e.deltaY) * 0.05;
    volume = clamp(volume - delta, 0, 1);
  };

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  const toggleMute = () => {
    muted = !muted;
  };

  const requestFullScreen = () => {
    videoElement.requestFullscreen();
  };

  const togglePause = () => {
    if (paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="root"
  on:wheel={(e) => onMouseWheel(e)}
  on:mouseover={(_) => (interfaceShow = true)}
  on:mouseout={(_) => (interfaceShow = false)}
  on:blur={videoBlur}
>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoElement} bind:volume bind:paused bind:muted />

  {#if interfaceShow}
    <VideoInterface
      volume={volume * 100}
      {muted}
      {paused}
      onPlayPauseClick={togglePause}
      onFullscreenClick={requestFullScreen}
      onMuteClick={toggleMute}
    />
  {/if}
</div>

<style lang="scss">
  .root {
    width: 100%;
    height: 100%;
    background-color: #000000;
    position: relative;

    video {
      width: 100%;
      height: 100%;
    }
  }
</style>
