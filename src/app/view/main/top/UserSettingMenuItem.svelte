<script lang="ts">
  import type { ModalType } from '../../../model/window/ModalType';
  import { WindowService } from '../../../model/window/WindowService';
  import { ProfileService } from '../../../service/ProfileService';
  import SettingMenuItem from './SettingMenuItem.svelte';

  let profileIcon = '';
  let nickname = '';

  ProfileService.profileIcon.subscribe((icon) => (profileIcon = icon));
  ProfileService.nickname.subscribe((n) => (nickname = n));

  const openModal = (modal: ModalType) => {
    WindowService.openModal(modal);
  };
</script>

<SettingMenuItem hoverable={false}>
  <svelte:fragment slot="body">
    <div class="u-info">
      <img class="profile" src={profileIcon} alt="프로필" />
      <span class="u-name">
        <p class="name">{nickname}</p>
      </span>
      <button on:click={(_) => openModal('profile')}>
        <i class="fas fa-cog" />
      </button>
    </div>
  </svelte:fragment>
</SettingMenuItem>

<style lang="scss">
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
</style>
