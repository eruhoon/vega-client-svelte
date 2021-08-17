<script lang="ts">
  import type { User } from "../../../model/user/User";
  import { UserListService } from "../../../service/UserListService";
  import ChatUserEntry from "./ChatUserEntry.svelte";

  let users: User[] = [];

  UserListService.users.subscribe((u) => (users = u));
</script>

<div class="chat-user-list">
  <div class="cu-list-title">
    <h4>채팅 접속자</h4>
    <span>
      <i class="material-icons"> person_pin </i>
      <p>{users.length}명</p>
    </span>
  </div>
  <div class="cu-entry">
    {#each users as { icon, nickname, computer, mobile }}
      <ChatUserEntry
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
    background: #2a2f38;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #ffffff;
  }

  .cu-list-title {
    width: 100%;
    height: $title-container-height;
    background-color: #1f2226;

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

  .chat-user-entry {
    display: block;
    width: calc(100% - 10px);
    height: 30px;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
  }
</style>
