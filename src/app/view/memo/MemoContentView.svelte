<script lang="ts">
  import { onMount } from 'svelte';
  import type { Memo } from '../../model/memo/Memo';
  import { MemoService } from '../../service/MemoService';
  import MemoDetailView from './MemoDetailView.svelte';
  import MemoMainView from './MemoMainView.svelte';
  import MemoUploadView from './MemoUploadView.svelte';

  let uploadMode = false;
  let memos = [];
  let currentMemo: Memo = null;

  function onUploadClick() {
    MemoService.setUploadMode(true);
  }

  onMount(() => {
    MemoService.memos.subscribe((it) => (memos = it));
    MemoService.currentMemo.subscribe((it) => (currentMemo = it));
    MemoService.uploadMode.subscribe((it) => (uploadMode = it));
  });
</script>

<div class="memo-page">
  <div class="left-menu">
    <h2>
      마이<br />
      캐스트<br />
      메모
    </h2>
    <div class="mm-menu-list">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="mm-m-li">
        <i class="material-icons">insert_drive_file</i>
        <p>메모</p>
      </a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="mm-m-li mm-li-btm" on:click={onUploadClick}>
        <i class="material-icons">edit</i>
        <p>업로드</p>
      </a>
    </div>
  </div>
  <MemoMainView {memos} />
  {#if currentMemo !== null}
    <MemoDetailView memo={currentMemo} />
  {/if}
  {#if uploadMode}
    <MemoUploadView />
  {/if}
</div>

<style lang="scss">
  .memo-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0%;
    padding: 0%;

    .left-menu {
      width: 200px;
      height: calc(100% - 20px);
      margin: 10px;
      border-right: 1px solid;

      position: relative;

      float: left;
      h2 {
        width: 180px;
        text-align: right;
        padding: 10px;
        font-size: 36px;
      }
      .mm-menu-list {
        width: 40px;
        padding-right: 10px;
        padding-left: 150px;
        text-align: right;

        .mm-m-li {
          width: 40px;
          height: 60px;
          display: block;
          text-align: center;

          margin-bottom: 15px;

          i {
            font-size: 28px;
            line-height: 32px;
          }
          p {
            width: auto;
            height: auto;
            padding: 0%;
            margin: 0%;
            font-size: 14px;
          }
        }
        .mm-li-btm {
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }
    }
  }
</style>
