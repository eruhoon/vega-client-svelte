<script lang="ts">
  import { get } from 'svelte/store';
  import { ChatNetworkService } from '../../model/network/ChatNetworkService';
  import { CheckerNetworkService } from '../../model/network/checker/CheckerNetworkService';
  import { OptionService } from '../../model/option/OptionService';
  import { VegaStreamProfileLoader } from '../../model/profile/VegaStreamProfileLoader';
  import { WindowService } from '../../model/window/WindowService';
  import { ProfileService } from '../../service/ProfileService';
  import ChatPage from '../chat/ChatPage.svelte';
  import ChatWidgetSettingModal from '../setting/ChatWidgetSettingModal.svelte';
  import DonationSettingModal from '../setting/DonationSettingModal.svelte';
  import ProfileSettingModal from '../setting/ProfileSettingModal.svelte';
  import SiteSettingModal from '../setting/SiteSettingModal.svelte';
  import StreamSettingModal from '../setting/StreamSettingModal.svelte';
  import StreamList from '../stream/StreamList.svelte';
  import IframeContentView from './content/IframeContentView.svelte';
  import ImageViewerPopup from './popup/ImageViewerPopup.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';
  import VerticalSplitView from './VerticalSplitView.svelte';

  export let privateKey: string;

  let sideBarVisible = get(WindowService.sideBarShow);
  let isCheckerBarEnable = get(OptionService.enableCheckerBar);
  let windowInnerWidth: number;
  let modal = null;
  let currentImage: string;
  let content: string | null = null;

  ChatNetworkService.init(privateKey);
  CheckerNetworkService.init(privateKey);
  WindowService.sideBarShow.subscribe((v) => (sideBarVisible = v));
  WindowService.modal.subscribe((m) => {
    switch (m) {
      case 'profile':
        modal = ProfileSettingModal;
        break;
      case 'site':
        modal = SiteSettingModal;
        break;
      case 'stream':
        modal = StreamSettingModal;
        break;
      case 'chat-widget':
        modal = ChatWidgetSettingModal;
        break;
      case 'donation':
        modal = DonationSettingModal;
        break;
      default:
        modal = null;
    }
  });
  WindowService.currentImage.subscribe((v) => (currentImage = v));
  WindowService.content.subscribe((v) => (content = v));
  OptionService.enableCheckerBar.subscribe((v) => (isCheckerBarEnable = v));

  new VegaStreamProfileLoader(privateKey).load().then((streamProfile) => {
    ProfileService.platform.set(streamProfile.platform);
    ProfileService.localId.set(streamProfile.localId);
    ProfileService.afreecaId.set(streamProfile.afreecaId);
    ProfileService.twitchId.set(streamProfile.twitchId);
  });
</script>

<div class="main-section">
  <VerticalSplitView minSideSize={300}>
    <div slot="side" class="chat-section">
      <ChatPage />
    </div>
    <div
      slot="main"
      class="content-section"
      class:checker-attached={isCheckerBarEnable}
    >
      <div class="content">
        {#if content}
          <IframeContentView src={content} />
        {/if}
      </div>
      <div class="stream-list">
        <StreamList />
      </div>
    </div>
  </VerticalSplitView>
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar />
  </div>
</div>
<div class="top-bar"><TopBar /></div>

{#if modal}
  <div class="modal-layer">
    <svelte:component this={modal} />
  </div>
{/if}

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
      $stream-list-height: 80px;
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

      .stream-list {
        display: none;
        position: absolute;
        bottom: 0;
        height: 0;
        width: 100%;
      }

      &.checker-attached {
        .content {
          height: calc(100% - #{$stream-list-height});
        }
        .stream-list {
          display: block;
          height: $stream-list-height;
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

      &.show {
        transform: none;
      }
    }
  }

  .modal-layer {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  .popup-layer {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>
