<script lang="ts">
    import type { Bookmark } from '../../../model/bookmark/Bookmark';
    import { BookmarkService } from '../../../service/BookmarkService';

    export let bookmark: Bookmark;

    function onDeleteClick() {
        BookmarkService.removeBookmark(bookmark);
    }
</script>

<div class="item">
    <div class="title">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="icon" src={bookmark.icon} />
        <p>{bookmark.title}</p>
    </div>

    <div class="button" on:click={(_) => onDeleteClick()}>
        <button>delete</button>
    </div>
</div>

<style lang="scss">
    .item {
        width: 100%;
        height: 42px;
        padding-bottom: 10px;
        padding-top: 10px;
        display: flex;

        &:first-child {
            padding-top: 0px;
        }

        .title {
            width: 80%;
            height: 42px;
            float: left;

            .icon {
                float: left;
                width: 42px;
                height: 42px;
            }

            p {
                margin-left: 10px;
                font-size: 18px;
                padding: 12px;
                color: var(--primary-foreground-color);
            }
        }
    }
</style>
