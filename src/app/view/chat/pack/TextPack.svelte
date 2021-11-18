<script lang="ts">
  import { EmojiUtils } from '../../../model/chat/emoji/EmojiUtils';

  export let body = '';

  $: isEmoji = EmojiUtils.isEmoji(body);
  $: replaced = body.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
</script>

<div>
  <p class:emoji={isEmoji}>{replaced}</p>
</div>

<style lang="scss">
  div {
    width: 100%;
    position: relative;
    p {
      width: 100%;
      font-size: 16px;
      line-height: 22px;

      &.emoji {
        font-size: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
</style>
