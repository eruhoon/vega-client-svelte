<script lang="ts">
  import { onMount } from "svelte";
  import type { Bookmark } from "../../../model/bookmark/Bookmark";
  import type { ContentHistory } from "../../../model/history/ContentHistory";
  import { BookmarkService } from "../../../service/BookmarkService";
  import { ContentHistoryService } from "../../../service/ContentHistoryService";
  import { OptionService } from "../../../service/OptionService";
  import StreamList from "../../stream/StreamList.svelte";
  import BookmarkItem from "./bookmark/BookmarkBottomBarItem.svelte";
  import ContentHistoryItem from "./ContentHistoryItem.svelte";

  let rightAlign: boolean = false;
  let bookmarks: Bookmark[] = [];
  let histories: ContentHistory[] = [];

  onMount(() => {
    OptionService.enableCheckerRightAlign.subscribe((it) => {
      rightAlign = it;
    });
    BookmarkService.bookmarks.subscribe((it) => (bookmarks = it));
    ContentHistoryService.histories.subscribe((it) => (histories = it));
  });
</script>

<div class="bottom-bar" class:right-align={rightAlign}>
  <StreamList />
  {#each bookmarks as bookmark}
    <BookmarkItem
      title={bookmark.title}
      icon={bookmark.icon}
      link={bookmark.link}
    />
  {/each}
  {#each histories as history}
    <ContentHistoryItem {history} />
  {/each}
</div>

<style lang="scss">
  .bottom-bar {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    background: var(--primary-background-color);
    border: 1px solid var(--primary-hoverground-color);

    box-shadow: var(--primary-box-shadow);

    &.right-align {
      justify-content: flex-end;
    }
  }
</style>
