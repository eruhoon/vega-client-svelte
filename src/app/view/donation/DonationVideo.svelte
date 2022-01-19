<script lang="ts">
  type videoSet = {
    donationUse: boolean;
    CoinUse: boolean;
    ttsTextCount: number;
    noticeLayout: string;
    titleTemplate: string;
    fontSize: number;
  };
  let videoSet: videoSet = {
    donationUse: false,
    CoinUse: false,
    ttsTextCount: 100,
    noticeLayout: 'center',
    titleTemplate: '{name}님이 영상후원을 해주셧습니다.',
    fontSize: 20,
  };
</script>

<article class="layout">
  <div class="container">
    <div class="components">
      <div class="title">
        <h1>후원 설정 / <small> Support Setting</small></h1>
      </div>
      <div class="card">
        <div class="btn-group">
          <h3>도네이션 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={videoSet.donationUse} />
            <span class="slider round" />
          </label>
        </div>
        <!--
        <hr />
        <div class="btn-group">
          <h3>마캐코인 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={videoSet.CoinUse} />
            <span class="slider round" />
          </label>
        </div>-->
      </div>
    </div>
    <div class="components">
      <div class="title">
        <h1>후원 영상 설정 / <small> Support Video System</small></h1>
      </div>
      <div class="card">
        <div class="input-group">
          <h3 class="input-title">영상 길이 제한</h3>
          <div class="input-box">
            <input bind:value={videoSet.ttsTextCount} />
          </div>
        </div>
        <hr />
        <!--<div class="input-group">
            <h3 class="input-title">알림 효과</h3>
            <input
              bind:value={videoSet.allim_effect}
              on:change{videoSupportSystemUpdate}
            />
          </div>
          <hr />-->
        <div class="thumbnail-group">
          <h3 class="thumbnail-title">알림 레이아웃</h3>
          <div class="thumbnail-btn">
            <label class="thumbnail">
              <input
                type="radio"
                value="bottom"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box">
                <span class="icon">
                  <i class="fas fa-image" />
                </span>
                <h3>text</h3>
              </span>
            </label>
            <label class="thumbnail">
              <input
                type="radio"
                value="center"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box nLayout-center">
                <span class="icon">
                  <i class="fas fa-image" />
                </span>
                <h3>text</h3>
              </span>
            </label>
            <label class="thumbnail">
              <input
                type="radio"
                value="noimg"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box nLayout-noimg">
                <h3>text</h3>
              </span>
            </label>
          </div>
        </div>
        <hr />
        <!--
        <div class="select-group">
          <h3 class="select-title">알림 효과음</h3>
          <div class="selecter">
            <Select
                items={alarmItems}
                selectedValue={videoSet.allim_sound}
                on:select={allimSoundSelect}
              />
          </div>
        </div>-->
      </div>
      <!--
      <div class="components">
        <div class="title">
          <h1>시스템 텍스트 / <small> System Text</small></h1>
        </div>
        <div class="card">
          <div class="input-group">
            <h3 class="input-title">내용 템플릿</h3>
            <div class="input-box">
              <input bind:value={videoSet.titleTemplate} />
            </div>
          </div>
          <hr />
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
        </div>
      </div>-->
    </div>
  </div>
</article>

