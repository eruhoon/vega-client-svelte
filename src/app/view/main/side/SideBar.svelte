<script>
  import { get } from 'svelte/store';
  import { StreamService } from '../../../model/stream/StreamService';
  import SideBarStreamList from './stream/SideBarStreamList.svelte';

  let locals = get(StreamService.locals);
  let externals = get(StreamService.externals);

  $: twitches = externals.filter((s) => s.platform === 'twitch');
  $: afreecas = externals.filter((s) => s.platform === 'afreeca');
  $: kakaotvs = externals.filter((s) => s.platform === 'kakaotv');

  StreamService.locals.subscribe((v) => (locals = v));
  StreamService.externals.subscribe((v) => (externals = v));
</script>

<div class="side-bar">
  <ul>
    <li class="main">
      <i class="far fa-comments" />
      <span>채팅</span>
    </li>
    <li class="main">
      <i class="fas fa-book" />
      <span>메모</span>
    </li>
    <li class="main">
      <i class="fas fa-images" />
      <span>이미지 갤러리</span>
    </li>
    <li class="main">
      <i class="fas fa-broadcast-tower" />
      <span>방송추가</span>
    </li>
  </ul>
  <div>
    <hr />
    <SideBarStreamList title="마이캐스트" streams={locals} />
    <hr />
    <SideBarStreamList title="즐겨찾기" streams={[]} />
    <hr />
    <SideBarStreamList title="트위치" streams={twitches} />
    <hr />
    <SideBarStreamList title="아프리카" streams={afreecas} />
    <hr />
    <SideBarStreamList title="카카오TV" streams={kakaotvs} />
  </div>
</div>

<style lang="scss">
  .side-bar {
    overflow-y: auto;
    max-height: 100%;
    z-index: 10;
    height: 100%;

    box-shadow: 2px 0px 2px 1px rgb(0 0 0 / 20%),
      2px 0px 3px 1px rgb(0 0 0 / 20%), 2px 0px 3px 0px rgb(0 0 0 / 20%);

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
    background-color: #2a2f38;
    color: #ffffff;
    scrollbar-color: #ff4081 #2a2f38;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-track {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff4081;
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
    border-color: #36393f;
    margin: 5px 0px;
  }
</style>
