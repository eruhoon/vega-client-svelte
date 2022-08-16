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

  <button class="btn" on:click={(_) => onDeleteClick()}>
    <i class="fas fa-times svelte-gc06z3" aria-hidden="true" />
  </button>
</div>

<style lang="scss">
  .item {
    width: calc(100% + 30px);
    height: 50px;
    padding-bottom: 10px;
    padding-top: 10px;

    margin-left: -15px;
    border-bottom: 1px solid var(--primary-hoverground-color);

    display: flex;

    &:first-child {
      padding-top: 0px;
    }

    .title {
      width: 80%;
      height: 50px;
      float: left;

      .icon {
        float: left;
        width: 50px;
        height: 50px;
        margin-right: 15px;
      }

      p {
        font-size: 18px;
        padding: 12px;
        color: var(--primary-foreground-color);
      }
    }
    .btn {
      width: 50px;
      height: 50px;
      margin-right: 15px;

      background-color: var(--primary-hoverground-color);
      border: 1px solid var(--primary-hoverground-color);
      border-radius: 0%;
      text-align: center;

      i {
        font-size: 24px;
        line-height: 40px;
        padding-left: 1px;
        color: var(--primary-foreground-color);
      }

      &:hover {
        background-color: var(--primary-activeground-color);
        border: 1px solid var(--primary-activeground-color);

        i {
          color: var(--primary-activeground-font-color);
        }
      }

      &:active {
        background-color: var(--primary-activeground-color);
        border-color: var(--primary-activeground-color);

        i {
          color: var(--primary-activeground-font-color);
        }
      }
    }
  }
</style>
