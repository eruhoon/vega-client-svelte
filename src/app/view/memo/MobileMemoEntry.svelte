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
        <i class="fas fa-external-link-alt" />
      </button>
    {/if}
    <button on:click={onShareClick}><i class="fas fa-link" /></button>
  </div>
</div>

<style lang="scss">
  .memo-entry {
    display: flex;
    height: 50px;
    color: #e8e8e8;

    .left-side {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      img {
        width: 30px;
        height: 30px;
      }
    }

    .main {
      width: 0px;
      flex-grow: 1;

      .header {
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        padding-top: 0px;
      }

      .body {
        width: 100%;
        max-lines: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }

    .right-side {
      width: 80px;
      text-align: end;

      button {
        width: 30px;
        height: 30px;
      }
      flex-shrink: 0;
    }
  }
</style>
