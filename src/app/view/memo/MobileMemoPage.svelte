<script lang="ts">
  import { onMount } from 'svelte';
  import { VegaMemoLoader } from '../../model/memo/loader/VegaMemoLoader';
  import type { Memo } from '../../model/memo/Memo';
  import MobileMemoEntry from './MobileMemoEntry.svelte';

  const loader = new VegaMemoLoader();

  export let memos: Memo[] = [];

  onMount(async () => {
    memos = await loader.load();
  });
</script>

<div class="memo-main-content">
  <div class="mm-search">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>검색</label>
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

  .mm-search {
    width: calc(100% - 10px);
    height: 50px;
    padding-top: 25px;
    padding-bottom: 20px;
    position: relative;

    label {
      display: none;
    }

    .mm-search-input {
      width: 100%;
      height: 50px;
      position: relative;
      float: left;

      input {
        width: calc(100% - 10px);
        height: 50px;
        line-height: 20px;
        font-size: 14px;

        padding: 7px 15px;
        padding-right: 40px;
        border-radius: 2px;
        border: 1px solid #1c2027;
        outline: none;
        background-color: #2a2f38;
      }

      .icon {
        width: 36px;
        height: 36px;
        padding-left: 10px;

        position: absolute;
        right: 20px;
        top: 7px;

        text-align: center;
        line-height: 36px;
        border-left: 1px solid #ffffff;
        color: #ffffff;

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
    .mm-search {
      input {
        color: #ffffff;
      }
    }
  }
</style>
