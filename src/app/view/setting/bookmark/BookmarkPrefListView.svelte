<script lang="ts">
  import type { Bookmark } from '../../../model/bookmark/Bookmark';
  import BookmarkPrefListItem from './BookmarkPrefListItem.svelte';

  export let bookmarks: Bookmark[] = [];
</script>

<div class="container">
  <div class="bookmark-list-title">
    <h4>북마크 리스트</h4>
  </div>
  {#if bookmarks.length === 0}
    <div class="none-list">
      <i class="fas fa-times svelte-gc06z3" aria-hidden="true" />
      <h3>북마크가 없습니다.</h3>
    </div>
  {:else}
    <div class="bookmark-list">
      {#each bookmarks as bookmark}
        <BookmarkPrefListItem {bookmark} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    width: calc(100% - 30px);
    height: auto;
    padding: 0px 15px;

    .bookmark-list-title {
      width: 100%;
      height: 30px;
      padding: 15px;
      margin: 0px -15px;
      margin-bottom: 15px;

      background: #1f2226;
      h4 {
        width: 100%;
        padding: 6px 0px;
      }
    }
    .none-list {
      width: calc(100%);
      height: auto;
      text-align: center;
      padding-bottom: 20px;

      i {
        font-size: 72px;
        padding-top: 30px;
        padding-bottom: 15px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
</style>
