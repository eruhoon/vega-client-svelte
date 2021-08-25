<script lang="ts">
  import { OptionService } from '../../model/option/OptionService';

  import { WindowService } from '../../model/window/WindowService';

  let enableTimestamp = OptionService.enableTimestamp;

  const close = () => {
    WindowService.siteSettingModalShow.set(false);
  };

  OptionService.subscribeEnableTimestamp((v) => (enableTimestamp = v));

  const toggleTimestamp = () => {
    OptionService.updateEnableTimestamp((v) => !v);
  };
</script>

<div class="click-blocker" on:click={close} />
<div class="modal-wrapper">
  <div class="modal">
    <div class="title">
      <div class="icon">
        <i class="fas fa-tools" />
      </div>
      <h3>사이트 설정</h3>
    </div>
    <div class="body">
      <div class="site-set-box">
        <div class="set-title">
          <p>채팅 시각 표기</p>
        </div>
        <div class="set-switch">
          <label
            for="enableTimestamp"
            class="switch"
            class:active={enableTimestamp}
            on:click={toggleTimestamp}
          >
            <span class="slider" />
          </label>
        </div>
      </div>
    </div>
    <button class="modal-close" on:click={close}>
      <i class="fas fa-times" />
    </button>
  </div>
</div>

<style lang="scss">
  /* 모달 배경 처리 */
  .click-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
    z-index: 90;
  }
  /* 모달 기본 박스 구성 */
  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    // 최상위 속성값
    z-index: 100;

    // 모달 박스 시작
    .modal {
      position: relative;
      width: 500px;
      //height: auto;
      height: 725px;
      max-width: 100%;
      max-height: calc(100% - 50px);
      background: #2a2f38;
      color: #ffffff;
      border-radius: 2px;
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
        0 0 20px 4px rgba(0, 0, 0, 0.06);

      z-index: 100;

      .title {
        width: calc(100% - 30px);
        height: auto;
        padding: 5px 15px;
        display: flex;
        margin-bottom: 15px;
        .icon {
          width: 46px;
          height: 46px;
          color: #ffffff;
          margin: 0%;
          text-align: center;
          i {
            font-size: 24px;
            padding: 11px 11px;
          }
        }
        h3 {
          margin: 0%;
          width: auto;
          color: #ffffff;
          padding: 14px 10px;
          padding-right: 0px;
          font-size: 20px;
          height: auto;
        }
      }
      .body {
        overflow-y: auto;
        * {
          padding: 0%;
          margin: 0%;
        }
        // 모달 기본 박스 구성
        .site-set-box {
          width: calc(100% - 20px);
          height: 40px;
          padding: 5px 10px;
          border-bottom: 1px solid #1f2226;

          /* 잠시 꺼둠
          &:last-child{
            border-bottom: 0px;
          }
          &.max-w {
            height: 150px;
          }
          */
          .set-title {
            width: 80%;
            height: 42px;
            float: left;

            p {
              font-size: 18px;
              padding: 12px;
              color: #ffffff;
            }
          }

          .set-switch {
            width: calc(20% - 30px);
            height: 42px;
            float: right;
            margin-right: 12px;
            // padding-left: 30px;

            .switch {
              position: relative;
              display: inline-block;
              width: 60px;
              height: 33px;
              margin-top: 3px;
            }

            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #1f2226;

              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 33px;
            }

            .slider:before {
              position: absolute;
              content: '';
              height: 28px;
              width: 28px;
              left: 5px;
              bottom: 3px;
              background-color: #ffffff;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 50%;
            }

            .active .slider {
              background-color: #ff4081;
            }

            input:focus + .slider {
              box-shadow: 0 0 1px #ff4081;
            }

            .active .slider:before {
              -webkit-transform: translateX(24px);
              -ms-transform: translateX(24px);
              transform: translateX(24px);
            }
          }
        }
      }
    }
    .modal-close {
      width: 58px;
      height: 58px;
      position: absolute;
      top: 0%;
      right: 0%;

      background-color: #1f2226;
      border: 1px solid #1f2226;
      border-radius: 0%;
      text-align: center;

      i {
        font-size: 24px;
        line-height: 42px;
        padding-left: 2px;
        color: #ffffff;
      }

      &:hover {
        background-color: #ff4081;
        border: 1px solid #ff4081;

        i {
          color: #ffffff;
        }
      }

      &:active {
        background-color: #e91e63;
        border-color: #e91e63;

        i {
          color: #ffffff;
        }
      }
    }
    // 모달 박스 끝
  }
  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    .click-blocker {
      display: none;
    }
    .modal-wrapper {
      .modal {
        width: 100%;
        height: calc(100% - 50px);
        position: fixed;
        top: 50px;
        .body {
          .site-set-box {
            .set-switch {
              margin-left: 0px !important;
            }
          }
        }
      }
    }
  }
  /*
  .modal-wrapper {

    .body {

      .site-set-box {

        .raido-switch {
          width: 100%;
          height: 110px;
          padding-left: 10px;
          margin-top: 5px;
          float: left;
          display: flex;
          flex-flow: row wrap;

          .radio-switch-btn {
            width: calc(30% - 16px);
            height: 20px;
            margin: 7.5px 0px;
            margin-right: 3%;
            padding: 10px 8px 5px 8px;
            border-radius: 20px;

            text-align: center;
            font-size: 14px;
            color: #919191;
            background: #f5f5f5;

            &:hover {
              background-color: #eeeeee;
            }

            &.select {
              background-color: #ff4081;
              color: #ffffff;
              font-weight: bolder;
              font-family: 'Jeju Gothic', sans-serif !important;
            }
          }
        }

        .radio-box {
          width: 100%;
          height: 50px;
          padding-left: 10px;
          float: left;

          .radio-title {
            width: 45%;
            height: 50px;
            float: left;

            p {
              font-size: 16px;
              padding: 17px;
              padding-left: 5px;
              color: #757575;
            }
          }

          .raido-switch {
            width: 50% !important;
            float: right !important;
            height: 40px !important;
            margin-top: 10px;

            .radio-switch-btn {
              width: calc(40% - 16px);
              margin: 0% !important;
              margin-left: 10px !important;
            }
          }
        }
      }
    }

    button {
      width: 100%;
      height: 60px;

      margin-top: 33px;

      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      color: #ffffff;
      background-color: #ff4081;
      border: 1px solid #ff4081;

      font-size: 20px;
      font-weight: bolder;

      &:hover {
        background-color: #e91e63;
        border-color: #e91e63;
      }

      &:active {
        background-color: #d81b60;
        border-color: #d81b60;
      }

      &:disabled {
        background-color: #bdbdbd;
        border-color: #757575;
      }
    }
  }
  */
</style>
