<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';
  import { ProfileService } from '../../../service/ProfileService';
  import SettingMenu from './SettingMenu.svelte';

  const onSettingMenuClick = () => {
    settingMenuActivated = !settingMenuActivated;
  };

  let settingMenuActivated = false;
  let profileIcon = '';
  $: settingMenuActiveClass = settingMenuActivated ? 'active' : 'deactive';

  ProfileService.profileIcon.subscribe((icon) => {
    profileIcon = icon;
  });

  const toggleSideBarShow = () => {
    WindowService.sideBarShow.update((v) => !v);
  };
</script>

<nav>
  <div class="part">
    <button class="menu-btn" on:click={toggleSideBarShow}>
      <img class="logo" src="/assets/image/main/main-logo-60.png" alt="logo" />
    </button>
  </div>
  <div class="part right">
    <button class="alert-btn">
      <i class="fas fa-bell" />
      <div>
        <!-- {{ this.getUnreadNotificationCount() }} -->
      </div>
    </button>
    <button on:click={onSettingMenuClick}>
      <img class="profile" src={profileIcon} alt="profile" />
    </button>
  </div>
</nav>

<div class={'setting-menu ' + settingMenuActiveClass}><SettingMenu /></div>

<style lang="scss">
  $icon-size: 40px;

  nav {
    display: flex;
    width: 100%;
    height: 100%;
  }

  div.part {
    display: flex;
    width: 50%;
    padding: 5px;
    align-items: center;

    button {
      width: $icon-size;
      height: $icon-size;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 0;
      padding: 0;
      color: #ffffff;
      background-color: #2a2f38;

      &:hover {
        background-color: #1f2226;
      }

      &:active {
        background-color: #1f2226;
      }
      &.alert-btn {
        margin-right: 10px;

        i {
          font-size: 20px;
        }
      }
      &.menu-btn {
        margin-left: 10px;
      }
    }
  }

  div.part.right {
    justify-content: flex-end;
  }

  img.logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 20px;

    // 로고 레이어 80
    z-index: 80;
  }

  img.profile {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  .setting-menu {
    position: absolute;
    top: 50px;
    right: 0;
    width: 250px;
    height: auto;
    overflow: hidden;
    box-shadow: 0px 2px 10px 6px rgb(0 0 0 / 20%),
      0px 2px 0px 0px rgb(0 0 0 / 14%), 0px 0px 2px 0px rgb(0 0 0 / 12%);
    transition: transform 0.25s ease-in-out;

    &.active {
      transform: translateX(0);
    }

    &.deactive {
      transform: translateX(100%);
    }
  }

  @media screen and (max-width: 768px) {
  }
</style>
