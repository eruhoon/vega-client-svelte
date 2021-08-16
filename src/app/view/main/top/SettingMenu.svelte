<script lang="ts">
  import { ProfileService } from "../../../service/ProfileService";

  let profileIcon = "";
  let nickname = "";

  ProfileService.profileIcon.subscribe((icon) => (profileIcon = icon));
  ProfileService.nickname.subscribe((n) => (nickname = n));
</script>

<div class="setting-list">
  <div class="item button-attached">
    <div class="u-info">
      <img class="profile" src={profileIcon} alt="프로필" />
      <span class="u-name">
        <p class="name">{nickname}</p>
      </span>
      <button>
        <i class="material-icons">settings</i>
      </button>
    </div>
  </div>
  <div class="item hover image-attached">
    <p>방송 설정</p>
    <img
      src="https://mycast.xyz/assets/image/stream/mycast.png"
      alt="방송배경"
    />
  </div>
  <div class="item hover">
    <p>사이트 설정</p>
  </div>
  <div class="item hover">
    <p>채팅위젯 설정</p>
  </div>
  <div class="item hover">
    <p>후원 설정</p>
  </div>
  <div class="item hover">
    <p>테마</p>
  </div>
  <div class="item hover">
    <p>모바일 모드</p>
  </div>
  <div class="item hover">
    <p>팝업처리</p>
  </div>
  <div class="logout">
    <h4>로그아웃</h4>
  </div>
</div>

<style lang="scss">
  .setting-list {
    width: 100%;
    height: 100%;
    position: relative;

    border-radius: 0 0 5px 5px;
    background: #2a2f38;
  }

  .setting-list > .item {
    display: flex;
    justify-items: center;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #1f2226;
    min-height: 45px;
    // padding: 15px 10px;

    p,
    h4 {
      margin: 0%;
      padding: 0%;
      color: #ffffff;
      padding: 14px 10px;
      padding-right: 0px;
    }

    i {
      font-family: "Material Icons";
      position: absolute;
      top: 12px;
      right: 15px;
      color: #ffffff;
      font-size: 24px;
      line-height: 20px;
    }

    &:last-child {
      border-bottom: 0px;
    }

    &.button-attached {
      button {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background: transparent;
        border: none;
        cursor: pointer;
        margin: 10px 0px;
      }
    }

    &.image-attached {
      img {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        border-left: 1px solid #1f2226;
      }
    }

    &.hover:hover {
      background-color: #1f2226;
    }

    &.hover {
      cursor: pointer;
    }
  }

  // 유저 안내 및 레벨 안내
  .u-info {
    padding: 10px;
    height: 50px;
    position: relative;

    img {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin-right: 10px;
      float: left;
      object-fit: cover;
    }

    .u-name {
      width: 170px;
      float: left;
      height: 32px;
      padding-top: 9px;

      .lv {
        font-size: 10px;
      }
      .name {
        font-family: "ChosunBg";
        color: #ffffff;
        font-size: 18px;
        padding: 0%;
        padding-top: 3px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    p,
    h4 {
      width: 75%;
      color: #ffffff;
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
  .logout {
    min-height: 45px;
    color: #ffffff;
    background-color: #ff4081;
    text-align: center;
    border-radius: 0px 0px 3px 3px;

    h4 {
      font-size: 18px;
      padding: 14px;
      font-weight: bolder;
    }
  }
</style>
