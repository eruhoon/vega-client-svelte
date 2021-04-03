<div class="chat-interface">
  <div class="input-sticker">
    <!-- left section -->
    <!-- user list -->
    <div class="sticker-section">
      <div><i class="material-icons">assignment_ind</i></div>
      <!-- clear chat -->
      <div><i class="material-icons">format_clear</i></div>
      <div><i class="material-icons">vertical_align_bottom</i></div>
    </div>

    <!-- right section -->
    <!-- imoticon -->
    <div class="sticker-section right">
      <div><i class="material-icons">warning</i></div>
      <div><i class="material-icons">insert_emoticon</i></div>
      <div><i class="material-icons">photo</i></div>
    </div>
  </div>
  <input type="text" class="input-box" />
  <input type="file" accept="image/*" style="display: none" />
</div>

<style lang="scss">
  .chat-interface {
    position: relative;
    width: 100%;
    height: 100%;
    // 좌우측 채팅 부분에 대한 border의 1px 처리로
    margin-left: -1px;
    background-color: #424242;
  }

  // 스티커 & 채팅 클리어 & 채팅 인원 안내
  .input-sticker {
    display: block;
    width: 100%;
    height: 30px;
    background-color: #424242;
    border-top: 1px solid #616161;
    border-bottom: 1px solid #616161;

    div {
      width: auto;
      height: auto;
      display: inline-block;
      color: #eeeeee;
      user-select: none;

      i {
        font-size: 20px;
        padding: 6px;
      }

      &.active {
        color: #c2185b;
      }

      &.hidden {
        opacity: 0;
      }

      &:hover {
        color: #ec407a;
      }
    }

    a:first-child {
      margin-left: 5px;
    }

    & > .sticker-section {
      display: inline-block;
      &.right {
        float: right;
      }
    }
  }

  .input-box {
    width: calc(100% - 20px);
    height: 30px;
    padding: 10px;

    background: #424242;
    font-size: 14px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    outline: none;
  }
</style>
