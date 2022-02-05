<script lang="ts">
  import type { User } from '../../../model/user/User';
  import { ChatNetworkService } from '../../../service/ChatNetworkService';
  import ChatUserEntry from './ChatUserEntry.svelte';

  let users: User[] = [];

  ChatNetworkService.applyUsersEvent.subscribe((it) => (users = it));
</script>

<div class="chat-user-list">
  <div class="cu-list-title">
    <h4>채팅 접속자</h4>
    <span>
      <i class="fas fa-user-circle" />
      <p>{users.length}명</p>
    </span>
  </div>
  <div class="cu-entry">
    {#each users as { hash, icon, nickname, computer, mobile }}
      <ChatUserEntry
        {hash}
        {icon}
        {nickname}
        isComputer={computer}
        isMobile={mobile}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  $title-container-height: 35px;

  .chat-user-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: var(--primary-background-color);
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: var(--primary-foreground-color);
  }

  .cu-list-title {
    width: 100%;
    height: $title-container-height;
    background-color: var(--primary-hoverground-color);

    * {
      margin: 0%;
      padding: 0%;
    }
    h4 {
      width: 45%;
      height: auto;
      padding: 6px;
      float: left;
      font-weight: normal;
      line-height: 23px;
    }
    span {
      width: 45%;
      height: 23px;
      padding: 6px;
      display: block;
      float: right;
      & > * {
        width: auto;
        height: auto;
        display: inline-block;
      }
      & > p {
        float: right;
        padding: 2px 5px;
        font-size: 12px;
        line-height: 20px;
      }
      & > i {
        float: right;
        font-size: 20px;
        padding: 2px;
      }
    }
  }

  .cu-entry {
    width: 100%;
    height: calc(100% - #{$title-container-height});
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
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

  // 스크롤
  .cu-entry {
    scrollbar-color: var(--primary-activeground-color)
      var(--primary-background-color);
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: var(--primary-background-color);
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-track {
      background: var(--primary-background-color);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary-activeground-color);
    }
  }
</style>
