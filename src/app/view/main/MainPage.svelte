<script lang="ts">
  import { onMount } from 'svelte';

  import { get } from 'svelte/store';

  import { ChatNetworkService } from '../../model/network/ChatNetworkService';
  import { WindowService } from '../../model/window/WindowService';
  import ChatPage from '../chat/ChatPage.svelte';
  import SiteSettingModal from '../setting/SiteSettingModal.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  export let privateKey: string;

  let sideBarVisible = get(WindowService.sideBarShow);
  let dividerPos = 300;
  let isMoveMode = false;
  let windowInnerWidth: number;
  let siteSettingModalShow = get(WindowService.siteSettingModalShow);

  ChatNetworkService.init(privateKey);
  WindowService.sideBarShow.subscribe((v) => (sideBarVisible = v));
  WindowService.siteSettingModalShow.subscribe(
    (v) => (siteSettingModalShow = v)
  );

  $: isLeftDivider = dividerPos < windowInnerWidth / 2;
  $: chatWidth = isLeftDivider ? dividerPos : windowInnerWidth - dividerPos;
  $: chatLeft = isLeftDivider ? '0' : 'auto';
  $: chatRight = isLeftDivider ? 'auto' : '0';

  const parsePosition = (position: number): number => {
    const minSize = 300;
    const minX = minSize;
    const maxX = windowInnerWidth - minSize;
    const max = (pos: number) => (pos > minX ? pos : minX);
    const min = (pos: number) => (pos < maxX ? pos : maxX);
    return min(max(position));
  };

  const onDividerMove = (e: MouseEvent) => {
    if (isMoveMode) {
      dividerPos = parsePosition(e.clientX);
    }
  };
</script>

<div class="main-section">
  <div
    class="chat-section"
    style="left: {chatLeft}; right: {chatRight}; width: {chatWidth}px;"
  >
    <ChatPage />
  </div>
  <div class="side-bar" class:show={sideBarVisible}>
    <SideBar />
  </div>
  <div
    class="divider"
    style="left: {dividerPos}px"
    on:mousedown={(_) => (isMoveMode = true)}
    on:mousemove={onDividerMove}
    on:mouseup={(_) => (isMoveMode = false)}
    class:active={isMoveMode}
  />
</div>
<div class="top-bar"><TopBar /></div>

{#if siteSettingModalShow}
  <SiteSettingModal />
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
      position: absolute;
      top: 0;
      right: 0;
      width: $default-chat-width;
      height: 100%;
      background: #2a2f38;
      box-shadow: 2px 0px 6px 3px rgb(0 0 0 / 20%),
        2px 0px 6px 3px rgb(0 0 0 / 20%), 2px 0px 6px 3px rgb(0 0 0 / 20%);
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

  .divider {
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    cursor: col-resize;

    &.active {
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      transform: none;
      -webkit-transform: none;
    }
  }
</style>
