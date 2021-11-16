<script lang="ts">
  import { get } from 'svelte/store';
  import { OptionService } from '../../model/option/OptionService';
  import { WindowService } from '../../model/window/WindowService';
  import { ChatNetworkService } from '../../service/ChatNetworkService';
  import { CheckerNetworkService } from '../../service/CheckerNetworkService';
  import { ProfileService } from '../../service/ProfileService';
  import ChatPage from '../chat/ChatPage.svelte';
  import ModalLayer from '../modal/ModalLayer.svelte';
  import PopupContentLayer from '../popup/PopupContentLayer.svelte';
  import StreamList from '../stream/StreamList.svelte';
  import ContentView from './content/ContentView.svelte';
  import ImageViewerPopup from './popup/ImageViewerPopup.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';
  import VerticalSplitView from './VerticalSplitView.svelte';

  export let privateKey: string;

  let sideBarVisible = get(WindowService.sideBarShow);
  let isCheckerBarEnable = get(OptionService.enableCheckerBar);
  let windowInnerWidth: number;
  let currentImage: string;
  let chatViewOffset = get(OptionService.chatViewOffset);

  ChatNetworkService.init(privateKey);
  CheckerNetworkService.init(privateKey);
  WindowService.sideBarShow.subscribe((v) => (sideBarVisible = v));
  WindowService.currentImage.subscribe((v) => (currentImage = v));
  OptionService.enableCheckerBar.subscribe((v) => (isCheckerBarEnable = v));

  ProfileService.loadStreamProfile(privateKey);

  function onOffsetChanged(e: CustomEvent<number>) {
    OptionService.setChatViewOffset(e.detail);
  }

  function onPhotoClick() {
    WindowService.openContent({ type: 'photo' });
    WindowService.closeSideBar();
  }

  function onMemoClick() {
    WindowService.openContent({ type: 'memo' });
    WindowService.closeSideBar();
  }
</script>

<div class="main-section">
  <VerticalSplitView
    minSideSize={300}
    offset={chatViewOffset}
    on:offsetchange={onOffsetChanged}
  >
    <div slot="side" class="chat-section">
      <ChatPage />
    </div>
    <div
      slot="main"
      class="content-section"
      class:checker-attached={isCheckerBarEnable}
    >
      <div class="content"><ContentView /></div>
      <div class="bottom-bar"><StreamList /></div>
    </div>
  </VerticalSplitView>
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar
      chatEnabled={false}
      on:photoclick={onPhotoClick}
      on:memoclick={onMemoClick}
    />
  </div>
</div>
<div class="top-bar"><TopBar /></div>

<PopupContentLayer />
<ModalLayer />

{#if currentImage}
  <div class="popup-layer">
    <ImageViewerPopup src={currentImage} />
  </div>
{/if}

<svelte:window bind:innerWidth={windowInnerWidth} />

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

    .chat-section {
      width: 100%;
      height: 100%;
      background: #2a2f38;
      box-shadow: 0 0 8px 0 rgb(0 0 0 / 40%), 0 0 15px 0 rgb(0 0 0 / 30%),
        0 0 20px 4px rgb(0 0 0 / 30%);
    }

    .content-section {
      $bottom-bar-height: 60px;
      position: absolute;
      width: 100%;
      height: 100%;
      background: #2a2f38;

      .content {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;
      }

      .bottom-bar {
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0px;
      }

      &.checker-attached {
        .content {
          height: calc(100% - #{$bottom-bar-height});
        }
        .bottom-bar {
          display: block;
          height: $bottom-bar-height;
        }
      }
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

  .popup-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 50;
  }
</style>
