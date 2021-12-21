<script lang="ts">
  import { LoginCommand } from '../../model/login/LoginCommand';
  import { SessionService } from '../../service/SessionService';
  import BackgroundSlider from './BackgroundSlider.svelte';
  import JoinModal from './JoinModal.svelte';
  import LoginPageModalLayer from './LoginPageModalLayer.svelte';

  let id = '';
  let pw = '';
  let passInput: HTMLInputElement;
  let modal = null;

  const requestLogin = async () => {
    try {
      const result = await new LoginCommand().execute(id, pw);
      SessionService.setPrivateKey(result.hash || '');
    } catch {
      console.log('failed');
    }
  };

  function onPassKeyPress(e: KeyboardEvent) {
    const { key } = e;
    if (key === 'Enter') {
      requestLogin();
    }
  }

  function onIdKeyPress(e: KeyboardEvent) {
    const { key } = e;
    if (key === 'Enter') {
      passInput.focus();
    }
  }
</script>

<main>
  <div class="form-box">
    <!-- 로그인 / 회원가입 / 비밀번호 찾기 분기 시작 지점 -->
    <div class="login">
      <div class="logo">
        <img src="/assets/image/login/logo-600.png" width="330" alt="logo" />
      </div>
      <div class="form">
        <input
          type="text"
          bind:value={id}
          placeholder="아이디"
          id="id"
          class="login-input"
          on:keypress={onIdKeyPress}
        />
        <input
          bind:this={passInput}
          type="password"
          bind:value={pw}
          placeholder="비밀번호"
          id="pw"
          class="login-input"
          on:keypress={onPassKeyPress}
        />
        <button type="submit" on:click={requestLogin} class="login-sub-btn"
          >LOGIN</button
        >
      </div>
      <hr />
      <div class="add-btn">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={(_) => (modal = 'join')}>
          <p>회원가입</p>
        </a>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="#">
          <p>비밀번호찾기</p>
        </a>
      </div>
    </div>
    <!-- 로그인 / 회원가입 / 비밀번호 찾기 분기 종료 지점 -->
  </div>
  <div class="background-slider">
    <BackgroundSlider />
  </div>
</main>

{#if modal}
  <LoginPageModalLayer on:onbackgroundclick={() => (modal = null)}>
    {#if modal === 'join'}
      <JoinModal on:oncloseclick={() => (modal = null)} />
    {/if}
  </LoginPageModalLayer>
{/if}

<style lang="scss">
  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    //font-family: "Spoqa Han Sans Neo", "sans-serif";
    color: var(--primary-foreground-color);
    user-select: none;
    margin: 0%;
    &:focus {
      outline: none;
    }
  }
  main {
    background-color: var(--primary-background-color);
    width: 100%;
    height: 100%;
    display: flex;
    .form-box {
      width: 440px;
      height: 100%;
      padding: 0px 30px;
      padding-top: 10%;
      background-color: var(--primary-hoverground-color);
      display: inline-block;

      // 그림자 영역
      box-shadow: var(--primary-box-shadow);

      // 로그인, 회원가입, 비밀번호 찾기 css 분기 시작지점
      .login {
        width: 100%;
        height: 100%;
        .logo {
          width: calc(100% - 15px);
          height: auto;
          text-align: center;
        }
        .form {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
          .login-input {
            position: relative;
            width: 100%;
            height: 50px;
            color: var(--primary-foreground-color);
            background-color: var(--primary-background-color);
            border-radius: 5px;
            border: 0px;
            padding: 10px;
            font-size: 18px;
            margin-bottom: 30px;
          }
          .login-sub-btn {
            width: calc(100% - 0px);
            height: 70px;
            color: var(--primary-activeground-font-color);
            border-radius: 5px;
            border: 0px;
            font-size: 32px;
            margin-bottom: 15px;
            background-color: var(--primary-activeground-color);
            padding: 10px;
            font-family: 'BMJUA', 'NEXON Lv2 Gothic Bold', sans-serif;
            text-align: center;
            letter-spacing: 2px;
          }
        }
        hr {
          border-color: var(--primary-hoverground-color);
          margin: 30px 0px;
        }
        .add-btn {
          width: 100%;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;

          a {
            margin-left: 15px;
            text-decoration: none;
            p {
              color: var(--primary-borderground-color);
            }
            &:hover {
              p {
                color: var(--primary-activeground-color);
              }
            }
          }
        }
      }
      // 로그인, 회원가입, 비밀번호 찾기 css 분기 종료지점
    }
    .background-slider {
      width: calc(100% - 500px);
      height: 100%;
    }
  }
  @media all and (max-width: 768px) {
    main {
      height: 100%;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
        border: 3px solid;
      }
      &::-webkit-scrollbar-button:start:decrement,
      &::-webkit-scrollbar-button:end:increment {
        display: block;
        height: 5px;
      }
      &::-webkit-scrollbar-track {
        -webkit-border-radius: 10px;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        height: 50px;
        width: 50px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
      }

      // 컬러셋
      &::-webkit-scrollbar {
        border-color: var(--primary-background-color);
      }
      &::-webkit-scrollbar-button:start:decrement,
      &::-webkit-scrollbar-button:end:increment {
        background: var(--primary-background-color);
      }
      &::-webkit-scrollbar-track {
        background: var(--primary-background-color);
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary-activeground-color);
      }
    }
  }

  // 일반적 환경 (PC환경 접속시 처리 되는 SCSS)
  @media all and (min-width: 768px) {
  }
</style>
