<script>
  import { createEventDispatcher } from 'svelte';
  import { get } from 'svelte/store';
  import { FavoriteService } from '../../../service/FavoriteService';
  import { StreamService } from '../../../service/StreamService';
  import { WindowService } from '../../../service/WindowService';
  import SideBarStreamList from './stream/SideBarStreamList.svelte';

  const dispatch = createEventDispatcher();

  export let chatEnabled = true;
  let locals = get(StreamService.locals);
  let externals = get(StreamService.externals);

  $: twitches = externals.filter((s) => s.platform === 'twitch');
  $: afreecas = externals.filter((s) => s.platform === 'afreeca');
  $: kakaotvs = externals.filter((s) => s.platform === 'kakaotv');
  $: youtubes = externals.filter((s) => s.platform === 'youtube');
  $: favorites = externals.filter((it) => {
    const { platform, keyid: keyId } = it;
    return FavoriteService.isFavorite(platform, keyId);
  });

  StreamService.locals.subscribe((v) => (locals = v));
  StreamService.externals.subscribe((v) => (externals = v));

  function onAddStreamClick() {
    WindowService.openModal('add-stream');
    WindowService.closeSideBar();
  }
</script>

<div class="side-bar">
  <ul>
    {#if chatEnabled}
      <li class="main" on:click={(_) => dispatch('chatclick')}>
        <i class="far fa-comments" />
        <span>채팅</span>
      </li>
    {/if}
    <li class="main" on:click={(_) => dispatch('memoclick')}>
      <i class="fas fa-book" />
      <span>메모</span>
    </li>
    {#if true}
      <li class="main" on:click={(_) => dispatch('donationclick')}>
        <i class="fas fa-money-bill-wave" />
        <span>도네이션</span>
      </li>
    {/if}
    <li class="main" on:click={(_) => dispatch('photoclick')}>
      <i class="fas fa-images" />
      <span>이미지 갤러리</span>
    </li>
    <li class="main" on:click={onAddStreamClick}>
      <i class="fas fa-broadcast-tower" />
      <span>방송추가</span>
    </li>
  </ul>
  <div>
    <hr />
    <SideBarStreamList
      title="마이캐스트"
      streams={locals}
      supportFavorite={false}
    />
    <hr />
    <SideBarStreamList title="즐겨찾기" streams={favorites} />
    <hr />
    <SideBarStreamList title="트위치" streams={twitches} />
    <hr />
    <SideBarStreamList title="아프리카" streams={afreecas} />
    <hr />
    <SideBarStreamList title="카카오TV" streams={kakaotvs} />
    <hr />
    <SideBarStreamList title="유튜브" streams={youtubes} />
  </div>
</div>

<style lang="scss">
  .side-bar {
    overflow-y: auto;
    max-height: 100%;
    z-index: 10;
    height: 100%;

    box-shadow: var(--primary-box-shadow);

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border: 3px solid;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 50px;
      width: 50px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
    }
  }
  // 컬러 스크롤링 컬러셋
  .side-bar {
    background-color: var(--primary-background-color);
    color: var(--primary-foreground-color);
    scrollbar-color: var(--primary-activeground-color)
      var(--primary-background-color);
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-track {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-activeground-color);
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    height: 30px;
    list-style-type: none;
    padding: 5px 10px;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    span {
      padding-left: 10px;
      width: calc(100% - 40px);
      max-width: calc(100% - 40px);
      font-size: 14px;
    }
  }
  hr {
    border-color: var(--primary-hoverground-color);
    margin: 5px 0px;
  }
</style>
