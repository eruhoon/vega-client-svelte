<script lang="ts">
  import type { Content } from '../../model/window/Content';

  import { WindowService } from '../../model/window/WindowService';

  export let icon: string;
  export let title: string;
  export let viewer: string;
  export let thumbnail: string;
  export let description: string;
  export let keyId: string;
  export let platform: string;

  const onIconClick = () => {
    WindowService.openContent(content);
  };

  $: content = getContent(platform);

  const getContent = (p: string): Content => {
    switch (p) {
      case 'local':
        return {
          type: 'local-stream',
          src: keyId,
        };
      case 'totoro':
        return {
          type: 'totoro-stream',
          src: keyId,
        };
    }
  };
</script>

<div class="root">
  <img alt={title} class="icon" src={icon} on:click={onIconClick} />
  <div class="bridge" />
  <div class="detail thumbnail">
    {#if thumbnail}
      <img
        class="thumbnail"
        alt="thumbnail"
        src={thumbnail}
        style="display: inline"
        on:error={() => (thumbnail = '')}
      />
    {/if}
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
      margin: 5px;
      border: 1px solid #1f2226;
      border-radius: 2px;
      background: darken($background-color, 10%);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
      opacity: 0.5;
    }

    .bridge {
      position: absolute;
      right: 0;
      top: -5px;
      width: $menu-icon-size;
      height: 5px;
    }

    .detail {
      $width: 240px;
      position: absolute;
      display: none;
      align-items: center;
      left: 5px;
      bottom: $menu-icon-size + 5px;
      width: $width;
      height: 195px;
      border-radius: 2px;
      background: darken($background-color, 10%);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      border-radius: 0px;
      overflow: hidden;
      box-shadow: 2px 0px 5px 1px rgb(0 0 0 / 40%),
        1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%);

      .thumbnail {
        width: $width;
        max-height: 135px;
        padding-bottom: 65px;
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
