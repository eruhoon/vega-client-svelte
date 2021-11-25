<script lang="ts">
  import { onMount } from 'svelte/internal';
  import type { Photo } from '../../model/photo/Photo';
  import { PhotoContentService } from '../../model/photo/PhotoContentService';
  import { DateUtils } from '../../util/date/DateUtils';
  import { PhotoAdultFilterCommand } from './PhotoAdultFilterCommand';
  import { PhotoShareCommand } from './PhotoShareCommand';

  const adultFilter = new PhotoAdultFilterCommand();
  const share = new PhotoShareCommand();

  export let photo: Photo;
  let container: HTMLDivElement;
  let editTagMode = false;

  const getMimeType = (raw: string) => {
    return raw?.split('image/')[1].toLocaleUpperCase();
  };

  const getDateText = (dateObj: Date): string => {
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return `${year}년 ${month}월 ${date}일`;
  };

  const getTimeText = (dateObj: Date): string => {
    const day = DateUtils.getDayString(dateObj.getDay());
    const rawHour = dateObj.getHours();
    const amPm = rawHour < 12 ? '오전' : '오후';
    const hour = rawHour % 12;
    const minute = dateObj.getMinutes();
    return `${day}, ${amPm} ${hour}:${minute}`;
  };

  function onCloseClick() {
    PhotoContentService.setCurrentPhoto(null);
  }

  function onTagSubmit() {}

  async function onAdultClick() {
    const nextAdult = !adult;
    const result = await adultFilter.execute(photo.hash, nextAdult);
    if (result) {
      adult = nextAdult;
    }
  }

  function onShareClick() {
    share.execute(photo.url);
  }

  function onKeyPress(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      PhotoContentService.setCurrentPhoto(null);
    }
  }

  $: mimeType = getMimeType(photo.mimeType);
  $: dateText = getDateText(photo.regDate);
  $: timeText = getTimeText(photo.regDate);
  $: adult = photo.isForAdult;

  onMount(() => {
    container.focus();
  });
</script>

<div
  bind:this={container}
  class="photo-view"
  on:keydown={onKeyPress}
  tabindex="0"
