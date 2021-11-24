<script lang="ts">
  import { SocketShareStreamCommand } from '../../model/socket/command/SocketShareStreamCommand';
  import { StreamEmbedLinkUtils } from '../../model/stream/StreamEmbedLinkUtils';
  import type { StreamInfo } from '../../model/stream/StreamInfo';
  import { WindowService } from '../../model/window/WindowService';
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

  $: icon = stream.icon;
  $: title = stream.title;
  $: viewer = stream.viewer?.toString();
  $: thumbnail = getThumbnail(stream);
  $: description = stream.description;
  $: content = factory.createFromStream(stream);
  $: link = StreamEmbedLinkUtils.getLink(stream);

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

<div class="root">
  <img alt={title} class="icon" src={icon} on:click={onIconClick} />
  <div class="detail" class:thumbnail>
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
</div>

<style lang="scss">
  $menu-icon-size: 60px;
  $menu-icon-size-5px: 65px;
  $background-color: #2a2f38;

  .root {
    position: relative;
    display: inline-block;
    width: $menu-icon-size - 5px;
    height: $menu-icon-size;

    .icon {
      width: $menu-icon-size - 10px;
      height: $menu-icon-size - 10px;
      padding: 5px 2.5px;
      border-radius: 2px;
      opacity: 0.5;
    }

    .detail {
      $width: 240px;
      position: absolute;
      display: none;
      align-items: center;
      left: 5px;
      bottom: $menu-icon-size + 0px;
      width: $width;
      height: 120px;
      border-radius: 2px;
      background: darken($background-color, 10%);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      border-radius: 0px;
      overflow: hidden;
      box-shadow: 2px 0px 5px 1px rgb(0 0 0 / 40%),
        1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%);

      &.thumbnail {
        height: 195px;
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
          color: #ffffff;
          background-color: #2a2f38;

          &:hover {
            background-color: #ff4081;
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
        background: #2a2f38;

        .text {
          width: calc(100% - 10px);
          margin-left: 10px;
          margin-top: 10px;

          .title {
            width: calc(100% - 90px);
            text-align: left;
            color: #fff;
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
            color: #eee;
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

    &:hover {
      .icon {
        opacity: 1;
      }

      .detail {
        display: flex;
      }
    }
  }
</style>
