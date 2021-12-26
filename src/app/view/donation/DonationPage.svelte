<script lang="ts">
  import DonationDashboard from './DonationDashboard.svelte';
  import DonationVoice from './DonationVoice.svelte';
  import DonationVideo from './DonationVideo.svelte';
  import DonationOsu from './DonationOsu.svelte';
  import ChatView from './ChatView.svelte';

  type DonationPage = {
    View: string;
    Title: string;
  };
  let donationPage: DonationPage = {
    View: 'dashboard',
    Title: '도네이션 대시보드',
  };
  let donationSelected = 'dashboard';

  const onDonationBtnClick = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const donationViewBtn = target.closest('button');
    switch (donationViewBtn.value) {
      case 'dashboard':
        donationPage.View = 'dashboard';
        donationPage.Title = '도네이션 대시보드';
        donationSelected = 'dashboard';
        break;
      case 'video':
        donationPage.View = 'video';
        donationPage.Title = '영상 도네이션';
        donationSelected = 'video';
        break;
      case 'chat':
        donationPage.View = 'chat';
        donationPage.Title = '채팅 설정';
        donationSelected = 'chat';
        break;
      case 'voice':
        donationPage.View = 'voice';
        donationPage.Title = '음성 도네이션';
        donationSelected = 'voice';
        break;
      case 'osu':
        donationPage.View = 'osu';
        donationPage.Title = 'Osu 맵 도네이션';
        donationSelected = 'osu';
        break;
      default:
        donationPage.View = 'dashboard';
        donationPage.Title = '도네이션 대시보드';
        donationSelected = 'dashboard';
        break;
    }
  };
</script>

<article class="dontion-main-view">
  <div class="donation-navbar">
    <div class="donation-title"><h1>{donationPage.Title}</h1></div>
    <div class="donation-nav">
      <button
        class="nav-btn {donationSelected === 'dashboard' ? 'selected' : ''}"
        on:click={onDonationBtnClick}
        value="dashboard"
      >
        대시보드
      </button>
      <button
        class="nav-btn {donationSelected === 'chat' ? 'selected' : ''}"
        on:click={onDonationBtnClick}
        value="chat"
      >
        채팅
      </button>
      <button
        class="nav-btn {donationSelected === 'voice' ? 'selected' : ''}"
        on:click={onDonationBtnClick}
        value="voice"
      >
        음성
      </button>
      <button
        class="nav-btn {donationSelected === 'video' ? 'selected' : ''}"
        on:click={onDonationBtnClick}
        value="video"
      >
        영상
      </button>
      <button
        class="nav-btn {donationSelected === 'osu' ? 'selected' : ''}"
        on:click={onDonationBtnClick}
        value="osu"
      >
        Osu
      </button>
    </div>
  </div>
  {#if donationPage.View == 'dashboard'}
    <DonationDashboard />
  {:else if donationPage.View == 'video'}
    <DonationVideo />
  {:else if donationPage.View == 'chat'}
    <ChatView />
  {:else if donationPage.View == 'voice'}
    <DonationVoice />
  {:else if donationPage.View == 'osu'}
    <DonationOsu />
  {/if}
</article>

<style lang="scss">
  .dontion-main-view {
    width: calc(100% - 25px);
    height: 100%;
    margin: 0%;
    padding: 0px 10px;
    padding-left: 15px;
    padding-top: 10px;
    position: relative;
    overflow-y: scroll;

    color: #fff;

    scrollbar-width: thin;

    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 14px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff4081;
      border-radius: 10px;
      background-clip: padding-box;
      border: 4px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #2a2f38;
      border-radius: 10px;
      box-shadow: inset 0px 0px 0px white;
    }

    .donation-navbar {
      width: 100%;
      height: auto;
      padding: 15px 0px;
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #1c2027;

      .donation-title {
        width: 50%;
        height: auto;
        margin-left: 0%;
        padding-left: 0px;
        h1 {
          padding-top: 6px;
          font-size: 28px;
          font-weight: 900;
          padding-left: 15px;
        }
      }
      .donation-nav {
        width: 50%;
        height: auto;
        margin-right: 0%;
        padding-right: 15px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        .nav-btn {
          width: auto;
          height: auto;
          margin-right: 15px;
          background-color: #2a2f38;
          border: 1px solid #1c2027;
          color: #ffffff;
          padding: 10px 15px;

          -webkit-transition: 0.4s;
          transition: 0.4s;
          &.selected {
            background: #ff4081;
            border-color: #ff4081;
            color: #ffffff !important;
          }
          &:hover {
            border-color: #ff4081;
            color: #ff4081;
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .dontion-main-view {
      width: calc(100% - 10px);
      height: 100%;
      padding: 0px 5px;
      padding-right: 5px;

      .donation-navbar {
        width: 100%;
        display: block;

        .donation-title {
          width: 100%;
          padding-bottom: 15px;
          h1 {
            padding-left: 0px;
          }
        }

        .donation-nav {
          width: 100%;
          height: auto;
          margin-right: 0%;
          padding-right: 0px;

          justify-content: flex-start;

          .nav-btn {
            height: auto;
            margin-right: 15px;
            padding: 5px 7px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
