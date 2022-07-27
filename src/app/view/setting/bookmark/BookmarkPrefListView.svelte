<script lang="ts">
    import type { Bookmark } from '../../../model/bookmark/Bookmark';
    import BookmarkPrefListItem from './BookmarkPrefListItem.svelte';

    export let bookmarks: Bookmark[] = [];
</script>

<div>
    {#if bookmarks.length === 0}
        empty
    {:else}
        {#each bookmarks as bookmark}
            <BookmarkPrefListItem {bookmark} />
        {/each}
    {/if}
</div>
