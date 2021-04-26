<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import SettingMenu from './SettingMenu.svelte';

  const dispatch = createEventDispatcher();
  const dispatchMenuClick = () => dispatch('menuclick');
  const onSettingMenuClick = () => {
    settingMenuActivated = !settingMenuActivated;
  };

  let settingMenuActivated = false;
  $: settingMenuActiveClass = settingMenuActivated ? 'active' : 'deactive';
</script>

<nav>
  <div class="part">
    <button on:click={dispatchMenuClick}>
      <i class="material-icons">menu</i>
    </button>
    <img class="logo" src="/assets/image/main/main-logo-30.png" alt="logo" />
  </div>
  <div class="part right">
    <button>
      <i class="material-icons">notifications</i>
      <div>
        <!-- {{ this.getUnreadNotificationCount() }} -->
      </div>
    </button>
    <button on:click={onSettingMenuClick}>
      <img
        class="profile"
        src="https://i.imgur.com/tXiHAIc.gif"
        alt="profile"
      />
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
      margin: 5px;
      padding: 0;
      color: #616161;
      background-color: #212121;

      &:hover {
        background-color: #313131;
      }

      &:active {
        background-color: #313131;
      }
    }

    button.alert-btn {
      position: relative;
      width: $icon-size;
      height: $icon-size;
      margin: 5px;
      color: #757575;

      // 드래그 방지
      user-select: none;

      i {
        font-size: 24px;
        padding: 8px;
        margin-right: 10px;
      }

      div {
        position: absolute;
        right: 0px;
        bottom: 0px;
        font-size: 12px;
        width: 18px;
        height: 18px;
        border-radius: 15px;
        text-align: center;
        line-height: 18px;
        background: #ec407a;
        color: white;
      }

      &:hover {
        color: #ec407a;
      }

      &.active {
        color: #c2185b;
      }
    }
  }

  div.part.right {
    justify-content: flex-end;
  }

  img.logo {
    width: 114px;
    height: 30px;
    cursor: pointer;
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
    width: 220px;
    height: auto;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    transition: transform 0.25s ease-in-out;

    &.active {
      transform: translateX(0);
    }

    &.deactive {
      transform: translateX(100%);
    }
  }

  @media screen and (max-width: 768px) {
    notification-list {
      width: 100%;
      right: 0px;
    }
  }
</style>
