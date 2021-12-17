<script lang="ts">
  import { get } from 'svelte/store';
  import { OptionService } from '../../../service/OptionService';
  import { WindowService } from '../../../service/WindowService';
  import { MobileUtils } from '../../../util/mobile/MobileUtils';
  import { PopupContentService } from '../../popup/PopupContentService';

  export let body: string;
  let isDataSave = !get(OptionService.enableDataSave);

  let isError: boolean = false;
  $: json = parseJson(body);
  $: title = json.title;
  $: thumbnail = json.thumbnail;
  $: description = json.description;
  $: link = json.link;
  $: timeText = json.time > 0 ? getTimeText(json.time) : null;

  function parseJson(body: string) {
    if (!body) {
      isError = true;
      return {};
    }
    return JSON.parse(body);
  }

  function onClick() {
    if (MobileUtils.isMobile()) {
      WindowService.openContent({ type: 'iframe', src: link });
    } else {
      PopupContentService.addContent({
        type: 'iframe',
        src: {
          link,
          title: 'YoutubePack',
        },
      });
    }
  }

  function onContextMenu() {
    WindowService.openContent({ type: 'iframe', src: link });
  }

  function getTimeText(time: number): string {
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const s = time % 60;
    const hStr = h > 0 ? `${h}h` : '';
    const mStr = h > 0 || m > 0 ? `${m}m` : '';
    const sStr = `${s}s`;
    return `${hStr} ${mStr} ${sStr}`;
  }

  OptionService.enableDataSave.subscribe((it) => (isDataSave = it));
</script>

{#if isError}
  <div>잘못된 Youtube</div>
{:else if isDataSave}
  <div on:click={onClick} on:contextmenu|preventDefault={onContextMenu}>
    <strong>[Youtube: {title}]</strong>
  </div>
{:else}
  <div
    class="youtube-pack"
    on:click={onClick}
    on:contextmenu|preventDefault={onContextMenu}
  >
    <img class="thumbnail" src={thumbnail} alt="유튜브 썸네일" />
    <div class="logo description-added" />
    <div class="title description-added">{title}</div>
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee class="description" scrollamount="3">{description}</marquee>
    {#if timeText}
      <div class="time">{timeText}</div>
    {/if}
  </div>
{/if}

<style lang="scss">
  @mixin truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @mixin marquee($time) {
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    animation: marquee $time linear infinite;
  }

  .youtube-pack {
    display: flex;
    position: relative;
    width: 230px;
    height: 130px;
    margin: 3px 0 3px 0;
    font-size: 12px;
    line-height: 15px;
    word-break: break-all;
    align-items: center;
    border-radius: 2px;
    overflow: hidden;
    cursor: default;
    color: #e8e8e8;
    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      content: '';
      background: #000;
      opacity: 0.9;
    }
    &:hover {
      &::before {
        opacity: 0.6;
      }
    }

    .thumbnail {
      position: absolute;
      width: 100%;
      opacity: 0.3;
    }
    .logo {
      position: absolute;
      top: 8px;
      left: 10px;
      width: 50px;
      height: 22px;
      border-radius: 2px;
      opacity: 0.8;
      // background: $youtube-logo;
      &.description-added {
        bottom: 25px;
      }
    }
    .title {
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: calc(100% - 14px);
      height: 20px;
      padding: 0px 7px;
      border-bottom: solid 1px #aaa;
      font-size: 15px;
      line-height: 20px;
      @include truncate;
      &:hover {
        @include marquee(5s);
      }
      &.description-added {
        bottom: 25px;
      }
    }
    .description {
      position: absolute;
      bottom: 5px;
      left: 5px;
      width: calc(100% - 10px);
      height: 15px;
      font-size: 12px;
      line-height: 15px;
    }
    .time {
      display: flex;
      align-items: center;
      position: absolute;
      right: 5px;
      top: 10px;
      height: 20px;
    }
  }
</style>
