<script lang="ts">
  import { fade } from 'svelte/transition';
  import PlayPauseButton from './PlayPauseButton.svelte';
  import VideoButton from './VideoButton.svelte';
  import VolumeControl from './VolumeControl.svelte';

  export let muted: boolean;
  export let paused: boolean;
  export let volume: number;
  export let onPlayPauseClick = () => {};
  export let onMuteClick = () => {};
  export let onFullscreenClick = () => {};
</script>

<div class="video-bar" transition:fade={{ delay: 150, duration: 400 }}>
  <div class="left-list">
    <div class="work-btn">
      <PlayPauseButton play={!paused} onClick={onPlayPauseClick} />
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class="volume-side">
      <VolumeControl {onMuteClick} bind:volume {muted} />
    </label>
  </div>
  <div class="right-list">
    <div class="size-btn">
      <VideoButton icon="fas fa-expand" onClick={onFullscreenClick} />
    </div>
  </div>
</div>

<style lang="scss">
  .video-bar {
    width: 100%;
    height: 60px;
    padding-top: 15px;
    padding-bottom: 5px;
    position: absolute;
    bottom: 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    color: #ffffff;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.75) 74%,
      rgba(0, 0, 0, 0.9) 100%
    );

    * {
      margin: 0%;
      padding: 0%;
    }

    .left-list {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;

      .work-btn {
        margin-left: 10px;
      }
      .volume-side {
        display: flex;
      }
    }
    .right-list {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      .size-btn {
        margin-right: 10px;
      }
    }
  }
</style>
