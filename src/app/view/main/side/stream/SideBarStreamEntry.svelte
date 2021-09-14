<script lang="ts">
  import { SocketShareStreamCommand } from '../../../../model/socket/command/SocketShareStreamCommand';
  import { StreamEmbedLinkUtils } from '../../../../model/stream/StreamEmbedLinkUtils';
  import type { StreamInfo } from '../../../../model/stream/StreamInfo';
  import { WindowService } from '../../../../model/window/WindowService';
  import { ContentFactory } from '../../content/ContentFactory';

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
  let factory = new ContentFactory();

  $: icon = stream.icon;
  $: title = stream.title;
  $: content = factory.createFromStream(stream);
  $: thumbnail = stream.thumbnail;
  $: link = StreamEmbedLinkUtils.getLink(stream);

  function onClick() {
    WindowService.openContent(content);
    WindowService.closeSideBar();
  }

  function onShareClick() {
    new SocketShareStreamCommand(stream).execute();
    WindowService.closeSideBar();
  }

  function onNewWindowClick() {
    window.open(link, '_blank', 'width=1280,height=720');
    WindowService.closeSideBar();
  }
</script>

<li on:click={onClick}>
  <img src={icon} alt={title} />
  <span>{title}</span>

  <button class="icon" on:click|stopPropagation={onShareClick}>
    <i class="fas fa-link" />
  </button>
  <button class="icon">
    <i class="fas fa-star" />
  </button>
  <button class="icon" on:click|stopPropagation={onNewWindowClick}>
    <i class="fas fa-external-link-alt" />
  </button>
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    button {
      display: none;
      width: 30px;
      height: 30px;
      border: 0px;
      border-radius: 15px;
      margin: 2px;
      padding: 0%;
      color: #ffffff;
      background-color: #2a2f38;
      &:hover {
        background-color: #ff4081;
      }
      i {
        font-size: 12px;
        line-height: 30px;
      }
    }
  }

  li:hover {
    button {
      display: block;
    }
  }
</style>
