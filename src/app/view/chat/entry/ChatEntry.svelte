<script lang="ts">
  import type { ChatMessage } from '../../../model/chat/ChatMessage';
  import { ChatService } from '../../../model/chat/ChatService';
  import { SessionService } from '../../../model/session/SessionService';
  import { SocketService } from '../../../model/socket/SocketService';
  import type { ChatEntryProp } from './ChatEntryProp';
  import ChatMessageEntry from './ChatMessageEntry.svelte';

  export let prop: ChatEntryProp = {
    icon: '',
    nickname: 'untitled',
    senderType: 'PC',
    messages: [],
  };
  export let messages: ChatMessage[] = [];

  const sendIcon = () => {
    const privateKey = SessionService.getPrivateKey();
    SocketService.chat?.execute(privateKey, 'chat', prop.icon);
    ChatService.requestScrollDown(true);
  };
</script>

<div class="chat-entry">
  <div class="icon-section">
    <div class="icon">
      <img
        src={prop.icon}
        alt="프로필"
        on:contextmenu|preventDefault={sendIcon}
      />
    </div>
  </div>
  <div class="message-section">
    <div class="header">
      <div class="nickname">
        <span>{prop.nickname}</span>
        <span class="type">
          {#if prop.senderType === 'MOBILE'}
            <i class="fas fa-mobile" />
          {:else if prop.senderType === 'BOT'}
            <i class="fas fa-bug" />
          {/if}
        </span>
      </div>
    </div>
    {#each messages as message}
      <div class="chat-message-entry">
        <ChatMessageEntry {message} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .chat-entry {
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #1c2027;
    padding-bottom: 2px;
    &:last-child {
      padding-bottom: 0px;
      border-bottom: 0px;
    }
  }

  .icon-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 5px 0px;

    .icon {
      width: 44px;
      height: 44px;
      object-fit: cover;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #333943;
      }
    }
  }

  .message-section {
    display: block;
    width: calc(100% - 60px);
    min-height: 50px;
    padding: 5px;
    padding-top: 8px;

    .header {
      width: 100%;
      height: 20px;
      padding-bottom: 5px;
      display: flex;

      // 공통 구문
      & > div {
        flex: 0;
      }

      .nickname {
        width: calc(100% - 100px);
        font-size: 14px;
        line-height: 20px;
        font-weight: 300;
        color: #ffffff;
        padding-top: 0px;
        flex: 1;

        span {
          padding-top: 2px;
          color: #ffffff;
        }

        span.type {
          margin-left: 2px;

          i {
            font-size: 10px;
          }
        }
      }
    }
  }
</style>
