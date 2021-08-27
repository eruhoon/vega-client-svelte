<script lang="ts">
  import { SessionService } from '../../../model/session/SessionService';
  import type { ModalType } from '../../../model/window/ModalType';
  import { WindowService } from '../../../model/window/WindowService';
  import { ProfileService } from '../../../service/ProfileService';

  let profileIcon = '';
  let nickname = '';

  ProfileService.profileIcon.subscribe((icon) => (profileIcon = icon));
  ProfileService.nickname.subscribe((n) => (nickname = n));

  const logout = () => {
    SessionService.setPrivateKey('');
  };

  const openModal = (modal: ModalType) => {
    WindowService.openModal(modal);
  };
</script>

<div class="setting-list">
  <div class="item button-attached">
    <div class="u-info">
      <img class="profile" src={profileIcon} alt="프로필" />
      <span class="u-name">
        <p class="name">{nickname}</p>
      </span>
      <button on:click={(_) => openModal('profile')}>
        <i class="fas fa-cog" />
      </button>
    </div>
  </div>
  <div class="item hover image-attached" on:click={(_) => openModal('stream')}>
    <div class="icon">
      <i class="fas fa-podcast" />
    </div>
    <p>방송 설정</p>
    <img
      src="https://mycast.xyz/assets/image/stream/mycast.png"
      alt="방송배경"
    />
  </div>
  <div class="item hover" on:click={(_) => openModal('site')}>
    <div class="icon">
      <i class="fas fa-tools" />
    </div>
    <p>사이트 설정</p>
  </div>
  <div class="item hover" on:click={(_) => openModal('chat-widget')}>
    <div class="icon">
      <i class="far fa-comment" />
    </div>
    <p>채팅위젯 설정</p>
  </div>
  <div class="item hover" on:click={(_) => openModal('donation')}>
    <div class="icon">
      <i class="fas fa-donate" />
    </div>
    <p>후원 설정</p>
  </div>
  <div class="item theme">
    <div class="icon">
      <i class="fas fa-adjust" />
    </div>
    <p>테마</p>
    <label class="switch">
      <input type="checkbox" />
      <span class="slider round" />
    </label>
  </div>
  <div class="item hover">
    <div class="icon">
      <i class="fas fa-mobile" />
    </div>
    <p>모바일 모드</p>
  </div>
  <div class="item hover">
    <div class="icon">
      <i class="fas fa-clipboard-list" />
    </div>
    <p>후원리스트</p>
  </div>
  <div class="logout" on:click={logout}>
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

    p {
      margin: 0%;
      padding: 0%;
      color: #ffffff;
      padding: 14px 10px;
      padding-right: 0px;
    }

    .icon {
      width: 32px;
      height: 46px;
      color: #ffffff;
      margin: 0%;
      text-align: center;
      i {
        font-size: 20px;
        padding: 13px 7px;
      }
    }

    &:last-child {
      border-bottom: 0px;
    }

    &.button-attached {
      button {
        width: 50px;
        height: 50px;
        background: transparent;
        border: none;
        cursor: pointer;
        margin: 10px 0px;

        position: absolute;
        top: 0;
        right: 0;
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
    width: 100%;
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

    i {
      position: absolute;
      top: 12px;
      right: 15px;
      color: #ffffff;
      font-size: 24px;
      line-height: 20px;
    }

    .u-name {
      width: calc(100% - 100px);
      float: left;
      height: 32px;
      padding-top: 9px;

      /*.lv {
        font-size: 10px;
      }*/
      .name {
        font-family: 'ChosunBg';
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

    p {
      width: 75%;
      color: #ffffff;
    }
  }

  // 테마 부분 scss 설정
  .theme {
    .switch {
      width: 50px;
      height: 30px;
      position: relative;
      display: inline-block;
      margin: 8px 5px 8px auto;

      input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1c2027;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 22px;
        width: 22px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
      input:checked + .slider {
        background-color: #ebebeb;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px #ebebeb;
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
      }
      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
      }
      .slider.round:before {
        border-radius: 50%;
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
