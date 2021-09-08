<script lang="ts">
  import { get } from 'svelte/store';
  import type { ChatMessage } from '../../../model/chat/ChatMessage';
  import { OptionService } from '../../../model/option/OptionService';
  import AzurlaneShipPack from '../pack/AzurlaneShipPack.svelte';
  import DefaultGeneralPurposeCardPack from '../pack/DefaultGeneralPurposeCardPack.svelte';
  import GeneralPurposeCarouselPack from '../pack/GeneralPurposeCarouselPack.svelte';
  import ImagePack from '../pack/ImagePack.svelte';
  import LinkPack from '../pack/LinkPack.svelte';
  import LolChampionPack from '../pack/LolChampionPack.svelte';
  import LolUserPack from '../pack/LolUserPack.svelte';
  import StreamPack from '../pack/StreamPack.svelte';
  import TextPack from '../pack/TextPack.svelte';
  import TwitchChannelPack from '../pack/TwitchChannelPack.svelte';
  import TwitchClipPack from '../pack/TwitchClipPack.svelte';
  import YoutubePack from '../pack/YoutubePack.svelte';

  export let message: ChatMessage;
  let enableTimestamp = get(OptionService.timestamp);

  const getPack = (type: string) => {
    switch (type) {
      case 'chat':
        return TextPack;
      case 'image':
        return ImagePack;
      case 'link':
        return LinkPack;
      case 'general-purpose-card':
        return DefaultGeneralPurposeCardPack;
      case 'al-ship':
        return AzurlaneShipPack;
      case 'general-purpose-carousel':
        return GeneralPurposeCarouselPack;
      case 'youtube':
        return YoutubePack;
      case 'stream':
        return StreamPack;
      case 'twitch':
        return TwitchChannelPack;
      case 'twitch-clip':
        return TwitchClipPack;
      case 'lol':
        return LolUserPack;
      case 'champion':
        return LolChampionPack;
      default:
        return null;
    }
  };
  let pack = getPack(message.type);

  $: timestamp = convertTimeToString(new Date(message.timestamp).getTime());

  const convertTimeToString = (timestamp: number): string => {
    const padZero = (n: number) => (n < 10 ? `0${n}` : n);
    const time = new Date(timestamp);

    const y = time.getFullYear();
    const mm = padZero(time.getMonth() + 1);
    const d = padZero(time.getDate());
    const h = padZero(time.getHours());
    const m = padZero(time.getMinutes());
    const s = padZero(time.getSeconds());
    return `${y}-${mm}-${d} ${h}:${m}:${s}`;
  };

  OptionService.timestamp.subscribe((v) => (enableTimestamp = v));
</script>

<div class="container">
  <div class="body">
    {#if pack}
      <svelte:component this={pack} body={message.body} />
    {:else}
      {message.type}
    {/if}

    <!-- 테스트 구문 시작 -->
    <div class="menu">
      <button><i class="far fa-angry" /></button>
      <button><i class="far fa-grimace" /></button>
      <button><i class="far fa-grin" /></button>
      <button><i class="far fa-grin-squint-tears" /></button>
      <button><i class="far fa-sad-tear" /></button>
    </div>
    <!-- 테스트 구문 끝 -->
  </div>
  {#if enableTimestamp}
    <div class="footer">{timestamp}</div>
  {/if}
</div>

<style lang="scss">
  $foreground-color: #ffffff;
  .container {
    .body {
      position: relative;
      width: 100%;
      word-wrap: break-word;
      color: $foreground-color;
      padding-bottom: 4px;
      .menu {
        display: flex;
        position: absolute;
        right: -1px;
        bottom: -0px;
        width: auto;
        padding: 5px;
        background-color: #1c2027;
        border-radius: 3px;
        justify-content: flex-end;
        visibility: collapse;

        z-index: 2;

        button {
          width: 20px;
          height: 20px;
          padding: 0;
          margin: 0;
          border: none;
          border-radius: 10px;
          outline: none;
          margin-left: 5px;

          background: #1c2027;
          color: #ffffff;

          &:hover {
            color: #ff4081;
          }

          &:first-child {
            margin-left: 0px;
          }
        }
      }

      &:hover {
        .menu {
          visibility: visible;
        }
      }
    }
    .footer {
      display: block;
      font-size: 8px;
      line-height: 10px;
      text-align: end;
      padding-bottom: 6px;
      color: #6c6f75;
    }
  }
</style>
