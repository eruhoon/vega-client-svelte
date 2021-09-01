<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
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

  // 플레이어 바 부분 영역
  let videoMouse = false;
  const videoMouseOver = () => {
    videoMouse = true;
  };
  const videoMouseOut = () => {
    videoMouse = false;
  };
  const videoBlur = () => {
    console.log('blur');
  };
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="root"
  on:mouseover={videoMouseOver}
  on:mouseout={videoMouseOut}
  on:blur={videoBlur}
>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={videoElement} />
  <!-- 플레이어 서비스 하단 바 구현 시작 -->
  {#if videoMouse}
    <div class="video-bar" transition:fade>
      <div class="left-list">
        <div class="work-btn">
          <button class="btn play-btn active">
            <i class="fas fa-play" />
          </button>
          <button class="btn pause-btn">
            <i class="fas fa-pause" />
          </button>
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="volume-side">
          <div class="volume-btn">
            <button class="btn up-btn active">
              <i class="fas fa-volume-up" />
            </button>
            <button class="btn down-btn">
              <i class="fas fa-volume-down" />
            </button>
            <button class="btn down-btn">
              <i class="fas fa-volume-mute" />
            </button>
          </div>
          <div class="range">
            <input id="rangeBar" type="range" min="0" max="100" />
          </div>
        </label>
      </div>
      <div class="right-list">
        <div class="size-btn">
          <button class="btn full-size active">
            <i class="fas fa-expand" />
          </button>
          <button class="btn def-size">
            <i class="fas fa-compress" />
          </button>
        </div>
      </div>
    </div>
  {/if}
  <!-- 플레이어 서비스 하단 바 구현 끝-->
</div>

<style lang="scss">
  .root {
    width: 100%;
    height: 100%;
    background-color: #000000;
    position: relative;

    &:hover {
      .video-bar {
      }
    }

    video {
      width: 100%;
      height: 100%;
    }
    .video-bar {
      width: 100%;
      height: 50px;
      padding-top: 10px;
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

      // 버튼 설정
      .btn {
        width: 40px;
        height: 40px;
        border-radius: 0%;
        border: 0px;
        color: #ffffff;
        background: transparent;
        margin: 5px;

        display: none;
        &.active {
          display: inline-block;
        }
        i {
          font-size: 18px;
        }
      }

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
          .range {
            width: 4vw;
            padding: 14px 0px;
            input[type='range'] {
              margin-left: 10px;
              -webkit-appearance: none;
              padding: 0.1em;
              width: 100%;
              height: 4px;
              background: linear-gradient(
                to right,
                #ff4081 0%,
                #ff4081 50%,
                #ffffff 50%,
                #ffffff 100%
              );
              cursor: pointer;
              border-radius: 12px; /* iOS */
              transition: background 450ms ease-in;
              border: 0px;
            }

            input[type='range']:focus {
              outline: none;
            }

            input[type='range']::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 16px;
              height: 16px;
              background: #ff4081;
              border: 1px solid #ff4081;
              border-radius: 50%;
              cursor: pointer;
            }
            input[type='range']::-moz-range-thumb {
              -webkit-appearance: none;
              width: 16px;
              height: 16px;
              background: #ff4081;
              border: 1px solid #ff4081;
              border-radius: 50%;
              cursor: pointer;
            }
          }
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
  }
</style>
