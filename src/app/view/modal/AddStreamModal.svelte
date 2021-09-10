<script lang="ts">
  import { RegisterStreamCommand } from '../../model/stream/RegisterStreamCommand';
  import { StageStreamCommand } from '../../model/stream/StageStreamCommand';
  import { ToastService } from '../../model/toast/ToastService';
  import { WindowService } from '../../model/window/WindowService';

  const platforms = [
    { id: 'twitch', name: '트위치' },
    { id: 'afreeca', name: '아프리카' },
  ];
  let currentPlatform: Platform;
  let stagedStream = null;
  let searching = false;
  let adding = false;
  let searchKeyword = '';

  function onPlatformClick(platform: Platform) {
    currentPlatform = platform;
  }

  async function onSearchClick() {
    searching = true;
    try {
      const command = new StageStreamCommand(currentPlatform.id, searchKeyword);
      const result = await command.execute();
      if (result === null) {
        ToastService.toast({ text: '검색결과가 없습니다.' });
        return;
      }
      stagedStream = result;
    } finally {
      searching = false;
    }
  }

  async function onAddClick() {
    if (!stagedStream) {
      ToastService.toast({ text: '비정상 접근입니다.' });
      return;
    }

    this.adding = true;
    const command = new RegisterStreamCommand(
      stagedStream.platform,
      stagedStream.keyId
    );
    try {
      const result = await command.execute();
      if (result) {
        ToastService.toast({ text: '방송을 추가했습니다.' });
      } else {
        ToastService.toast({ text: '방송추가를 실패했습니다.' });
      }
    } finally {
      this.adding = false;
      WindowService.closeModal();
    }
  }

  type Platform = { id: string; name: string };
</script>

<div class="modal">
  <div class="title">
    <h3>스트리머 추가</h3>
  </div>
  {#if stagedStream === null}
    <div class="live-stream-chk">
      <div class="live-corp-list">
        {#each platforms as platform}
          <div class="live-corp" on:click={(_) => onPlatformClick(platform)}>
            <div class="live-corp-img">
              <div class="checks">
                <input
                  type="radio"
                  name="live-corp-select"
                  checked={platform === currentPlatform}
                />
              </div>
            </div>
            <p>{platform.name}</p>
          </div>
        {/each}
      </div>
      <div class="live-stream-search">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>
          <p>방송ID검색</p>
        </label>
        <input
          id="name"
          maxlength="15"
          type="text"
          bind:value={searchKeyword}
        />
        <p class="error-up">닉네임을 입력하세요.</p>
      </div>
      <button
        class="live-stream-btn"
        disabled={searching}
        on:click={onSearchClick}
      >
        {searching ? '검색 중' : '검색'}
      </button>
    </div>
  {:else}
    <div>
      <div class="live-stream-list">
        <div class="live-stream">
          <!-- svelte-ignore a11y-missing-attribute -->
          <img src={stagedStream?.icon} />
          <div class="stream-info">
            <h3>
              <span>{stagedStream?.title} </span>
              <small>({stagedStream?.keyId})</small>
            </h3>
            <p>방송플랫폼 : {stagedStream?.platform}</p>
          </div>
        </div>
      </div>
      <button
        class="live-stream-add-btn"
        disabled={adding}
        on:click={onAddClick}
      >
        스트리머 추가
      </button>
    </div>
  {/if}
</div>

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    top: 0;
    left: 0;
  }
  .modal {
    position: relative;
    width: 480px;
    height: auto;
    max-width: 90%;
    max-height: 90%;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06);

    * {
      padding: 0%;
      margin: 0%;
    }

    .title {
      width: calc(100% - 20px);
      font-size: 24px;
      color: #616161;
      text-align: left;
      padding: 10px;
      padding-top: 15px;
      border-bottom: 1px solid #e3e3e3;
    }
    .live-corp-list {
      width: calc(100% - 20px);
      padding: 10px;
      display: inline-block;

      .live-corp {
        width: 20%;
        margin: 0% 2.5%;
        height: auto;
        float: left;

        text-align: center;

        .live-corp-img {
          width: 100%;
          background: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          text-align: center;
          position: relative;

          padding: 10px 0px;

          margin-bottom: 5px;

          img {
            width: 60px;
            height: auto;
          }
          .checks {
            width: 21px;
            height: 21px;

            position: absolute;
            top: 5px;
            right: 5px;
          }

          &:hover {
            background-color: #757575;
          }
          &:active {
            background-color: #ff4081;
          }
        }

        p {
          font-size: 14px;
          color: #616161;
        }
      }
    }
    .live-stream-search {
      width: calc(100% - 20px);
      padding-bottom: 5px;

      label {
        width: 100%;
        font-size: 14px;
        color: #757575;
        padding-left: 10px;

        p {
          padding: 0 10px;
          margin-bottom: 5px;
        }
      }

      input {
        width: calc(100% - 20px);
        height: 40px;
        font-size: 16px;
        margin: 0 10px;
        padding: 0px 10px;
        color: #424242;

        border: 1px solid #eeeeee;
        border-radius: 5px;
        overflow: hidden;
      }

      p.error-up {
        display: none;
      }
    }

    button.live-stream-btn {
      width: calc(100% - 20px);
      height: 50px;
      margin: 0px 10px;
      margin-bottom: 15px;

      margin-top: 15px;
      border-radius: 5px;
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

    .live-stream-list {
      width: calc(100% - 20px);
      padding-bottom: 5px;

      border-top: 1px solid #f5f5f5;

      display: inline-block;
      margin: 0px 10px;

      .error-search {
        width: 100%;
        height: 110px;
        padding: 15px 0px;
        display: none;

        text-align: center;

        span {
          font-size: 60px;
          line-height: 60px;
          color: #bdbdbd;
          padding-bottom: 10px;
        }
        h3 {
          font-size: 20px;
          color: #9e9e9e;
          padding-bottom: 5px;
        }
        p {
          font-size: 14px;
          color: #bdbdbd;
        }
      }
      .live-stream {
        width: 100%;
        height: 80px;
        display: inline-block;

        img {
          width: 60px;
          height: 60px;
          float: left;
          margin: 10px;
        }
        .stream-info {
          width: calc(100% - 100px);
          height: 60px;
          padding: 10px 0px;
          margin-right: 20px;
          float: left;

          h3 {
            padding-top: 15px;
            color: #424242;
          }
          p {
            font-size: 12px;
            color: #757575;
          }
        }
      }
    }

    button.live-stream-add-btn {
      width: 100%;
      height: 60px;

      margin-top: 15px;
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

    .modal-close {
      width: 40px;
      height: 40px;
      position: absolute;
      top: calc(0% - 15px);
      right: calc(0% - 15px);

      background-color: #fafafa;
      border: 1px solid #f5f5f5;
      border-radius: 50%;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

      text-align: center;

      i {
        font-size: 24px;
        line-height: 42px;
        padding-left: 2px;
        color: #424242;
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
  }

  .click-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
    z-index: 100;
    top: 0;
    left: 0;
  }
</style>
