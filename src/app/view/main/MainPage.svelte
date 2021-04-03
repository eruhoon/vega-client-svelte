<script lang="ts">
  import ChatPage from '../chat/ChatPage.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './TopBar.svelte';

  let sideBarVisible = false;

  const onMenuClick = () => {
    sideBarVisible = !sideBarVisible;
  };
</script>

<nav class="top-bar"><TopBar on:menuclick={onMenuClick} /></nav>
<div class="main-section">
  <div class="chat-list-view"><ChatPage /></div>
  <div class="side-bar">
    <SideBar visible={sideBarVisible} />
  </div>
</div>

<style lang="scss">
  $top-bar-height: 50px;
  $side-bar-width: 250px;
  $default-chat-width: 300px;

  nav.top-bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: $top-bar-height;
    margin: 0;
    background: #212121;
    border-bottom: 1px solid #424242;
  }

  .main-section {
    position: absolute;
    left: 0;
    top: $top-bar-height;
    display: block;
    width: 100%;
    height: calc(100% - #{$top-bar-height});

    .chat-list-view {
      position: absolute;
      top: 0;
      right: 0;
      width: $default-chat-width;
      height: 100%;
      background: #424242;
      border-right: 1px solid #616161;
      border-left: 1px solid #616161;
    }

    .side-bar {
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.2s ease-in-out;
      width: $side-bar-width;
      height: 100%;
    }
  }
</style>
