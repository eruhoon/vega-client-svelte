<script lang="ts">
  import { onMount } from 'svelte';
  import { FavoriteService } from '../../../../model/favorite/FavoriteService';
  import { SocketShareStreamCommand } from '../../../../model/socket/command/SocketShareStreamCommand';
  import { StreamEmbedLinkUtils } from '../../../../model/stream/StreamEmbedLinkUtils';
  import type { StreamInfo } from '../../../../model/stream/StreamInfo';
  import { ToastService } from '../../../../model/toast/ToastService';
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
  export let supportFavorite = true;
  let factory = new ContentFactory();
  let isFavorite = false;

  $: icon = stream.icon;
  $: title = stream.title;
  $: content = factory.createFromStream(stream);
  $: link = StreamEmbedLinkUtils.getLink(stream);

  onMount(() => {
    isFavorite = FavoriteService.isFavorite(stream.platform, stream.keyid);
  });

  function onClick() {
    WindowService.openContent(content);
    WindowService.closeSideBar();
  }

  function onShareClick() {
    new SocketShareStreamCommand(stream).execute();
    WindowService.closeSideBar();
  }

  function onFavoriteClick() {
    if (isFavorite) {
      FavoriteService.removeFavorite(stream.platform, stream.keyid);
      ToastService.toastText('즐겨찾기가 해제되었습니다.');
    } else {
      FavoriteService.addFavorite(stream.platform, stream.keyid);
      ToastService.toastText('즐겨찾기로 설정되었습니다.');
    }
    isFavorite = !isFavorite;
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
  {#if supportFavorite}
    <button class="icon" on:click|stopPropagation={onFavoriteClick}>
      <i class="fas fa-star" class:activated={isFavorite} />
    </button>
  {/if}
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
      border: 0px;
      border-radius: 15px;
      margin: 2px;
      padding: 2px 10px;
      color: #ffffff;
      background-color: #2a2f38;
      &:hover {
        background-color: #ff4081;
      }
      i {
        font-size: 12px;
        line-height: 30px;
        &.activated {
          color: #ffff22;
        }
      }
    }
  }

  li:hover {
    button {
      display: block;
    }
  }
</style>
