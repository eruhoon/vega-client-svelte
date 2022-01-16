<script lang="ts">
  import { ChatService } from '../../../../service/ChatService';
  import { SessionService } from '../../../../service/SessionService';
  import { SocketService } from '../../../../service/SocketService';

  export let src: string;

  $: internalSrc = anlayzeIcon();

  function anlayzeIcon() {
    const imgurRegex = /https:\/\/i\.imgur\.com\/(\w{7})\w?\.(.*)/;

    if (imgurRegex.test(src)) {
      return src.replace(imgurRegex, 'https://i.imgur.com/$1s.$2');
    } else {
      return src;
    }
  }

  function sendIcon() {
    const privateKey = SessionService.getPrivateKey();
    SocketService.chat?.execute(privateKey, 'chat', src);
    ChatService.requestScrollDown(true);
  }
</script>

<div class="icon" on:contextmenu|preventDefault={sendIcon}>
  <img src={internalSrc} alt="프로필" />
</div>

<style lang="scss">
  $icon-size: 44px;

  .icon {
    position: relative;
    width: $icon-size;
    height: $icon-size;
    object-fit: cover;

    img {
      width: $icon-size - 4px;
      height: $icon-size - 4px;
      border-radius: 50%;
      border: 2px solid var(--primary-background-color);
    }
  }
</style>
