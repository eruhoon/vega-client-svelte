<script lang="ts">
  import { onMount } from 'svelte';
  import { EmojiService } from '../../../service/EmojiService';

  import { SessionService } from '../../../service/SessionService';
  import { SocketService } from '../../../service/SocketService';
  import { WindowService } from '../../../service/WindowService';

  let recentEmojies: string[] = [];
  const emojiStream: string =
    '😒 😊 😂 🤣 ❤ 😍 👌 😘 🤷‍♂️ 🤷‍♀️ 🤦‍♂️ 🤦‍♀️ 🙌 👍 😁 💕 ✌ 🤞 😉 😎 🎶 😢 💖 😜 🤳 🎂 🎉 🌹 💋 👏 ✔ 👀 😃 ✨ 😆 🤔 🤢 🎁';
  const emojies: string[] = emojiStream.split(' ');
  const sendEmoji = (emoji: string): void => {
    const privateKey = SessionService.getPrivateKey();
    SocketService.chat?.execute(privateKey, 'chat', emoji);
  };

  onMount(() => {
    EmojiService.recents.subscribe((it) => (recentEmojies = it));
  });

  function onEmojiClick(emoji: string) {
    sendEmoji(emoji);
    EmojiService.registerRecent(emoji);
    WindowService.closeEmojiAttachView();
  }

  function onEmojiContextMenu(emoji: string) {
    EmojiService.appendEmoji(emoji);
  }
</script>

<div class="container">
  <div class="title">
    <h4>이모티콘</h4>
  </div>
  <div class="emoji-list">
    {#if recentEmojies.length > 0}
      <h5>Recent</h5>
      <div class="def-emoji-list">
        {#each recentEmojies as emoji}
          <span
            on:click={(_) => onEmojiClick(emoji)}
            on:contextmenu|preventDefault={(_) => onEmojiContextMenu(emoji)}
            >{emoji}</span
          >
        {/each}
      </div>
      <hr />
    {/if}
    <div class="def-emoji-list">
      {#each emojies as emoji}
        <span
          on:click={(_) => onEmojiClick(emoji)}
          on:contextmenu|preventDefault={(_) => onEmojiContextMenu(emoji)}
          >{emoji}</span
        >
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  $title-container-height: 35px;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .title {
      width: 100%;
      height: $title-container-height;

      * {
        margin: 0%;
        padding: 0%;
      }
      h4 {
        width: 45%;
        height: auto;
        padding: 6px;
        float: left;
        line-height: 23px;
      }
    }
    .emoji-list {
      width: 100%;
      height: calc(100% - #{$title-container-height});
      overflow-y: scroll;
      scrollbar-width: thin;
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border: 3px solid;
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
      .def-emoji-list {
        width: 100%;
        height: auto;
        padding: 10px 0px;
        // flex 설정
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        align-items: center;
        span {
          width: 30px;
          height: 30px;
          padding: 10px;
          font-size: 24px;
          display: inline-block;
          text-align: center;
          border-radius: 3px;
          overflow: hidden;
          cursor: pointer;
        }
      }
    }
  }

  // 컬러 스크롤링 컬러셋
  .container {
    background: var(--primary-background-color);
    color: var(--primary-foreground-color);

    .title {
      background-color: var(--primary-hoverground-color);
    }
    .emoji-list {
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
      .def-emoji-list {
        background-color: var(--primary-background-color);
        span {
          &:hover {
            background: var(--primary-activeground-color);
          }
          &:active {
            background: var(--primary-activeground-color);
          }
        }
      }
    }
  }
</style>
