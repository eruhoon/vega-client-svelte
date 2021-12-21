<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatNetworkService } from '../../service/ChatNetworkService';
  import { CheckerNetworkService } from '../../service/CheckerNetworkService';
  import { SocketService } from '../../service/SocketService';
  import { WindowService } from '../../service/WindowService';
  import ChatPage from '../chat/ChatPage.svelte';
  import DonationPage from '../donation/DonationPage.svelte';
  import MemoPage from '../memo/MemoPage.svelte';
  import ModalLayer from '../modal/ModalLayer.svelte';
  import PhotoPage from '../photo/PhotoPage.svelte';
  import PopupContentLayer from '../popup/PopupContentLayer.svelte';
  import CollapsedContentView from './CollapsedContentView.svelte';
  import ImagePopupLayer from './popup/ImagePopupLayer.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  export let privateKey: string;

  let mainMode = 'chat';

  let sideBarVisible = false;
  let currentContent = null;
  let chatConnected = false;

  SocketService.isConnected.subscribe((it) => (chatConnected = it));

  onMount(() => {
    ChatNetworkService.init(privateKey);
    CheckerNetworkService.init(privateKey);
    WindowService.sideBarShow.subscribe((it) => (sideBarVisible = it));
    WindowService.content.subscribe((it) => (currentContent = it));
  });

  function onDonationClick() {
    console.log('donaiton');

    mainMode = 'donation';
    WindowService.closeSideBar();
  }

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

  function onConnectClick() {
    ChatNetworkService.init(privateKey);
  }
</script>

<div class="top-bar"><TopBar /></div>
<div class="main-section">
  <CollapsedContentView subViewActivated={currentContent !== null}>
    <div slot="main" class="bottom-section">
      {#if mainMode === 'chat'}
        {#if chatConnected}
          <ChatPage />
        {:else}
          <div class="error-page">
            <div class="container">
              <div>Not Connected</div>
              <button on:click={onConnectClick}>connect</button>
            </div>
          </div>
        {/if}
      {:else if mainMode === 'donation'}
        <DonationPage />
      {:else if mainMode === 'photo'}
        <PhotoPage />
      {:else if mainMode === 'memo'}
        <MemoPage />
      {/if}
    </div>
  </CollapsedContentView>
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar
      on:photoclick={onPhotoClick}
      on:chatclick={onChatClick}
      on:memoclick={onMemoClick}
      on:donationclick={onDonationClick}
    />
  </div>
</div>

<PopupContentLayer />
<ModalLayer />
<ImagePopupLayer />

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
    background: var(--primary-background-color);
    box-shadow: var(--primary-box-shadow);
  }

  .main-section {
    position: absolute;
    left: 0;
    top: $top-bar-height;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100% - #{$top-bar-height});
    background-color: var(--primary-background-color);

    .bottom-section {
      width: 100%;
      height: 100%;
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

  .error-page {
    width: 100%;
    height: 100%;
    display: flex;
    color: var(--primary-foreground-color);
    align-items: center;

    .container {
      width: 100%;
      text-align: center;
    }
  }
</style>
