<script lang="ts">
  import { SessionService } from '../../../model/session/SessionService';
  import type { ModalType } from '../../../model/window/ModalType';
  import { WindowService } from '../../../model/window/WindowService';
  import SettingMenuImage from './SettingMenuImage.svelte';
  import SettingMenuItem from './SettingMenuItem.svelte';
  import SettingSwitch from './SettingSwitch.svelte';
  import SettingUserInfo from './SettingUserInfo.svelte';

  const logout = () => {
    SessionService.setPrivateKey('');
  };

  const openModal = (modal: ModalType) => {
    WindowService.openModal(modal);
  };
</script>

<div class="setting-list">
  <SettingMenuItem hoverable={false}>
    <SettingUserInfo slot="body" />
  </SettingMenuItem>

  <SettingMenuItem menuClick={() => openModal('stream')}>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-podcast" />
      </div>
      <p>방송 설정</p>
      <SettingMenuImage />
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem menuClick={() => openModal('donation')}>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-tools" />
      </div>
      <p>사이트 설정</p>
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem menuClick={() => openModal('donation')}>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="far fa-comment" />
      </div>
      <p>채팅위젯 설정</p>
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem menuClick={() => openModal('donation')}>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-donate" />
      </div>
      <p>후원 설정</p>
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-adjust" />
      </div>
      <p>테마</p>
      <SettingSwitch />
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-mobile" />
      </div>
      <p>모바일 모드</p>
    </svelte:fragment>
  </SettingMenuItem>
  <SettingMenuItem>
    <svelte:fragment slot="body">
      <div class="icon">
        <i class="fas fa-clipboard-list" />
      </div>
      <p>후원리스트</p>
    </svelte:fragment>
  </SettingMenuItem>
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
