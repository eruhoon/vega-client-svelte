<script lang="ts">
  import { SocketChatCommand } from '../../model/socket/command/SocketChatCommand';
  import { SocketLoginCommand } from '../../model/socket/command/SocketLoginCommand';
  import { SocketService } from '../../model/socket/SocketService';
  import { WebSocketModel } from '../../model/socket/websocket/WebSocketModel';
  import { MyStatus } from '../../model/status/MyStatus';
  import { ProfileService } from '../../service/ProfileService';
  import { UserListService } from '../../service/UserListService';
  import ChatPage from '../chat/ChatPage.svelte';
  import SideBar from './side/SideBar.svelte';
  import TopBar from './top/TopBar.svelte';

  let sideBarVisible = false;

  const socket = new WebSocketModel();
  SocketService.chat = new SocketChatCommand(socket);
  SocketService.login = new SocketLoginCommand(socket);
  socket.setOnOpen(() => {
    SocketService.isConnected.set(true);
    SocketService.login?.execute(MyStatus.privateKey);
  });

  socket.onReceived((command) => {
    console.log(command);
    switch (command.commandType) {
      case 'applyMyStatus':
        ProfileService.profileIcon.set(command.response.icon);
        ProfileService.nickname.set(command.response.nickname);
        break;
      case 'applyCurrentUserList':
        UserListService.users.set(command.response);
        break;
    }
  });

  const onMenuClick = () => {
    sideBarVisible = !sideBarVisible;
  };
</script>

<div class="main-section">
  <div class="chat-list-view">
    <ChatPage />
  </div>
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

    .chat-list-view {
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
    }
  }
</style>
