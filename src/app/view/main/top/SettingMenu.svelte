<div class="setting-list">
  <div class="item button-attached">
    <div class="u-info">
      <img class="profile" src="https://i.imgur.com/tXiHAIc.gif" alt="프로필" />
      <span class="u-name">
        <p class="lv">Lv. 10</p>
        <p class="name">시구르나</p>
      </span>
      <button>
        <i class="material-icons">settings</i>
      </button>
    </div>
  </div>
  <div class="item hover image-attached">
    <h5>방송설정</h5>
    <img
      src="https://mycast.xyz/assets/image/stream/mycast.png"
      alt="방송배경"
    />
  </div>
  <div class="item hover">
    <h5>옵션</h5>
  </div>
  <div class="item theme">
    <h5>테마</h5>
    <ul>
      <li>테마명</li>
    </ul>
  </div>
  <div class="item hover">
    <h5>모바일 모드</h5>
  </div>
  <div class="logout">
    <h5>로그아웃</h5>
  </div>
</div>

<style lang="scss">
  .setting-list {
    width: 100%;
    height: 100%;
    position: relative;

    border-radius: 0 0 5px 5px;
    background: #212121;
  }

  .setting-list > .item {
    display: flex;
    justify-items: center;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #616161;
    min-height: 45px;
    // padding: 15px 10px;

    h5 {
      margin: 0%;
      padding: 0%;
      color: #eeeeee;
      font-weight: 800;
    }

    i {
      font-family: 'Material Icons';
      position: absolute;
      top: 12px;
      right: 15px;
      color: #eeeeee;
      font-size: 18px;
      line-height: 20px;
    }

    p {
      margin: 0%;
      padding: 0%;
    }

    &:last-child {
      border-bottom: 0px;
    }

    &.button-attached {
      button {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }

    &.image-attached {
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        border-left: 1px solid #424242;
      }
    }

    &.hover:hover {
      background-color: #616161;
    }

    &.hover {
      cursor: pointer;
    }
  }

  // 유저 안내 및 레벨 안내
  .u-info {
    padding: 0px;
    height: 40px;
    position: relative;

    img {
      width: 40px;
      height: 40px;
      border-radius: 22px;
      margin-right: 10px;
      float: left;
    }

    .u-name {
      width: 150px;
      float: left;
      height: 32px;
      padding-top: 4px;

      .lv {
        font-size: 10px;
      }
    }

    p {
      width: 90%;
      color: #eeeeee;
    }

    a {
      border-radius: 50%;

      i {
        position: absolute;
        top: 11px;
        right: 0px;
        color: #eeeeee;
        font-size: 24px;
      }

      &:hover {
        i {
          color: #ec407a;
        }
      }
    }
  }

  // 알람 부분 scss 설정
  .alarm {
    width: 91%;
    height: auto;

    ul {
      width: 100%;
      margin: 0%;
      padding: 0%;
      padding-top: 10px;

      li {
        width: calc(45% - 10px);
        display: inline-block;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 12px;
        color: #eeeeee;
        border-radius: 3px;
        padding-left: 10px;
        cursor: pointer;

        &:hover {
          background-color: #616161;
        }

        &:nth-child(even) {
          margin-left: 10px;
        }

        &.select {
          color: #f50057;
        }

        &.select:hover {
          color: #f50057;
        }
      }
    }
  }

  // 테마 부분 scss 설정
  .theme {
    width: 91%;
    height: auto;

    ul {
      width: 100%;
      margin: 0%;
      padding: 0%;
      padding-top: 10px;

      li {
        width: calc(30% - 10px);
        display: inline-block;
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 12px;
        color: #eeeeee;
        border-radius: 3px;
        padding-left: 10px;
        cursor: pointer;

        &:hover {
          background-color: #616161;
        }

        &:last-child {
          margin-left: 10px;
        }

        &.select {
          color: #f50057;
        }

        &.select:hover {
          color: #f50057;
        }
      }
    }
  }

  // 로그아웃 부분
  .user-setting > .logout {
    h5 {
      color: #f50057;
    }

    &:hover {
      background-color: #ec407a;

      h5 {
        color: #ffffff;
      }
    }

    &:active {
      background-color: #c2185b;

      h5 {
        color: #ffffff;
      }
    }
  }
</style>
