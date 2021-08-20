<script lang="ts">
  const emojiStream: string =
    '😒 😊 😂 🤣 ❤ 😍 👌 😘 🤷‍♂️ 🤷‍♀️ 🤦‍♂️ 🤦‍♀️ 🙌 👍 😁 💕 ✌ 🤞 😉 😎 🎶 😢 💖 😜 🤳 🎂 🎉 🌹 💋 👏 ✔ 👀 😃 ✨ 😆 🤔 🤢 🎁';
  const emojies: string[] = emojiStream.split(' ');
  const sendEmoji = (emoji: string): void => {};
</script>

<div class="container">
  <div class="title">
    <h4>이모티콘</h4>
  </div>
  <div class="emoji-list">
    <div class="def-emoji-list">
      {#each emojies as emoji}
        <span on:click={(e) => sendEmoji(emoji)}>{emoji}</span>
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
        }
      }
    }
  }

  // 컬러 스크롤링 컬러셋
  .container {
    background: #2a2f38;
    color: #ffffff;

    .title {
      background-color: #1f2226;
    }
    .emoji-list {
      scrollbar-color: #ff4081 #2a2f38;
      scrollbar-width: thin;
      &::-webkit-scrollbar {
        border-color: #2a2f38;
      }
      &::-webkit-scrollbar-button:start:decrement,
      &::-webkit-scrollbar-button:end:increment {
        background: #2a2f38;
      }
      &::-webkit-scrollbar-track {
        background: #2a2f38;
      }
      &::-webkit-scrollbar-thumb {
        background: #ff4081;
      }
      .def-emoji-list {
        background-color: #2a2f38;
        span {
          &:hover {
            background: #ff4081;
          }
          &:active {
            background: #ff4081;
          }
        }
      }
    }
  }
</style>
