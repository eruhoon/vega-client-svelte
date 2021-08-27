<script lang="ts">
  import SettingModal from './SettingModal.svelte';

  let enableBotChatstamp = 1;

  // OptionService.timestamp.subscribe((v) => (enableTimestamp = v));

  const toggleBotChatstamp = () => {
    if (enableBotChatstamp == 1) {
      enableBotChatstamp = 0;
    } else {
      enableBotChatstamp = 1;
    }
    //OptionService.setTimestamp(!enableTimestamp);
  };
</script>

<SettingModal title="채팅위젯 설정" icon="fas fa-comment">
  <div slot="body" class="chat-widget-setting">
    <div class="chat-widget-basic form-box">
      <div class="form-title">
        <h4>기본 설정</h4>
      </div>
      <div class="input-group">
        <p>고유번호</p>
        <input
          type="text"
          placeholder="닉네임"
          value="a7dd72998c42bb735905e62b1b992f9d"
          name="profile-nickname"
        />
      </div>
      <div class="input-group">
        <p>적용 주소</p>
        <input
          type="text"
          value="https://drive.google.com/file/d/a7dd72998c42bb735905e62b1b992f9d"
          name="profile-memo"
        />
      </div>
      <div class="tooltip">
        <p>* 고유 번호가 노출 되지 않도록 유의 바랍니다.</p>
        <p>* 적용 주소는 위젯 스타일에 따라 변경 됩니다.</p>
      </div>
    </div>
    <div class="chat-widget-basic form-box">
      <div class="form-title">
        <h4>위젯 설정</h4>
      </div>
      <div class="select-group">
        <p>스타일 리스트</p>
        <div class="select-list">
          <label class="thumbnail">
            <input type="radio" value="def" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>기본</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="def2" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>기본2</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="dc" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>DC스타일</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="kakao" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>카카오스타일</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="material" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>머테리얼</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="simple" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>심플</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="simple2" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>심플2</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="mycast" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>마캐2</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="mycast" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>커스텀CSS</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="simple2" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>심플2</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="mycast" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>마캐2</h3>
            </span>
          </label>
          <label class="thumbnail">
            <input type="radio" value="mycast" name="chat-style" />
            <span class="radio-box">
              <span class="img">
                <img src="https://i.imgur.com/qcN7fpp.gif" />
              </span>
              <h3>커스텀CSS</h3>
            </span>
          </label>
        </div>
      </div>
      <div class="toggle-group">
        <div class="toggle-title">
          <p>봇 숨기기</p>
        </div>
        <div class="toggle-switch">
          <label
            for="enableTimestamp"
            class="switch"
            class:active={enableBotChatstamp}
            on:click={toggleBotChatstamp}
          >
            <span class="slider" />
          </label>
        </div>
      </div>
    </div>
    <button class="form-sub">
      <h2>방송 설정 저장</h2>
    </button>
  </div>
</SettingModal>

<style lang="scss">
  .chat-widget-setting {
    padding-bottom: 15px;
    max-height: calc(100vh - 188px);
    overflow-y: auto;
    scrollbar-width: thin;

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
  }

  // 스크롤 색상용
  .chat-widget-setting {
    scrollbar-color: #ff4081 #2a2f38;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-track {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff4081;
    }
  }
  .form-box {
    width: calc(100% - 30px);
    height: auto;
    padding: 0px 15px;
    .form-title {
      width: 100%;
      height: 30px;
      padding: 15px;
      margin: 0px -15px;
      margin-bottom: 15px;

      background: #1f2226;

      h4 {
        width: 100%;
        padding: 6px 0px;
      }
    }
    // 기본 input 처리
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
    // 리스트형 버튼 처리
    .select-group {
      width: 100%;
      height: auto;
      margin-bottom: 15px;

      p {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 5px;
      }

      .select-list {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .thumbnail {
          width: 30%;
          height: 130px;
          display: inline-block;
          float: left;
          padding: 0%;
          margin: 0%;
          margin-bottom: 15px;
          margin-right: 4%;

          &:nth-child(3n) {
            margin-right: 0%;
          }

          input {
            opacity: 0;
            width: 0%;
            height: 0%;
            position: absolute;
            top: 0;
            left: 0;
          }

          .radio-box {
            width: 100%;
            height: 130px;
            position: relative;
            display: inline-block;

            background-color: #1c2027;
            border-radius: 10px;

            text-align: center;

            .img {
              width: calc(100% - 10px);
              height: 90px;
              overflow: hidden;
              display: block;
              border-radius: 5px;
              margin-top: 5px;
              margin-bottom: 5px;
              margin-left: 5px;

              img {
                width: 100%;
              }
            }
            h3 {
              font-size: 16px;
            }

            &.nLayout-center {
              .icon {
                opacity: 0.1;
                padding-top: 15px;
              }
              h3 {
                position: absolute;
                top: 26px;
                left: 60px;
              }
            }
            &.nLayout-noimg {
              h3 {
                position: absolute;
                top: 26px;
                left: 60px;
              }
            }
          }
          input:checked + .radio-box {
            background-color: #ff4081;
          }
          input:focus + .radio-box {
            box-shadow: 0 0 1px #ff4081;
          }
        }
      }
    }
    // 토글 input 처리
    .toggle-group {
      width: 100%;
      height: 42px;

      .toggle-title {
        width: 80%;
        height: 42px;
        float: left;

        p {
          font-size: 18px;
          padding: 12px;
          padding-left: 0px;
          color: #ffffff;
        }
      }

      .toggle-switch {
        width: calc(20% - 30px);
        height: 42px;
        float: right;
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

    .tooltip {
      width: 100%;
      height: auto;
      padding: 15px;
      margin: 0px -15px;

      background-color: rgb(55, 60, 70);

      p {
        font-size: 12px;
        font-weight: lighter;
        line-height: 16px;
        padding-bottom: 4px;

        &:last-child {
          padding: 0%;
        }
      }
    }
  }
  .form-sub {
    width: 100%;
    height: auto;
    margin-top: 15px;
    margin-bottom: -15px;
    border: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 20px 15px;
    background-color: #ff4081;
    color: #ffffff;
  }

  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    .chat-widget-setting {
      max-height: calc(100vh - 138px);
    }
    .form-box {
      // 리스트형 버튼 처리
      .select-group {
        .select-list {
          .thumbnail {
            .radio-box {
              h3 {
                font-size: 14px;
                font-weight: normal;
              }
            }
          }
        }
      }

      // 토글 input 처리
      .toggle-group {
        .toggle-switch {
          margin-right: 10px;
        }
      }
    }
  }
</style>
