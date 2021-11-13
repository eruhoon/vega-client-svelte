<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatNetworkService } from '../../model/network/ChatNetworkService';
  import { CheckerNetworkService } from '../../model/network/checker/CheckerNetworkService';
  import { WindowService } from '../../model/window/WindowService';
  import ChatPage from '../chat/ChatPage.svelte';
  import MemoPage from '../memo/MemoPage.svelte';
  import ModalLayer from '../modal/ModalLayer.svelte';
  import PhotoPage from '../photo/PhotoPage.svelte';
  import PopupContentLayer from '../popup/PopupContentLayer.svelte';
  import ContentView from './content/ContentView.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  export let privateKey: string;

  let mainMode = 'chat';

  let sideBarVisible = false;
  let currentContent = null;

  onMount(() => {
    ChatNetworkService.init(privateKey);
    CheckerNetworkService.init(privateKey);
    WindowService.sideBarShow.subscribe((it) => (sideBarVisible = it));
    WindowService.content.subscribe((it) => (currentContent = it));
  });

  function onPhotoClick() {
    mainMode = 'photo';
    WindowService.closeSideBar();
  }

  function onChatClick() {
    mainMode = 'chat';
    WindowService.closeSideBar();
  }

  function onMemoClick() {
    mainMode = 'memo';
    WindowService.closeSideBar();
  }

  function onContentCloseClick() {
    WindowService.closeContent();
  }
</script>

<div class="top-bar"><TopBar /></div>
<div class="main-section">
  {#if currentContent !== null}
    <div class="content-section">
      <ContentView />
      <button class="fab" on:click={onContentCloseClick}>x</button>
    </div>
  {/if}
  {#if mainMode === 'chat'}
    <div class="chat-section">
      <ChatPage />
    </div>
  {:else if mainMode === 'photo'}
    <div class="photo-section">
      <PhotoPage />
    </div>
  {:else if mainMode === 'memo'}
    <div class="memo-section">
      <MemoPage />
    </div>
  {/if}
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar
      on:photoclick={onPhotoClick}
      on:chatclick={onChatClick}
      on:memoclick={onMemoClick}
    />
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - #{$top-bar-height});
    background-color: #2a2f38;

    .content-section {
      position: relative;
      flex-shrink: 0;
      height: auto;
      max-height: 300px;
      margin: 0;
      padding: 0;

      button.fab {
        position: absolute;
        right: 10px;
        bottom: -50px;
        width: 40px;
        height: 40px;
        z-index: 1;
      }
    }

    .photo-section,
    .chat-section {
      width: 100%;
      flex-grow: 1;
      overflow: hidden;
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
