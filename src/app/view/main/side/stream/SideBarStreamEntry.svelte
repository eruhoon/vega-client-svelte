<script lang="ts">
  import { onMount } from 'svelte';
  import { FavoriteService } from '../../../../model/favorite/FavoriteService';
  import { SocketShareStreamCommand } from '../../../../model/socket/command/SocketShareStreamCommand';
  import { StreamEmbedLinkUtils } from '../../../../model/stream/StreamEmbedLinkUtils';
  import type { StreamInfo } from '../../../../model/stream/StreamInfo';
  import { ToastService } from '../../../../model/toast/ToastService';
  import { WindowService } from '../../../../model/window/WindowService';
  import { ContentFactory } from '../../content/ContentFactory';
  import SimpleEntry from './entry/SimpleEntry.svelte';

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
  const factory = new ContentFactory();
  let isFavorite = false;

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
  <div class="entry-cont">
    <SimpleEntry
      {stream}
      {supportFavorite}
      {isFavorite}
      on:favoriteclick={onFavoriteClick}
      on:newwindowclick={onNewWindowClick}
      on:shareclick={onShareClick}
    />
  </div>
</li>

<style lang="scss">
  li {
    display: flex;
    width: 100%;
    height: auto;
    min-height: 40px;
    align-items: center;
    justify-content: center;

    .entry-cont {
      position: relative;
      width: calc(100% - 10px);
      height: auto;
      min-height: 30px;
    }
  }
</style>