<style lang="scss">
  .layout {
    width: 100%;
    .container {
      min-width: 900px;
      max-width: 1300px;
      margin: auto;
      padding-bottom: 40px;

      .components {
        width: 100%;
        margin-top: 20px;
        background-color: var(--primary-background-color);
        color: var(--primary-foreground-color);

        .title {
          width: calc(100% - 20px);
          height: 32px;
          background-color: var(--primary-background-color);
          border-bottom: 1px solid var(--primary-foreground-color);
          padding: 10px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          h1 {
            font-size: 24px;
            font-weight: bolder;

            small {
              color: var(--primary-activeground-color);
              font-size: 20px;
              font-weight: normal;
            }
          }
        }
        .card {
          width: calc(100% - 20px);
          height: auto;
          background-color: var(--primary-background-color);
          color: var(--primary-foreground-color);
          padding: 10px;
          padding-top: 15px;

          border-top-right-radius: 5px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;

          box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

          // .supporting-text {
          //   width: 100%;
          //   height: auto;
          //   padding-left: 10px;
          //   padding-bottom: 15px;

          //   p {
          //     font-size: 14px;
          //     font-weight: 300;
          //     padding-bottom: 5px;
          //   }
          // }

          hr {
            border: 0px;
            border-bottom: 1px solid var(--primary-background-color);
            border-color: var(--primary-foreground-color);
            margin-bottom: 15px;
          }
          // 좌측 링크 박스형
          // .link-group {
          //   width: 100%;
          //   min-height: 40px;
          //   height: auto;
          //   padding-bottom: 15px;
          //   display: flex;

          //   h3.link-text {
          //     font-size: 18px;
          //     line-height: 40px;
          //     padding-left: 10px;
          //     display: inline-block;
          //   }

          //   .btn-group {
          //     width: auto;
          //     height: 40px;
          //     flex: auto;

          //     button {
          //       width: auto;
          //       height: auto;

          //       display: inline-block;
          //       margin-right: 10px;

          //       color: #fff;
          //       text-align: center;

          //       background-color: #ff4081;
          //       border: 0px;
          //       border-radius: 40px;
          //       box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
          //         0px 1px 1px 0px rgb(0 0 0 / 14%),
          //         0px 1px 3px 0px rgb(0 0 0 / 12%);

          //       &.icon-btn {
          //         width: 40px;
          //         height: 40px;
          //         padding: 3px;
          //       }
          //       &.text-btn {
          //         width: auto;
          //         height: 40px;

          //         p {
          //           font-size: 16px;
          //           padding: 0px 10px;
          //         }
          //       }
          //     }
          //   }
          // }

          // 입력 값 박스형
          .input-group {
            width: 100%;
            height: auto;
            display: flex;
            padding-bottom: 10px;

            // 현재 처리기
            .input-box {
              width: 80%;
              height: 60px;
              position: relative;
              margin-left: auto;
              margin-right: 0px;
              input {
                width: 100%;
                color: var(--primary-foreground-color);
                background-color: var(--primary-hoverground-color);
                border-radius: 5px;
                border: 0px;
                padding: 10px;
                font-size: 18px;
              }
              // p {
              //   color: #ff4081 !important;
              //   font-size: 12px !important;
              //   padding-bottom: 5px;
              //   position: absolute;
              //   bottom: -15px;
              //   left: 10px;
              // }
            }
            .input-title {
              width: 200px;
              height: 30px;
              color: var(--primary-foreground-color);
              font-size: 18px;
              line-height: 20px;
              padding: 10px;
              margin-left: 0px;
            }
          }
          // 버튼형 박스
          .btn-group {
            width: 100%;
            min-height: 40px;
            height: auto;
            padding-bottom: 10px;
            display: flex;
            h3 {
              font-size: 18px;
              font-weight: bolder;
              line-height: 40px;
              padding-left: 10px;
              display: inline-block;
              margin-left: 0px;
            }

            /* The switch - the box around the slider */
            .switch {
              width: 60px;
              height: 34px;
              margin-left: auto;
              margin-right: 0px;
              position: relative;
              display: inline-block;
              margin-right: 15px;
              margin-left: auto;
              margin-right: 0px;

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
                background-color: var(--primary-hoverground-color);
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
                background-color: var(--primary-activeground-color);
              }
              input:focus + .slider {
                box-shadow: 0 0 1px var(--primary-activeground-color);
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

            // button {
            //   width: auto;
            //   height: auto;

            //   display: inline-block;
            //   margin-right: 10px;

            //   color: #fff;
            //   text-align: center;

            //   background-color: #ff4081;
            //   border: 0px;
            //   border-radius: 40px;
            //   box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            //     0px 1px 1px 0px rgb(0 0 0 / 14%),
            //     0px 1px 3px 0px rgb(0 0 0 / 12%);

            //   &.icon-btn {
            //     width: 40px;
            //     height: 40px;
            //     padding: 3px;
            //   }
            //   &.text-btn {
            //     width: auto;
            //     height: 40px;

            //     p {
            //       font-size: 16px;
            //       padding: 0px 10px;
            //     }
            //   }
            // }
          }
          // 썸네일형(기타)
          .thumbnail-group {
            width: 100%;
            display: flex;
            padding-bottom: 10px;

            .thumbnail-title {
              width: 200px;
              height: inherit;
              color: var(--primary-foreground-color);
              font-size: 18px;
              line-height: 20px;
              padding: 10px;
              margin-left: 0px;
            }

            .thumbnail-btn {
              width: 80%;
              position: relative;
              display: flex;
              margin-left: auto;
              margin-right: 0px;

              .thumbnail {
                width: 158px;
                height: 90px;
                display: inline-block;
                padding: 0%;
                margin: 0%;
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
                  height: 90px;
                  position: relative;
                  display: inline-block;

                  background-color: var(--primary-hoverground-color);
                  border-radius: 10px;

                  text-align: center;

                  .icon {
                    width: 50px;
                    height: 50px;
                    display: block;
                    padding: 0px 50px;
                    padding-top: 10px;
                    color: var(--primary-foreground-color);
                    i {
                      font-size: 50px;
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
                  background-color: var(--primary-activeground-color);
                  color: var(--primary-activeground-font-color);
                  .icon {
                    color: var(--primary-activeground-font-color);
                  }
                }
                input:focus + .radio-box {
                  box-shadow: 0 0 1px var(--primary-activeground-color);
                }
              }
            }
          }
          // 선택형 박스
          // .select-group {
          //   width: 100%;
          //   display: flex;
          //   padding-bottom: 10px;

          //   .select-title {
          //     width: 200px;
          //     height: inherit;
          //     color: #fff;
          //     float: left;
          //     font-size: 18px;
          //     line-height: 20px;
          //     padding: 10px;
          //   }
          //   .selecter {
          //     width: 80%;

          //     --background: #202225;
          //     --border: 0px;
          //     --listBackground: #202225;
          //     --itemHoverBG: #a13157;
          //     --borderRadius: 5px;
          //     --placeholderColor: #fff;
          //     --spinnerWidth: 40%;
          //     --padding: 10px 16px;
          //     --height: 47px;
          //     --inputFontSize: 18px;
          //     --itemIsActiveBG: #ff4081;
          //     --clearSelectFocusColor: #fff;
          //   }
          // }

          //컬러 픽업 박스
          // .color-group {
          //   width: 100%;
          //   height: auto;
          //   display: flex;

          //   .color-selecter {
          //     width: 80%;
          //     height: 47px;

          //     position: relative;

          //     input {
          //       width: 100%;
          //       color: #fff;
          //       float: left;
          //       background-color: #202225;

          //       border-radius: 5px;
          //       border: 0px;
          //       padding: 10px;
          //       font-size: 18px;
          //     }
          //     a {
          //       width: 30px;
          //       height: 27px;
          //       padding: 10px;
          //       display: block;
          //       position: absolute;
          //       border-top-right-radius: 5px;
          //       border-bottom-right-radius: 5px;
          //       right: -20px;
          //       top: 0px;
          //       border-left: 1px solid #3a3f47;
          //       text-align: center;
          //     }
          //     .color-pick {
          //       position: absolute;
          //       right: 30px;
          //       bottom: 0px;
          //       z-index: 100;
          //       border-radius: 5px;
          //       overflow: hidden;

          //       color: #1c2027;
          //     }
          //   }
          //   .color-title {
          //     width: 200px;
          //     height: 30px;
          //     color: #fff;
          //     float: left;
          //     font-size: 18px;
          //     line-height: 20px;
          //     padding: 10px;
          //   }
          // }
        }
      }
    }
  }

  // 이미지 업로드 박스
  // .imgUpload-group {
  //   width: 100%;
  //   display: flex;
  //   padding-bottom: 10px;
  //   .imgUpload-title {
  //     width: 200px;
  //     height: inherit;
  //     color: #fff;
  //     float: left;
  //     font-size: 18px;
  //     line-height: 20px;
  //     padding: 10px;
  //   }
  //   .imgUpload-box {
  //     width: 80%;
  //     position: relative;
  //     .imgUpload-btn {
  //       width: 100%;
  //       height: 100px;
  //       position: relative;
  //       display: inline-block;
  //       overflow: hidden;
  //       float: none;

  //       background-color: #1c2027;
  //       border-radius: 10px;
  //       margin-right: 15px;
  //       margin-bottom: 15px;

  //       text-align: center;
  //       .icon {
  //         width: 50px;
  //         height: 50px;
  //         display: inline-block;
  //         padding: 10px 20px;
  //       }
  //       h3 {
  //         display: inline-block;
  //         font-size: 16px;
  //       }
  //     }
  //     .imgUpload-list {
  //       width: 100%;
  //       height: auto;
  //       display: inline-flex;
  //       padding: 0px 15px;
  //       padding-top: 15px;
  //       padding-bottom: 10px;
  //       flex-wrap: no-wrap;
  //       overflow-x: auto;
  //       overflow-y: hidden;

  //       &::-webkit-scrollbar {
  //         height: 14px;
  //       }
  //       &::-webkit-scrollbar-thumb {
  //         background-color: #202225;
  //         border-radius: 10px;
  //         background-clip: padding-box;
  //         border: 4px solid transparent;
  //       }
  //       &::-webkit-scrollbar-track {
  //         background-color: #3a3f47;
  //         border-radius: 10px;
  //         box-shadow: inset 0px 0px 0px white;
  //       }

  //       .imgItme {
  //         width: 189px;
  //         height: 189px;
  //         position: relative;
  //         display: inline-block;
  //         overflow: hidden;
  //         flex: 0 0 auto;

  //         background-color: #1c2027;
  //         border-radius: 10px;

  //         margin-right: 15px;
  //         margin-bottom: 15px;
  //         img {
  //           width: 100%;
  //           height: 100%;
  //           object-fit: cover;
  //         }
  //         .img-btn-group {
  //           width: 100%;
  //           height: 80px;

  //           position: absolute;
  //           top: 0px;
  //           left: 0px;
  //           background: -moz-linear-gradient(
  //             top,
  //             rgba(0, 0, 0, 0.8) 0%,
  //             rgba(0, 0, 0, 0) 75%,
  //             rgba(0, 0, 0, 0) 100%
  //           ); /* FF3.6-15 */
  //           background: -webkit-linear-gradient(
  //             top,
  //             rgba(0, 0, 0, 0.8) 0%,
  //             rgba(0, 0, 0, 0) 75%,
  //             rgba(0, 0, 0, 0) 100%
  //           ); /* Chrome10-25,Safari5.1-6 */
  //           background: linear-gradient(
  //             to bottom,
  //             rgba(0, 0, 0, 0.8) 0%,
  //             rgba(0, 0, 0, 0) 75%,
  //             rgba(0, 0, 0, 0) 100%
  //           );
  //           .close-btn {
  //             width: 16px;
  //             height: 21px;
  //             border: 3px solid #fff;
  //             border-radius: 50%;
  //             display: block;
  //             padding: 2px 5px;
  //             padding-bottom: 3px;
  //             position: absolute;
  //             top: 5px;
  //             right: 5px;
  //             text-align: center;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
</style>
