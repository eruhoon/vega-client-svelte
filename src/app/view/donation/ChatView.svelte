<script lang="ts">
  type ChatSet = {
    Qset: string;
    styleTitleSize: number;
    styleTextSize: number;
  };
  let chatSet: ChatSet = {
    Qset: 'def',
    styleTitleSize: 20,
    styleTextSize: 12,
  };
</script>

<article class="layout">
  <div class="container-box">
    <div class="container">
      <div class="components">
        <div class="title">
          <h1>채팅 설정 / <small> Support Setting</small></h1>
        </div>
        <div class="card">
          <div class="thumbnail-group">
            <h3 class="thumbnail-title">채팅 스타일</h3>
            <div class="thumbnail-btn">
              <label class="thumbnail">
                <input type="radio" value="def" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>기본</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="def2" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>기본2</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="dc" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>DC스타일</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="kakao" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>카카오스타일</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input
                  type="radio"
                  value="material"
                  bind:group={chatSet.Qset}
                />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>머테리얼</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="simple" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>심플</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="simple2" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>심플2</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="mycast" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>마캐2</h3>
                </span>
              </label>
              <label class="thumbnail">
                <input type="radio" value="mycast" bind:group={chatSet.Qset} />
                <span class="radio-box">
                  <span class="img">
                    <img src="https://i.imgur.com/qcN7fpp.gif" />
                  </span>
                  <h3>커스텀CSS</h3>
                </span>
              </label>
            </div>
          </div>
          <hr />
          <!--
          <div class="color-group">
            <h3 class="color-title">배경 색상</h3>
            <label class="color-selecter">
              <input bind:value={backColor.rgba} />
              <a
                on:click={() => colorSelectAcitve("back")}
                style="background-color:{backColor.rgba}"
              >
                <Fa icon={faPalette} size="lg" />
              </a>
              {#if backColor.active}
                <div class="color-pick">
                  <HsvPicker
                    on:colorChange={backColorCallback}
                    startColor={"#202225"}
                  />
                </div>
              {/if}
            </label>
          </div>
          <hr />-->
          <!--
          <div class="select-group">
            <h3 class="select-title">글자 폰트</h3>
            <div class="selecter">
              <Select
                items={fontItems}
                selectedValue={fontSelected}
                {groupBy}
              />
            </div>
          </div>
          <hr />-->
          <!--
          <div class="color-group">
            <h3 class="color-title">타이틀 폰트 색상</h3>
            <label class="color-selecter">
              <input bind:value={titleFontColor.rgba} />
              <a
                on:click={() => colorSelectAcitve("title")}
                style="background-color:{titleFontColor.rgba}"
              >
                <Fa icon={faPalette} size="lg" />
              </a>
              {#if titleFontColor.active}
                <div class="color-pick">
                  <HsvPicker
                    on:colorChange={titleFontColorCallback}
                    startColor={"#202225"}
                  />
                </div>
              {/if}
            </label>
          </div>
          <hr />-->
          <!--
          <div class="input-group">
            <h3 class="input-title">타이틀 폰트 크기</h3>
            <div class="input-box">
              <input bind:value={chatSet.styleTitleSize} />
            </div>
          </div>
          <hr />
          <div class="color-group">
            <h3 class="color-title">내용 폰트 색상</h3>
            <label class="color-selecter">
              <input bind:value={textFontColor.rgba} />
              <a
                on:click={() => colorSelectAcitve("text")}
                style="background-color:{textFontColor.rgba}"
              >
                <Fa icon={faPalette} size="lg" />
              </a>
              {#if textFontColor.active}
                <div class="color-pick">
                  <HsvPicker
                    on:colorChange={textFontColorCallback}
                    startColor={"#202225"}
                  />
                </div>
              {/if}
            </label>
          </div>
          <hr />
          <div class="input-group">
            <h3 class="input-title">내용 폰트 크기</h3>
            <div class="input-box">
              <input bind:value={chatSet.styleTextSize} />
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <div class="chat-test">
      <div class="components">
        <div class="title">
          <h1>채팅 테스트/ <small> Chat Test</small></h1>
        </div>
        <div class="card" />
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  .layout {
    min-width: 1100px;
    width: 100%;

    .container-box {
      display: flex;
      .chat-test {
        min-width: 300px;
        width: calc(30% - 50px);
        display: inline-block;
        margin-left: 15px;
        .components {
          .title {
            width: calc(100% - 20px);
            height: 32px;
            background-color: #1c2027;
            padding: 10px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
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
          .card {
            min-width: 240px;
            width: calc(100% - 20px);
            height: auto;
            background-color: #3a3f47;
            padding: 10px;
            padding-top: 15px;

            border-top-right-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
              0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
          }
        }
      }
      .container {
        width: 70%;
        display: inline-block;
        .components {
          .title {
            width: calc(100% - 20px);
            height: 32px;
            background-color: #1c2027;
            padding: 10px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
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
          .card {
            width: calc(100% - 20px);
            height: auto;
            background-color: #3a3f47;
            padding: 10px;
            padding-top: 15px;

            border-top-right-radius: 5px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;

            box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
              0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

            .supporting-text {
              width: 100%;
              height: auto;
              padding-left: 10px;
              padding-bottom: 15px;

              p {
                font-size: 14px;
                font-weight: 300;
                padding-bottom: 5px;
              }
            }
            hr {
              border-color: #36393f;
              margin-bottom: 15px;
            }
            .input-group {
              width: 100%;
              height: auto;
              display: flex;
              padding-bottom: 5px;

              .input-box {
                width: 40%;
                float: left;
                height: 60px;
                position: relative;
                margin-left: 0%;
                input {
                  width: 100%;
                  color: #fff;
                  float: left;
                  background-color: #202225;

                  border-radius: 5px;
                  border: 0px;
                  padding: 10px;
                  font-size: 18px;
                }
                p {
                  color: #ff4081 !important;
                  font-size: 12px !important;
                  padding-bottom: 5px;
                  position: absolute;
                  bottom: -13px;
                  left: 10px;
                }
              }
              .input-title {
                width: 200px;
                height: 30px;
                color: #fff;
                float: left;
                font-size: 18px;
                line-height: 20px;
                padding: 10px;
              }
            }

            .thumbnail-group {
              width: 100%;
              display: flex;
              padding-bottom: 10px;
              .thumbnail-title {
                width: 200px;
                height: inherit;
                color: #fff;
                float: left;
                font-size: 18px;
                line-height: 20px;
                padding: 10px;
              }
              .thumbnail-btn {
                width: calc(100% - 220px);
                position: relative;
                display: inline-block;
                float: left;

                .thumbnail {
                  width: 158px;
                  height: 138px;
                  display: inline-block;
                  float: left;
                  padding: 0%;
                  margin: 0%;
                  margin-bottom: 15px;
                  margin-right: 15px;

                  input {
                    opacity: 0;
                    width: 0%;
                    height: 0%;
                    position: absolute;
                    top: 0;
                    left: 0;
                  }

                  .radio-box {
                    width: 150px;
                    height: 130px;
                    position: relative;
                    display: inline-block;

                    background-color: #1c2027;
                    border-radius: 10px;

                    text-align: center;

                    .img {
                      width: 140px;
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
            .color-group {
              width: 100%;
              height: auto;
              display: flex;

              .color-selecter {
                width: 40%;
                height: 47px;

                position: relative;

                input {
                  width: 100%;
                  color: #fff;
                  float: left;
                  background-color: #202225;

                  border-radius: 5px;
                  border: 0px;
                  padding: 10px;
                  font-size: 18px;
                }
                a {
                  width: 30px;
                  height: 27px;
                  padding: 10px;
                  display: block;
                  position: absolute;
                  border-top-right-radius: 5px;
                  border-bottom-right-radius: 5px;
                  right: -20px;
                  top: 0px;
                  border-left: 1px solid #3a3f47;
                  text-align: center;
                }
                .color-pick {
                  position: absolute;
                  bottom: -220px;
                  right: -270px;
                  z-index: 100;
                  border-radius: 5px;
                  overflow: hidden;

                  color: #1c2027;
                }
              }
              .color-title {
                width: 200px;
                height: 30px;
                color: #fff;
                float: left;
                font-size: 18px;
                line-height: 20px;
                padding: 10px;
              }
            }
            .select-group {
              width: 100%;
              display: flex;
              padding-bottom: 10px;

              .select-title {
                width: 200px;
                height: inherit;
                color: #fff;
                float: left;
                font-size: 18px;
                line-height: 20px;
                padding: 10px;
              }
              .selecter {
                width: 42%;

                --background: #202225;
                --border: 0px;
                --listBackground: #202225;
                --itemHoverBG: #a13157;
                --borderRadius: 5px;
                --placeholderColor: #fff;
                --spinnerWidth: 40%;
                --padding: 10px 16px;
                --height: 47px;
                --inputFontSize: 18px;
                --itemIsActiveBG: #ff4081;
                --clearSelectFocusColor: #fff;
              }
            }
          }
        }
      }
    }
  }
</style>
