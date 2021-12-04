<script lang="ts">
  import type { Memo } from '../../model/memo/Memo';
  import { MemoService } from '../../service/MemoService';

  export let memo: Memo;

  $: link = parseLink(memo.body);

  function parseLink(body: string): string {
    const match = /https?\:\/\/[^\s]+/.exec(body);
    return match ? match[0] : '';
  }

  function onShareClick() {
    MemoService.shareMemo(memo.hash);
  }

  function onLinkClick() {
    window.open(link);
  }

  function onClick() {
    MemoService.setCurrentMemo(memo);
  }
</script>

<div class="memo-entry" on:click={onClick}>
  <div class="left-side">
    <img src={memo.userIcon} alt="{memo.userName} 아이콘" />
  </div>
  <div class="main">
    <div class="header">{memo.userName}</div>
    <div class="body">{memo.body}</div>
  </div>
  <div class="right-side">
    {#if link}
      <button on:click={onLinkClick}>
        <div class="icon">
          <i class="fas fa-external-link-alt" />
        </div>
      </button>
    {/if}
    <button on:click={onShareClick}>
      <div class="icon">
        <i class="fas fa-link" />
      </div>
    </button>
  </div>
</div>

<style lang="scss">
  .memo-entry {
    display: flex;
    height: 50px;
    color: #fff;
    padding: 5px 0px;
    padding-top: 10px;
    border-bottom: 1px solid #1c2027;

    &:first-child {
      padding-top: 5px;
    }
    .left-side {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      overflow: hidden;
      border-radius: 15px;
      margin-right: 8px;

      img {
        width: 30px;
        height: 30px;
      }
    }

    .main {
      width: 0px;
      flex-grow: 1;

      .header {
        font-size: 12px;
        line-height: 20px;
        color: #e0e0e0;
        padding-top: 0px;
      }

      .body {
        width: 100%;
        max-lines: 1;
        color: #eee;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .right-side {
      width: 80px;
      height: 30px;
      padding: 10px 0px;
      text-align: end;

      button {
        width: 30px;
        height: 30px;
        color: #ffffff;
        border: 1px solid #1c2027;
        background-color: #1c2027;

        -webkit-transition: 0.4s;
        transition: 0.4s;

        &:hover {
          border-color: #ff4081;
          color: #ff4081;
        }
        .icon {
          width: 16px;
          height: auto;
          font-size: 12px;
          font-weight: 600;
        }
      }
      flex-shrink: 0;
    }
  }
</style>
