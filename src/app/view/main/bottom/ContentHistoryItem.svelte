<script lang="ts">
  import { onMount } from "svelte";
  import type { ContentHistory } from "../../../model/history/ContentHistory";
  import { ContentHistoryService } from "../../../service/ContentHistoryService";
  import { OptionService } from "../../../service/OptionService";
  import { WindowService } from "../../../service/WindowService";
  import BottomBarItem from "./BottomBarItem.svelte";

  export let history: ContentHistory;

  $: icon = history.icon;
  $: thumbnail = history.thumbnail;
  $: title = history.title;
  $: description = history.description;
  $: link = history.link;
  let rightAlign: boolean;

  onMount(() => {
    OptionService.enableCheckerRightAlign.subscribe((it) => (rightAlign = it));
  });

  function onIconClick() {
    WindowService.openContent({ type: "iframe", src: link });
  }

  function onExitClick() {
    ContentHistoryService.removeHistory(history);
  }
</script>

<BottomBarItem {icon} on:iconclick={onIconClick}>
  <div class="detail" class:thumbnail class:right-align={rightAlign}>
    {#if thumbnail}
      <img
        class="thumbnail"
        alt="thumbnail"
        src={thumbnail}
        style="display: inline"
        on:error={() => (thumbnail = "")}
      />
    {/if}
    <div class="bridge">
      <button class="icon" on:click={onExitClick}>
        <i class="fas fa-times" />
      </button>
    </div>
    <div class="wrapper">
      <div class="text">
        <h4 class="title">{title}</h4>
      </div>
      <p class="description">{description}</p>
    </div>
  </div>
</BottomBarItem>

<style lang="scss">
  $background-color: var(--primary-background-color);
  $width: 240px;

  .detail {
    align-items: center;
    width: $width;
    height: 120px;
    border-radius: 2px;
    background: $background-color;
    border-radius: 0px;
    overflow: hidden;
    box-shadow: var(--primary-box-shadow);

    &.thumbnail {
      height: 195px;
    }

    &.right-align {
      left: auto;
      right: 5px;
    }

    .thumbnail {
      width: $width;
      max-height: 135px;
      padding-bottom: 65px;
    }

    .bridge {
      width: auto;
      height: auto;
      position: absolute;
      right: 5px;
      top: 5px;
      button {
        width: 32px;
        height: 32px;
        border: 0px;
        border-radius: 20px;
        margin: 2px;
        padding: 0%;
        color: var(--primary-foreground-color);
        background-color: var(--primary-background-color);

        &:hover {
          background-color: var(--primary-activeground-color);
          color: var(--primary-activeground-font-color);
        }

        i {
          font-size: 12px;
          line-height: 32px;
        }
      }
    }

    .wrapper {
      width: 100%;
      height: 60px;

      position: absolute;
      left: 0px;
      bottom: 0px;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.75))
      );
      background: var(--primary-background-color);

      .text {
        width: calc(100% - 10px);
        margin-left: 10px;
        margin-top: 10px;

        .title {
          width: calc(100% - 90px);
          text-align: left;
          color: var(--primary-foreground-color);
          font-size: 18px;
          font-weight: bold;
          margin: 0%;
          padding: 0%;
          opacity: 1;
          padding-bottom: 5px;
          float: left;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .description {
        width: calc(100% - 20px);
        max-height: 30px;
        text-align: left;
        color: #eee;
        font-size: 9px;
        overflow: hidden;
        padding: 0%;
        margin-left: 10px;
      }
    }
  }
</style>
