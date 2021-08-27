<script lang="ts">
  import { SessionService } from '../../model/session/SessionService';
  import { SocketService } from '../../model/socket/SocketService';
  import { WindowService } from '../../model/window/WindowService';
  import { ProfileService } from '../../service/ProfileService';
  import SettingModal from './SettingModal.svelte';
  import TextSettingInput from './stream/TextSettingInput.svelte';

  let nickname: string = '';
  let statusMessage: string = '';
  let icon: string = '';
  ProfileService.nickname.subscribe((v) => (nickname = v));
  ProfileService.profileIcon.subscribe((v) => (icon = v));
  ProfileService.statusMessage.subscribe((v) => (statusMessage = v));

  const onSubmitClick = () => {
    modifyProfile();
    WindowService.modal.set(null);
  };

  const modifyProfile = () => {
    const privateKey = SessionService.getPrivateKey();
    SocketService.modifyProfile?.execute(privateKey, {
      icon,
      nickname,
      statusMessage,
    });
  };
</script>

<SettingModal title="프로필 설정" icon="fas fa-user">
  <div slot="body">
    <div class="profile-img">
      <img alt="유저이미지" src={icon} />
      <h2>이야기 정보 수정</h2>
    </div>
    <div class="profile-form">
      <TextSettingInput
        title="닉네임"
        name="profile-nickname"
        bind:value={nickname}
      />
      <TextSettingInput
        title="상태 메시지"
        name="profile-memo"
        bind:value={statusMessage}
      />
      <TextSettingInput
        title="사용자 이미지"
        name="profile-image"
        bind:value={icon}
      />
      <button class="stream-sub" on:click={onSubmitClick}>
        <h2>방송 설정 저장</h2>
      </button>
    </div>
  </div>
</SettingModal>

<style lang="scss">
  .profile-img {
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;

    margin-bottom: 15px;

    img {
      width: 200px;
      overflow: hidden;
      border-radius: 50%;
      margin-bottom: 15px;
    }
    h2 {
      width: 100%;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 15px;
      letter-spacing: 2px;
    }
  }
  .profile-form {
    width: calc(100% - 30px);
    height: auto;
    padding: 0px 15px;
    .stream-sub {
      width: calc(100% + 30px);
      height: auto;
      margin: 0px -15px;
      border: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding: 20px 15px;
      background-color: #ff4081;
      color: #ffffff;
    }
  }
  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    .profile-form {
      .stream-sub {
        position: fixed;
        bottom: 0px;
        width: 100%;
      }
    }
  }
</style>
