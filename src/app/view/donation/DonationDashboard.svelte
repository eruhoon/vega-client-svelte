<script lang="ts">
</script>

<article>
  <div class="donation-row">
    <div class="don-item" style="background-color: #ff4081;">
      <span class="icon">
        <i class="fas fa-dollar-sign" />
      </span>
      <div class="info">
        <h2>1,000개/<small>월</small></h2>
        <p>총 도네이션 수</p>
      </div>
    </div>
    <div class="don-item" style="background-color: #ee0235;">
      <span class="icon">
        <i class="fab fa-youtube" />
      </span>
      <div class="info">
        <h2>1,000개/<small>월</small></h2>
        <p>영상 도네이션 수</p>
      </div>
    </div>
    <div class="don-item" style="background-color: #bb02ee;">
      <span class="icon">
        <i class="fas fa-microphone" />
      </span>
      <div class="info">
        <h2>1,000개/<small>월</small></h2>
        <p>음성 도네이션 수</p>
      </div>
    </div>
    <div class="don-item" style="background-color: #ee02ab;">
      <span class="icon">
        <i class="fas fa-music" />
      </span>
      <div class="info">
        <h2>1,000개/<small>월</small></h2>
        <p>OSU 도네이션 수</p>
      </div>
    </div>
  </div>
  <div class="donation-setup-group">
    <div class="donation-card">
      <div class="title">
        <h1>도네이션 링크 / <small> Donation Link</small></h1>
      </div>
      <div class="content">
        <div class="link-group">
          <h3 class="link-text">http://mycast.xyz/Donation/스트림키</h3>
          <div class="btn-group">
            <button class="icon-btn">
              <span class="icon">
                <i class="fas fa-paperclip" />
              </span>
            </button>
            <button class="text-btn">
              <p>이동</p>
            </button>
          </div>
        </div>
        <hr />
        <div class="supporting-text">
          <p>※해당 스트림키는 남에게 보여주시면 안됩니다.</p>
          <p>
            ※사용방법 : "http://mycast.xyz/streamer/스트림키"주소 뒤에
            스트림키를 붙여 OBS 브라우저 URL에 추가
          </p>
          <p>※화면크기 : 1280 * 720 // 필히 준수해주시길 바랍니다.</p>
        </div>
      </div>
    </div>
    <div class="donation-card">
      <div class="title">
        <h1>채팅창 링크 / <small> Chatting Link</small></h1>
      </div>
      <div class="content">
        <div class="link-group">
          <h3 class="link-text">http://mycast.xyz/Chatting/스트림키</h3>
          <div class="btn-group">
            <button class="icon-btn">
              <span class="icon">
                <i class="fas fa-paperclip" />
              </span>
            </button>
            <button class="text-btn">
              <p>이동</p>
            </button>
          </div>
        </div>
        <hr />
        <div class="supporting-text">
          <p>※해당 스트림키는 남에게 보여주시면 안됩니다.</p>
          <p>
            ※사용방법 : "http://mycast.xyz/Chatting/스트림키"주소 뒤에
            스트림키를 붙여 OBS 브라우저 URL에 추가
          </p>
          <p>※화면크기 : 720 * 1280 // 필히 준수해주시길 바랍니다.</p>
        </div>
        <!--<div class="input-group">
                  <input value="7887826671F1F91414BBFE29E7F7C17E"/>
                </div>
                <div class="btn-group">
                </div>-->
      </div>
    </div>
    <div class="donation-card">
      <div class="title">
        <h1>후원 설정 / <small> Support Setting</small></h1>
      </div>
      <div class="btn-list">
        <div class="set-btn-group">
          <h3>음성 도네</h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" />
          </label>
        </div>
        <hr />
        <div class="set-btn-group">
          <h3>영상 도네</h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" />
          </label>
        </div>
        <hr />
        <div class="set-btn-group">
          <h3>OSU 도네</h3>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round" />
          </label>
        </div>
      </div>
    </div>
    <div class="donation-card">
      <div class="title">
        <h1>스트림키 / <small> Support Setting</small></h1>
      </div>
      <div class="content">
        <div class="link-group">
          <h3 class="link-text">a7dd72998c42bb735905e62b1b992f9d</h3>
          <div class="btn-group">
            <button class="icon-btn">
              <span class="icon">
                <i class="fas fa-paperclip" />
              </span>
            </button>
            <button class="text-btn">
              <p>재발급</p>
            </button>
          </div>
        </div>
        <hr />
        <div class="supporting-text">
          <p>※해당 스트림키는 남에게 보여주시면 안됩니다.</p>
          <p>
            ※사용방법 : "http://mycast.xyz/streamer/스트림키"주소 뒤에
            스트림키를 붙여 OBS 브라우저 URL에 추가
          </p>
          <p>※화면크기 : 1280 * 720 // 필히 준수해주시길 바랍니다.</p>
        </div>
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  .donation-row {
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    .don-item {
      width: calc(25% - 10px);
      margin-right: 10px;
      padding: 15px;

      position: relative;

      background-color: #ffffff;
      color: #ffffff;
      border-radius: 2px;

      .icon {
        font-size: 48px;
        opacity: 0.75;
        position: absolute;
        top: 0px;
        left: 15px;
      }
      .info {
        padding: 0px 0px;
        padding-top: 65px;
        text-align: right;
        h2 {
          padding-bottom: 5px;
          small {
            font-size: 16px;
          }
        }
      }
    }
  }
  .donation-setup-group {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    justify-content: flex-start;

    // 앞으로 도네이션 모든 구문의 박스 처리 scss
    // 너비 / 마진 값은 따로 빼야됨
    .donation-card {
      width: calc(50% - 10px);
      height: auto;
      background-color: #3a3f47;
      //padding: 10px;
      border-radius: 2px;
      margin-left: 0%;
      margin-right: 10px;
      margin-bottom: 20px;
      .title {
        width: calc(100% - 30px);
        height: 32px;
        background-color: #1c2027;
        padding: 15px;
        margin-bottom: 20px;
        h1 {
          font-size: 24px;
          font-weight: bolder;

          small {
            color: #ff4081;
            font-size: 20px;
            font-weight: normal;
          }
        }
      }
      .supporting-text {
        width: calc(100% - 10px);
        height: auto;
        padding: 15px 0px;
        padding-left: 10px;

        background-color: #454b54;

        p {
          font-size: 14px;
          font-weight: 300;
          padding-bottom: 5px;
        }
      }

      hr {
        border-color: #36393f;
      }
      // 좌측 링크 박스형
      .link-group {
        width: 100%;
        min-height: 40px;
        height: auto;
        padding-bottom: 15px;
        display: flex;

        h3.link-text {
          font-size: 18px;
          line-height: 40px;
          padding-left: 10px;
          display: inline-block;
        }

        .btn-group {
          width: auto;
          height: 40px;
          flex: auto;

          button {
            width: auto;
            height: auto;

            display: inline-block;
            margin-right: 10px;

            color: #fff;
            text-align: center;

            background-color: #1f2226;
            border: 0px;
            border-radius: 2px;
            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
              0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

            transition: background-color 0.15s ease-in-out;
            &:hover {
              background-color: #ff4081;
            }

            &.icon-btn {
              width: 40px;
              height: 40px;
              padding: 3px;
            }
            &.text-btn {
              width: auto;
              height: 40px;

              p {
                font-size: 16px;
                padding: 0px 10px;
              }
            }
          }
        }
      }

      // 버튼형 박스
      .btn-list {
        .set-btn-group {
          width: 100%;
          min-height: 40px;
          height: auto;
          padding: 15px 0px;
          &:first-child {
            padding-top: 0px;
          }
          h3 {
            font-size: 18px;
            font-weight: bolder;
            line-height: 40px;
            padding-left: 10px;
            display: inline-block;
          }

          .switch {
            width: 60px;
            height: 34px;
            position: relative;
            display: inline-block;
            margin-right: 15px;
            input {
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
              background-color: #1c2027;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }

            .slider:before {
              position: absolute;
              content: '';
              height: 26px;
              width: 26px;
              left: 4px;
              bottom: 4px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
            }
            input:checked + .slider {
              background-color: #ff4081;
            }
            input:focus + .slider {
              box-shadow: 0 0 1px #ff4081;
            }
            input:checked + .slider:before {
              -webkit-transform: translateX(26px);
              -ms-transform: translateX(26px);
              transform: translateX(26px);
            }
            .slider.round {
              border-radius: 34px;
            }
            .slider.round:before {
              border-radius: 50%;
            }
          }

          button {
            width: auto;
            height: auto;

            display: inline-block;
            margin-right: 10px;

            color: #fff;
            text-align: center;

            background-color: #ff4081;
            border: 0px;
            border-radius: 40px;
            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
              0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

            &.icon-btn {
              width: 40px;
              height: 40px;
              padding: 3px;
            }
            &.text-btn {
              width: auto;
              height: 40px;

              p {
                font-size: 16px;
                padding: 0px 10px;
              }
            }
          }
        }
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .donation-row {
      width: 100%;
      padding-bottom: 15px;
      display: block;
      .don-item {
        width: calc(100% - 20px);
        padding: 15px;
        position: relative;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0px;
        }
        .info {
          padding-top: 0px;
          h2 {
            padding-bottom: 5px;
            small {
              font-size: 16px;
            }
          }
        }
      }
    }
    .donation-setup-group {
      width: 100%;
      margin-top: 10px;
      display: block;

      // 앞으로 도네이션 모든 구문의 박스 처리 scss
      // 너비 / 마진 값은 따로 빼야됨
      .donation-card {
        width: 100%;
        margin-left: 0%;
        margin-right: 0px;
        .title {
          width: calc(100% - 30px);
          height: 32px;
          background-color: #1c2027;
          padding: 15px;
          margin-bottom: 20px;
          h1 {
            font-size: 20px;
            font-weight: bolder;

            small {
              color: #ff4081;
              font-size: 16px;
              font-weight: normal;
            }
          }
        }
        .supporting-text {
          width: calc(100% - 20px);
          padding: 15px 10px;
          padding-left: 10px;
          p {
            font-size: 12px;
          }
        }

        hr {
          border-color: #36393f;
        }
        // 좌측 링크 박스형
        .link-group {
          width: 100%;
          min-height: 40px;
          height: auto;
          padding-bottom: 15px;
          display: block;

          h3.link-text {
            font-size: 16px;
            line-height: 40px;
            padding-left: 10px;
            display: inline-block;
          }

          .btn-group {
            width: 100%;
            height: 40px;

            button {
              width: auto;
              height: auto;

              display: inline-block;
              margin-right: 10px;

              &.icon-btn {
                width: 40px;
                height: 40px;
                padding: 3px;
              }
              &.text-btn {
                width: auto;
                height: 40px;

                p {
                  font-size: 16px;
                  padding: 0px 10px;
                }
              }
            }
          }
        }

        // 버튼형 박스
        .btn-list {
          .set-btn-group {
            width: 100%;
            min-height: 40px;
            height: auto;
            padding: 15px 0px;
            &:first-child {
              padding-top: 0px;
            }
            h3 {
              font-size: 18px;
              font-weight: bolder;
              line-height: 40px;
              padding-left: 10px;
              display: inline-block;
            }

            .switch {
              width: 60px;
              height: 34px;
              position: relative;
              display: inline-block;
              margin-right: 15px;
              input {
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
                background-color: #1c2027;
                -webkit-transition: 0.4s;
                transition: 0.4s;
              }

              .slider:before {
                position: absolute;
                content: '';
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: white;
                -webkit-transition: 0.4s;
                transition: 0.4s;
              }
              input:checked + .slider {
                background-color: #ff4081;
              }
              input:focus + .slider {
                box-shadow: 0 0 1px #ff4081;
              }
              input:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
              }
              .slider.round {
                border-radius: 34px;
              }
              .slider.round:before {
                border-radius: 50%;
              }
            }

            button {
              width: auto;
              height: auto;

              display: inline-block;
              margin-right: 10px;

              color: #fff;
              text-align: center;

              background-color: #ff4081;
              border: 0px;
              border-radius: 40px;
              box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
                0px 1px 1px 0px rgb(0 0 0 / 14%),
                0px 1px 3px 0px rgb(0 0 0 / 12%);

              &.icon-btn {
                width: 40px;
                height: 40px;
                padding: 3px;
              }
              &.text-btn {
                width: auto;
                height: 40px;

                p {
                  font-size: 16px;
                  padding: 0px 10px;
                }
              }
            }
          }
        }
      }
    }
    //CSS
  }
</style>
