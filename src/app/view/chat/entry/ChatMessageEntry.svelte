<script lang="ts">
  import type { ChatMessage } from '../../../model/chat/ChatMessage';
  import { OptionService } from '../../../model/option/OptionService';
  import TextPack from '../pack/TextPack.svelte';

  export let message: ChatMessage;
  let enableTimestamp = OptionService.enableTimestamp;

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

  OptionService.subscribeEnableTimestamp((v) => (enableTimestamp = v));
</script>

<div class="container">
  <div class="body">
    {#if message.type === 'chat'}
      <TextPack body={message.body} />
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
  <div class="footer" class:hide={!enableTimestamp}>{timestamp}</div>
</div>

<style lang="scss">
  $foreground-color: #ffffff;
  .container {
    .body {
      position: relative;
      word-wrap: break-word;
      color: $foreground-color;
      padding-bottom: 4px;
      .menu {
        display: flex;
        position: absolute;
        left: -1px;
        bottom: -23px;
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

      &.hide {
        display: none;
      }
    }
  }
</style>
