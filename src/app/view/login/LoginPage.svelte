<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { LoginCommand } from "../../model/login/LoginCommand";
  import { MyStatus } from "../../model/status/MyStatus";

  const EVENT_LOGIN = "login";

  let id = "";
  let pw = "";

  const dispatch = createEventDispatcher();

  const onLoginButtonClick = () => {
    requestLogin().then((result) => {
      if (result.result) {
        dispatch(EVENT_LOGIN, result.hash);
      } else {
        console.log("failed");
      }
    });
  };

  const requestLogin = async () => {
    const result = await new LoginCommand().execute(id, pw);
    MyStatus.privateKey = result.hash;
    return result;
  };

  // 이미지 슬라이더 처리
  let images = [
    "./assets/image/login/bg/1.png",
    "./assets/image/login/bg/2.png",
    "./assets/image/login/bg/3.png",
    "./assets/image/login/bg/4.png",
    "./assets/image/login/bg/5.png",
    "./assets/image/login/bg/6.png",
    "./assets/image/login/bg/7.png",
    "./assets/image/login/bg/8.png",
    "./assets/image/login/bg/9.png",
    "./assets/image/login/bg/10.png",
    "./assets/image/login/bg/11.png",
    "./assets/image/login/bg/12.png",
    "./assets/image/login/bg/13.png",
    "./assets/image/login/bg/14.png",
    "./assets/image/login/bg/15.png",
    "./assets/image/login/bg/16.png",
    "./assets/image/login/bg/17.png",
    "./assets/image/login/bg/18.png",
    "./assets/image/login/bg/19.png",
    "./assets/image/login/bg/20.png",
    "./assets/image/login/bg/21.png",
    "./assets/image/login/bg/22.png",
    "./assets/image/login/bg/23.png",
  ];

  let index = 0;
  let interval;

  const nextImg = () => {
    const preIndex = index;
    let tmp_index = Math.floor(Math.random() * images.length);
    if (preIndex == tmp_index) {
      tmp_index = Math.floor(Math.random() * images.length);
    }
    index = tmp_index;
    console.log(index);
  };

  const autoPlay = () => {
    interval = setInterval(nextImg, 4000);
  };
  const stopPlay = () => {
    clearInterval(interval);
  };
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
        />
        <input
          type="password"
          bind:value={pw}
          placeholder="비밀번호"
          id="pw"
          class="login-input"
        />
        <button
          type="submit"
          on:click={onLoginButtonClick}
          class="login-sub-btn">LOGIN</button
        >
      </div>
      <hr />
      <div class="add-btn">
        <a>
          <p>회원가입</p>
        </a>
        <a href="#">
          <p>비밀번호찾기</p>
        </a>
      </div>
    </div>
    <!-- 로그인 / 회원가입 / 비밀번호 찾기 분기 종료 지점 -->
  </div>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div class="bg" on:mouseover={stopPlay} on:mouseleave={autoPlay}>
    <div class="slider">
      {#each [images[index]] as src (index)}
        <img transition:fade {src} alt="" />
      {/each}
    </div>
  </div>
  <!-- <toast-list></toast-list>       -->
</main>

<style lang="scss">
  @font-face {
    font-family: "BMJUA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    //font-family: "Spoqa Han Sans Neo", "sans-serif";
    color: #fff;
    user-select: none;
    margin: 0%;
    &:focus {
      outline: none;
    }
  }
  main {
    background-color: #2a2f38;
    width: 100%;
    height: 100%;
    display: flex;
    .form-box {
      width: 440px;
      height: 100%;
      padding: 0px 30px;
      padding-top: 10%;
      background-color: #1c2027;
      display: inline-block;

      // 그림자 영역
      box-shadow: 2px 0px 1px -1px rgb(0 0 0 / 40%),
        1px 0px 1px 0px rgb(0 0 0 / 30%), 1px 0px 3px 0px rgb(0 0 0 / 30%);

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
            color: #fff;
            background-color: #2a2f38;
            border-radius: 5px;
            border: 0px;
            padding: 10px;
            font-size: 18px;
            margin-bottom: 30px;
          }
          .login-sub-btn {
            width: calc(100% - 0px);
            height: 70px;
            color: #fff;
            border-radius: 5px;
            border: 0px;
            font-size: 32px;
            margin-bottom: 15px;
            background-color: #ff4081;
            padding: 10px;
            font-family: "BMJUA", "NEXON Lv2 Gothic Bold", sans-serif;
            text-align: center;
            letter-spacing: 2px;
          }
        }
        hr {
          border-color: #36393f;
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
              color: #484e58;
            }
            &:hover {
              p {
                color: #ff4081;
              }
            }
          }
        }
      }
      // 로그인, 회원가입, 비밀번호 찾기 css 분기 종료지점
    }
    .bg {
      width: calc(100% - 500px);
      height: 100%;
      .slider {
        width: 100%;
        height: 100%;
        opacity: 0.35;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media all and (max-width: 768px) {
  }

  // 일반적 환경 (PC환경 접속시 처리 되는 SCSS)
  @media all and (min-width: 768px) {
  }

  /*
  toast-list {
    position: fixed;
    left: 50%;
    bottom: 30px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }*/
</style>
