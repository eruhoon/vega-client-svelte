<script lang="ts">
  import { onMount } from 'svelte';

  import { SocketShareStreamCommand } from '../../model/socket/command/SocketShareStreamCommand';
  import { StreamEmbedLinkUtils } from '../../model/stream/StreamEmbedLinkUtils';
  import type { StreamInfo } from '../../model/stream/StreamInfo';
  import { OptionService } from '../../service/OptionService';
  import { WindowService } from '../../service/WindowService';
  import BottomBarItem from '../main/bottom/BottomBarItem.svelte';
  import { ContentFactory } from '../main/content/ContentFactory';

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
  let rightAlign = false;

  $: icon = stream.icon;
  $: title = stream.title;
  $: viewer = stream.viewer?.toString();
  $: thumbnail = getThumbnail(stream);
  $: description = stream.description;
  $: content = factory.createFromStream(stream);
  $: link = StreamEmbedLinkUtils.getLink(stream);

  onMount(() => {
    OptionService.enableCheckerRightAlign.subscribe((it) => (rightAlign = it));
  });

  const onIconClick = () => {
    WindowService.openContent(content);
  };

  function onShareClick() {
    new SocketShareStreamCommand(stream).execute();
  }

  function onNewWindowClick() {
    window.open(link, '_blank', 'width=1280,height=720');
  }

  function getThumbnail(stream: StreamInfo): string | null {
    if (stream.platform === 'totoro') {
      return null;
    } else {
      return stream.thumbnail;
    }
  }
</script>

<BottomBarItem {icon} on:iconclick={onIconClick}>
  <div class="detail" class:thumbnail class:right-align={rightAlign}>
    {#if thumbnail}
      <img
        class="thumbnail"
        alt="thumbnail"
        src={thumbnail}
        style="display: inline"
        on:error={() => (thumbnail = '')}
      />
    {/if}
    <div class="bridge">
      <button class="icon" on:click={onShareClick}>
        <i class="fas fa-link" />
      </button>
      <button class="icon" on:click={onNewWindowClick}>
        <i class="fas fa-external-link-alt" />
      </button>
    </div>
    <div class="wrapper">
      <div class="text">
        <h4 class="title">{title}</h4>
        <div class="viewer">
          <span>{viewer}</span>
          <i class="fas fa-user" />
        </div>
      </div>
      <p class="description">{description}</p>
    </div>
  </div>
</BottomBarItem>

<style lang="scss">
  $background-color: var(--primary-background-color);
  $width: 240px;

  .detail {
    align-items: center;
    width: $width;
    height: 120px;
    border-radius: 2px;
    background: dark($background-color, 10%);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    border-radius: 0px;
    overflow: hidden;
    box-shadow: var(--primary-box-shadow);

    &.thumbnail {
      height: 195px;
    }

    &.right-align {
      left: auto;
      right: 5px;
    }

    .thumbnail {
      width: $width;
      max-height: 135px;
      padding-bottom: 65px;
    }

    .bridge {
      width: auto;
      height: auto;
      position: absolute;
      right: 5px;
      top: 5px;
      button {
        width: 32px;
        height: 32px;
        border: 0px;
        border-radius: 20px;
        margin: 2px;
        padding: 0%;
        color: var(--primary-foreground-color);
        background-color: var(--primary-background-color);

        &:hover {
          background-color: var(--primary-activeground-color);
          color: var(--primary-activeground-font-color);
        }

        i {
          font-size: 12px;
        }
      }
    }

    .wrapper {
      width: 100%;
      height: 60px;

      position: absolute;
      left: 0px;
      bottom: 0px;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.75))
      );
      background: var(--primary-background-color);

      .text {
        width: calc(100% - 10px);
        margin-left: 10px;
        margin-top: 10px;

        .title {
          width: calc(100% - 90px);
          text-align: left;
          color: var(--primary-foreground-color);
          font-size: 18px;
          font-weight: bold;
          margin: 0%;
          padding: 0%;
          opacity: 1;
          padding-bottom: 5px;
          float: left;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .viewer {
          max-width: 70px;
          height: 20px;
          margin-right: 5px;
          color: var(--primary-foreground-color);
          font-size: 12px;
          float: right;
          display: flex;
          align-items: center;
          -webkit-align-items: center;
          span {
            font-size: 14px;
            line-height: 20px;
          }
          i {
            padding-left: 5px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }

      .description {
        width: calc(100% - 20px);
        text-align: left;
        color: #eee;
        font-size: 9px;
        overflow: hidden;
        padding: 0%;
        margin-left: 10px;
      }
    }
  }
</style>
