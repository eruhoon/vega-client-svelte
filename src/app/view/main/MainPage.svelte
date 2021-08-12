<script lang="ts">
  import { SocketChatCommand } from '../../model/socket/command/SocketChatCommand';
  import { SocketLoginCommand } from '../../model/socket/command/SocketLoginCommand';
  import { WebSocketModel } from '../../model/socket/websocket/WebSocketModel';
  import { MyStatus } from '../../model/status/MyStatus';
  import ChatPage from '../chat/ChatPage.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  let sideBarVisible = false;

  const socket = new WebSocketModel();
  const loginCommand = new SocketLoginCommand(socket);
  const chatCommand = new SocketChatCommand(socket);
  socket.setOnOpen(() => {
    loginCommand.execute(MyStatus.privateKey);
  });

  const onMenuClick = () => {
    sideBarVisible = !sideBarVisible;
  };
</script>

<div class="main-section">
  <div class="chat-list-view"><ChatPage /></div>
  <div class="side-bar">
    <SideBar visible={sideBarVisible} />
  </div>
</div>
<div class="top-bar">
  <TopBar on:menuclick={onMenuClick} />
</div>

<style lang="scss">
  $top-bar-height: 50px;
  $side-bar-width: 250px;
  $default-chat-width: 300px;

  .top-bar {
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
