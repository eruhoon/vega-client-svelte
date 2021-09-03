<script lang="ts">
  import type { StreamInfo } from '../../../../model/stream/StreamInfo';
  import type { Content } from '../../../../model/window/Content';
  import { WindowService } from '../../../../model/window/WindowService';

  export let stream: StreamInfo = {
    icon: '',
    keyid: '',
    platform: '',
    title: '',
    viewer: 0,
    url: '',
    description: '',
    thumbnail: '',
  };

  $: icon = stream.icon;
  $: title = stream.title;
  $: content = getContent(stream);

  const getContent = (stream: StreamInfo): Content => {
    switch (stream.platform) {
      case 'local':
        return {
          type: 'local-stream',
          src: stream.keyid,
        };
      case 'totoro':
        return {
          type: 'totoro-stream',
          src: stream.keyid,
        };
      case 'kakaotv':
        return {
          type: 'iframe',
          src: stream.url,
        };
      case 'twitch':
        return {
          type: 'twitch-stream',
          src: stream.url,
        };
      case 'afreeca':
        return {
          type: 'iframe',
          src: stream.url,
        };
    }
  };
</script>

<li on:click={(_) => WindowService.openContent(content)}>
  <img src={icon} alt={title} />
  <span>{title}</span>
</li>

<style lang="scss">
  li {
    position: relative;
    display: flex;
    height: 30px;
    list-style-type: none;
    padding: 5px 10px;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }

    span {
      padding-left: 10px;
      width: calc(100% - 40px);
      max-width: calc(100% - 40px);
      font-size: 12px;
      line-height: 12px;
      padding-top: 4px;
    }
  }
</style>
