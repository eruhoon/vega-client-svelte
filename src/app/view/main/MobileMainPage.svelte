<script lang="ts">
  import { get } from 'svelte/store';
  import { ChatNetworkService } from '../../model/network/ChatNetworkService';
  import { CheckerNetworkService } from '../../model/network/checker/CheckerNetworkService';
  import { WindowService } from '../../model/window/WindowService';
  import ChatPage from '../chat/ChatPage.svelte';
  import ModalLayer from '../modal/ModalLayer.svelte';
  import PhotoPage from '../photo/PhotoPage.svelte';
  import PopupContentLayer from '../popup/PopupContentLayer.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  export let privateKey: string;

  let mainMode = 'chat';

  let sideBarVisible = get(WindowService.sideBarShow);

  ChatNetworkService.init(privateKey);
  CheckerNetworkService.init(privateKey);
  WindowService.sideBarShow.subscribe((v) => (sideBarVisible = v));
</script>

<div class="top-bar"><TopBar /></div>
<div class="main-section">
  {#if mainMode === 'chat'}
    <div class="chat-section">
      <ChatPage />
    </div>
  {:else if mainMode === 'photo'}
    <div class="photo-section">
      <PhotoPage />
    </div>
  {/if}
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar />
  </div>
</div>

<PopupContentLayer />
<ModalLayer />

<style lang="scss">
  $top-bar-height: 50px;
  $side-bar-width: 250px;
  $default-chat-width: 300px;
  $dark-mode-bg-color: #2a2f38;
  $dark-mode-font-color: #ffffff;
  $dark-mode-active-color: #1f2226;

  .top-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $top-bar-height;
    margin: 0;
    z-index: 2;
    background: #2a2f38;
    box-shadow: 2px 0px 5px 1px rgb(0 0 0 / 40%),
      1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%);
  }

  .main-section {
    position: absolute;
    left: 0;
    top: $top-bar-height;
    display: block;
    width: 100%;
    height: calc(100% - #{$top-bar-height});
    background-color: #2a2f38;

    .photo-section,
    .chat-section {
      width: 100%;
      height: 100%;
      background: #2a2f38;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 40%), 0 0 15px 0 rgb(0 0 0 / 30%),
        0 0 20px 4px rgb(0 0 0 / 30%);
    }

    .side-bar {
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.2s ease-in-out;
      width: $side-bar-width;
      height: 100%;
      transform: translateX(-$side-bar-width);
      z-index: 5;

      &.show {
        transform: none;
      }
    }
  }
</style>
