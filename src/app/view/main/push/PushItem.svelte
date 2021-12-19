<script lang="ts">
  import { onMount } from 'svelte';
  import type { PushEntryParam } from './PushEntryParam';

  export let param: PushEntryParam;

  let time: number;

  onMount(() => {
    setInterval(() => {
      time = new Date().getTime();
    }, 10000);
  });

  $: timeText = createTimeText(time, param.timestamp);

  function createTimeText(now: number, timestamp: number): string {
    const ago = now - timestamp;
    const agoSecond = Math.round(ago / 1000);
    const agoMinute = Math.floor(agoSecond / 60);
    const agoHour = Math.floor(agoMinute / 60);
    const agoDate = Math.floor(agoHour / 24);
    let timeText: string;
    if (agoDate > 0) {
      timeText = `${agoDate}일 전`;
    } else if (agoHour > 0) {
      timeText = `${agoHour}시간 전`;
    } else if (agoMinute > 0) {
      timeText = `${agoMinute}분 전`;
    } else {
      timeText = '방금';
    }
    return timeText;
  }
</script>

<div class="nt-entry" class:read={param.notification.read}>
  <div class="entry">
    <img src={param.notification.icon} alt="푸시 아이콘" />
  </div>
  <div class="nt-info-txt">
    <div class="title">
      <h4>{param.notification.title}</h4>
      <p>{timeText}</p>
    </div>
    <div class="nt-alert">
      <p>{param.notification.body}</p>
    </div>
  </div>
</div>

<style lang="scss">
  .nt-entry {
    display: flex;
    width: 370px;
    height: 50px;

    border: 1px solid #1f2226;
    border-bottom-color: #1f2226;

    background: #ff4081;
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);

    padding: 10px 15px;

    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-color: #1f2226;
    }

    &.read {
      background: #1f2226;
    }

    .entry {
      width: 50px;
      height: 50px;
      display: inline-block;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
    }

    .nt-info-txt {
      width: calc(100% - 60px);
      height: 36px;
      padding-top: 4px;
      padding-left: 10px;
      display: inline-block;

      h4,
      p {
        padding: 0%;
        margin: 0%;
      }

      .title {
        width: 100%;
        height: 20px;

        * {
          float: left;
        }

        h4 {
          line-height: 20px;
          font-weight: bold;
          color: #ffffff;
        }

        p {
          padding-left: 5px;
          color: #ffffff;
          font-size: 12px;
          line-height: 20px;
        }
      }

      .nt-alert {
        width: 100%;
        height: 16px;
        padding-top: 5px;

        p {
          font-size: 14px;
          line-height: 16px;
          text-align: left;
          color: #ffffff;

          // 한줄 표기
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nt-entry {
      width: calc(100% - 32px);
    }
  }
</style>
