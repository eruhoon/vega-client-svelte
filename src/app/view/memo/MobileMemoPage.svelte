<script lang="ts">
  import { onMount } from 'svelte';
  import type { Memo } from '../../model/memo/Memo';
  import { MemoService } from '../../service/MemoService';
  import { WindowService } from '../../service/WindowService';
  import MemoDetailView from './MemoDetailView.svelte';
  import MobileMemoEntry from './MobileMemoEntry.svelte';

  let memos: Memo[] = [];
  let currentMemo: Memo = null;

  onMount(async () => {
    MemoService.memos.subscribe((it) => (memos = it));
    MemoService.currentMemo.subscribe((it) => (currentMemo = it));

    MemoService.refresh();
  });

  function onAddClick() {
    WindowService.openModal('upload-memo');
  }
</script>

<div class="memo-main-content">
  <div class="header">
    <div class="left-side">
      <button on:click={onAddClick}><i class="fas fa-plus" /></button>
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="mm-search-input">
      <input type="text" />
      <span class="icon">
        <i class="fas fa-search" />
      </span>
    </div>
  </div>
  <div class="memo-list">
    {#each memos as memo (memo.hash)}
      <MobileMemoEntry {memo} />
    {/each}
  </div>
</div>

{#if currentMemo !== null}
  <MemoDetailView memo={currentMemo} />
{/if}

<style lang="scss">
  .memo-main-content {
    $h-padding: 10px;
    width: calc(100% - #{$h-padding * 2});
    padding: 0 $h-padding;
    height: 100%;
    margin: 0;
    position: relative;
    float: left;
    overflow-y: scroll;
  }

  .header {
    position: relative;
    display: flex;
    width: 100%;
    height: 50px;
    padding-top: 25px;
    padding-bottom: 20px;

    .left-side {
      width: 50px;
      flex-shrink: 0;
      text-align: center;

      button {
        width: 50px;
        height: 50px;
        padding: 0;
        color: var(--primary-foreground-color);
        border: 1px solid var(--primary-hoverground-color);
        background-color: var(--primary-hoverground-color);

        -webkit-transition: 0.4s;
        transition: 0.4s;

        &:hover {
          border-color: var(--primary-activeground-color);
          color: var(--primary-activeground-color);
        }

        i {
          text-align: center;
          line-height: 50px;
          font-size: 20px;
        }
      }
    }

    .mm-search-input {
      flex-grow: 1;
      width: 0;
      height: 50px;
      position: relative;
      float: left;

      input {
        width: 100%;
        height: 50px;
        line-height: 20px;
        font-size: 14px;

        padding: 7px 15px;
        padding-right: 40px;
        border-radius: 0px;
        border: 1px solid var(--primary-hoverground-color);
        outline: none;
        background-color: var(--primary-background-color);
      }

      .icon {
        width: 36px;
        height: 36px;
        padding-left: 10px;
        padding-right: 10px;

        position: absolute;
        right: 0;
        top: 7px;

        text-align: center;
        line-height: 36px;
        border-left: 1px solid var(--primary-foreground-color);
        color: var(--primary-foreground-color);

        i {
          font-size: 20px;
        }
      }
    }
  }

  .memo-list {
    width: 100%;
    height: 100%;
  }

  .memo-main-content {
    color: var(--primary-foreground-color);
    .mm-search {
      input {
        color: var(--primary-foreground-color);
      }
    }
  }
</style>
