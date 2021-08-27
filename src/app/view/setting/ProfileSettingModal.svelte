<script lang="ts">
  import SettingModal from './SettingModal.svelte';
</script>

<SettingModal title="프로필 설정" icon="fas fa-user">
  <div slot="body">
    <div class="profile-img">
      <img alt="유저이미지" src="https://i.imgur.com/XjsUghQ.gif" />
      <h2>이야기 정보 수정</h2>
    </div>
    <div class="profile-form">
      <div class="input-group">
        <p>닉네임</p>
        <input
          type="text"
          placeholder="닉네임"
          value="이야기"
          name="profile-nickname"
        />
      </div>
      <div class="input-group">
        <p>상태 메시지</p>
        <input
          type="text"
          value="https://drive.google.com/file/d/1lsXDgsN1aeg"
          name="profile-memo"
        />
      </div>
      <div class="input-group">
        <p>사용자 이미지</p>
        <input
          type="text"
          value="https://i.imgur.com/XjsUghQ.gif"
          name="profile-image"
        />
      </div>
      <button class="stream-sub">
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
    .input-group {
      width: 100%;
      margin-bottom: 15px;

      p {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        background: #1f2226;
        border: 0px;
        border-radius: 0%;
        color: #ffffff;
        padding: 15px 10px;
      }
    }
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
