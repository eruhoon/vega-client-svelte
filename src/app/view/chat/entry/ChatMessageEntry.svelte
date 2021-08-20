<script lang="ts">
  import type { ChatMessage } from '../../../model/chat/ChatMessage';

  export let message: ChatMessage;

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
</script>

<div class="container">
  <div class="body">{message.hash}</div>
  <div class="footer">{timestamp}</div>
</div>

<style lang="scss">
  $foreground-color: #eeeeee;

  .body {
    position: relative;
    word-wrap: break-word;
  }
  .footer {
    font-size: 8px;
    text-align: end;
    color: $foreground-color;
  }
</style>
