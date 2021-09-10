<script lang="ts">
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

  function onClick() {
    WindowService.openContent(content);
    WindowService.closeSideBar();
  }
</script>

<li on:click={onClick}>
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