>
  <span class="mob-clear" on:click={onCloseClick}>
    <i class="fas fa-times" />
  </span>
  <div class="photo-img">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={photo.url} />
  </div>
  <div class="photo-info">
    <div class="title">
      <h3>정보</h3>
      <span class="pc-clear" on:click={onCloseClick}>
        <i class="fas fa-times" />
      </span>
    </div>
    <div class="p-info-box">
      <p class="lab">사이즈</p>
      <p class="info-txt">{photo.width}x{photo.height}</p>
    </div>
    <div class="p-info-box">
      <p class="lab">태그</p>
      {#if editTagMode}
        <div class="tag-input-box">
          <input
            type="text"
            class="tag-input"
            value={photo.tags.join(',')}
            on:keydown={onTagSubmit}
          />
          <span class="material-icons" on:click={onTagSubmit}>send</span>
        </div>
      {:else}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="add-tag" on:click={(_) => (editTagMode = true)}>
          <span class="material-icons">add_comment</span>
        </a>
        <div class="tag-list">
          {#each photo.tags as tag}
            <div class="tag-box">
              <p>{tag}</p>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div class="p-info-box">
      <p class="lab">세부정보</p>
      <div class="in-txt">
        <span class="material-icons">calendar_today</span>
        <div class="in-txt-list">
          <p class="ma-title">{dateText}</p>
          <p class="sub-text">{timeText}</p>
        </div>
      </div>
      <div class="in-txt">
        <span class="material-icons">image</span>
        <div class="in-txt-list">
          <p class="ma-title">{mimeType}</p>
          <p class="sub-text">{photo.mimeType}</p>
        </div>
      </div>
      <!--
      <div class="in-txt">
        <span class="material-icons">visibility</span>
        <div class="in-txt-list">
          <p class="ma-title see-txt">{viewer}명</p>
        </div>
      </div>
      -->
    </div>
    <div class="p-info-box">
      <p class="lab">세부도구</p>
      <div
        class="in-txt tool attention-limit"
        class:active={adult}
        on:click={onAdultClick}
      >
        <span class="material-icons">verified_user</span>
        <div class="in-txt-list">
          <p class="ma-title see-txt">후방주의 이미지</p>
        </div>
      </div>
      <div class="in-txt tool" on:click={onShareClick}>
        <span class="material-icons">launch</span>
        <div class="in-txt-list">
          <p class="ma-title see-txt">채팅으로 보내기</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .photo-view {
    width: 100%;
    height: 100%;

    padding: 0%;
    margin: 0%;

    background: #1c2027;

    .mob-clear {
      display: none;
    }

    .photo-info {
      width: 300px;
      height: 100%;
      background-color: #2a2f38;
      border-right: 1px solid #1c2027;
      border-left: 1px solid #1c2027;
      padding: 10px;
      float: left;

      .title {
        width: calc(100% - 10px);
        height: auto;
        padding: 10px 5px;
        padding-bottom: 15px;
        border-bottom: 1px solid #1c2027;
        margin-bottom: 10px;
        position: relative;

        h3 {
          font-size: 24px;
          line-height: 28px;
          color: #ffffff;
        }

        span {
          width: 28px;
          height: 28px;
          font-size: 28px;
          line-height: 28px;
          color: #ffffff;
          cursor: pointer;

          position: absolute;
          top: 9px;
          right: 5px;
          &:hover {
            color: #ff4081;
          }
        }
      }

      .p-info-box {
        width: 100%;
        height: auto;

        padding: 5px;
        padding-bottom: 30px;

        position: relative;

        p.lab {
          font-size: 14px;
          color: #eeeeee;
          padding: 0%;
          margin: 0%;
        }

        p.info-txt {
          font-size: 36px;
          color: #ffffff;
          padding: 0%;
          margin: 0%;
        }

        .add-tag {
          width: auto;
          width: 24px;
          color: #eeeeee;
          font-size: 14px;
          display: block;
          position: absolute;
          right: 5px;
          top: 6px;
          cursor: pointer;

          span {
            font-size: 18px;
          }
        }
        .tag-input-box {
          width: 100%;
          height: 36px;
          position: relative;

          margin-top: 15px;

          .tag-input {
            width: calc(100% - 10px);
            height: 100%;
            line-height: 20px;
            font-size: 14px;
            color: #ffffff;

            padding: 7px 15px;
            padding-right: 50px;
            border-radius: 2px;
            border: 1px solid #1c2027;
            background-color: #1c2027;
            outline: none;
          }
          span {
            width: 36px;
            height: 36px;

            position: absolute;
            right: 9px;
            top: 1px;

            color: #ffffff;
            text-align: center;
            line-height: 36px;

            &:hover {
              color: #ff4081;
            }
          }
        }

        .tag-list {
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          .tag-box {
            width: auto;
            height: auto;

            background-color: #ff4081;
            color: #ffffff;
            border-radius: 2px;
            margin: 0%;
            margin-right: 10px;
            margin-top: 10px;

            p {
              margin: 0%;
              padding: 0%;
              padding: 5px 10px;
              padding-bottom: 9px;
              font-weight: bolder;
            }
          }
        }

        .in-txt {
          width: 100%;
          height: 40px;

          margin-top: 20px;

          &.tool {
            cursor: pointer;
          }
          &.attention-limit.active {
            color: #ff4081;
            span {
              color: #ff4081;
            }
            .in-txt-list > p.see-txt {
              color: #ff4081;
            }
          }

          span {
            width: auto;
            height: auto;

            font-size: 36px;
            color: #ffffff;
            float: left;
          }

          .in-txt-list {
            width: calc(100% - 45px);
            padding-left: 5px;
            float: left;

            p {
              padding: 0%;
              margin: 0%;
            }

            p.ma-title {
              font-size: 20px;
              color: #ffffff;
              line-height: 20px;
            }

            p.sub-text {
              font-size: 14px;
              color: #eeeeee;
              line-height: 16px;
            }

            p.ma-title.see-txt {
              padding-top: 9px;
            }

            &.active {
            }
          }
        }
      }
    }

    .photo-img {
      width: calc(100% - 322px);
      height: 100%;

      float: right;
      position: relative;

      img {
        max-width: 100%;
        max-height: 100%;

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;

        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);

        overflow: hidden;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .photo-view {
      width: 100%;
      height: 100%;
      position: relative;
      overflow-x: hidden;
      overflow-y: scroll;

      background-color: #212121 !important;

      span.mob-clear {
        width: 28px;
        height: 26px;
        padding: 12px 11px;

        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 1px 3px 0px rgba(0, 0, 0, 0.12);

        display: inline;

        font-size: 28px;
        line-height: 28px;
        color: #ffffff;
        background: #ff4081;
        border-radius: 2px;
        cursor: pointer;

        position: fixed;
        top: 50px;
        left: 0px;

        z-index: 3;
        text-align: center;
      }
      .photo-info {
        width: 100%;
        height: auto;
        padding: 0px;
        border: 0px;

        .title {
          width: 100%;
          height: auto;
          padding: 5px;
          position: relative;

          h3 {
            font-size: 24px;
            line-height: 28px;
            color: #ffffff;
            margin: 10px 0px;
          }

          span {
            display: none;
          }
        }
        .p-info-box {
          .add-tag {
            right: 20px;
          }
        }
      }
      .photo-img {
        width: 100%;
        min-height: 320px;
        max-height: calc(100% - 90px);
        overflow: hidden;
        background-color: #212121;
        margin: 15px 0px;

        img {
          max-width: 100%;

          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;

          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 3px 0px rgba(0, 0, 0, 0.12);

          overflow: hidden;
        }
      }
    }
  }
</style>
