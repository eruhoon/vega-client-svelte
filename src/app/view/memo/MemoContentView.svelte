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

  onMount(() => {
    MemoService.memos.subscribe((it) => (memos = it));
    MemoService.currentMemo.subscribe((it) => (currentMemo = it));
    MemoService.uploadMode.subscribe((it) => (uploadMode = it));

    MemoService.refresh();
  });
</script>

<div class="memo-page">
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
  }
</style>
