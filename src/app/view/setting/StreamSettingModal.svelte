<script lang="ts">
  import SettingModal from './SettingModal.svelte';

  const platforms = [
    {
      id: 'mycast',
      icon: 'mycast',
      title: '로컬서버',
    },
    {
      id: 'totoro',
      icon: 'totoro',
      title: '이웃서버',
    },
    {
      id: 'twitch',
      icon: 'twitch',
      title: '트위치',
    },
    {
      id: 'afreecatv',
      icon: 'afreecatv',
      title: '아프리카TV',
    },
  ];
  const currentPlatformId = 'totoro';
</script>

<SettingModal title="방송 설정" icon="fas fa-podcast">
  <div slot="body" class="stream-setup">
    <div class="stream-btn">
      {#each platforms as p}
        <button
          name="stream-live-select"
          class="live-select"
          class:active={p.id === currentPlatformId}
        >
          <!-- SVG 변경 필수 -->
          <img alt={p.title} src="/assets/image/stream/{p.icon}.png" />
          <h3>{p.title}</h3>
        </button>
      {/each}
    </div>
    <div class="stream-form">
      <div class="preview-img">
        <img
          alt="이미지보기"
          src="https://cphoto.asiae.co.kr/listimglink/6/2020060911301484295_1591669814.jpg"
        />
      </div>
      <div class="input-group">
        <p>방송 배경 설정</p>
        <input type="text" placeholder="이미지 주소" name="stream-image-url" />
      </div>
      <div class="input-group">
        <p>스트림 링크 <small>(OBS FMS URL)</small></p>
        <input
          type="text"
          value="rtmp://totoro.mycast.xyz/live"
          name="stream-fms-url"
        />
      </div>
      <div class="input-group">
        <p>스트림 키 <small>(STREAM KEY)</small></p>
        <input type="text" value="asdguioqwberh8hu3o21j4" name="stream-key" />
      </div>
      <button class="stream-sub">
        <h2>방송 설정 저장</h2>
      </button>
    </div>
  </div>
</SettingModal>

<style lang="scss">
  .stream-setup {
    .stream-btn {
      width: 100%;
      height: 140px;
      display: flex;
      border-bottom: 1px solid #1f2226;
      margin-bottom: 15px;

      .live-select {
        width: 25%;
        height: 140px;
        padding: 10px 10px 10px 10px;

        text-align: center;
        border: 0px;
        border-radius: 0px;

        background-color: #2a2f38;
        color: #fff;

        &:hover {
          background-color: #1f2226;
        }
        &.active {
          background-color: #ff4081;
        }

        img {
          width: 60px;
          height: 60px;
          margin: 5px;
          margin-bottom: 15px;
        }
        h3 {
          font-size: 18px;
          letter-spacing: 1px;
        }
      }
    }
    .stream-form {
      width: calc(100% - 30px);
      height: auto;
      padding: 0px 15px;

      .preview-img {
        width: 100%;
        max-height: 265px;
        overflow: hidden;

        margin-bottom: 15px;

        img {
          width: 100%;
        }
      }
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
  }
  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    .stream-setup {
      .stream-btn {
        .live-select {
          img {
            width: 50px;
            height: 50px;
            margin: 5px;
            margin-bottom: 15px;
          }
          h3 {
            font-size: 14px;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
</style>
