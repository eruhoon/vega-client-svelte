<script lang="ts">
  import { ToastService } from '../../../service/ToastService';
  import { WindowService } from '../../../service/WindowService';

  export let body: string;
  let thumbnail: string = '';
  let title: string = '';
  let link: string = '';
  $: {
    const json = JSON.parse(body);
    title = json.info.title;
    thumbnail = json.info.thumbnail;
    link = json.uri;
  }

  const openWindow = () => {
    if (link.includes('.m3u8')) {
      WindowService.openContent({ type: 'hls', src: link });
    } else {
      window.open(link);
    }
  };

  const openContent = () =>
    WindowService.openContent({ type: 'iframe', src: link });

  function onCopyClick() {
    copyLink();
    ToastService.toastText('복사완료');
  }

  function copyLink() {
    const t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = link;
    t.select();
    document.execCommand('copy', false);
    document.body.removeChild(t);
  }
</script>

<div
  class="root"
  class:thumbnail-attched={thumbnail}
  on:click={openWindow}
  on:contextmenu|preventDefault={openContent}
>
  {#if thumbnail}
    <img class="thumbnail" alt="thumbnail" src={thumbnail} />
  {/if}
  <div class="info">
    <div class="info-header">
      <div class="title">{title}</div>
      <div class="menu">
        <button on:click|stopPropagation={onCopyClick}>
          <i class="fas fa-copy" />
        </button>
      </div>
    </div>
    <div class="link">{link}</div>
  </div>
</div>

<style lang="scss">
  @mixin truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .root {
    display: flex;
    position: relative;
    width: 100%;
    height: 60px;
    margin: 3px 0 3px 0;
    font-size: 12px;
    line-height: 15px;
    word-break: break-all;
    justify-content: center;

    &.thumbnail-attched {
      height: 150px;
    }

    &::before {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      content: '';
      background: var(--primary-hoverground-color);
      opacity: 0.75;
      border: 1px solid var(--primary-borderground-color);
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    .info-header {
      display: flex;
      position: absolute;
      bottom: 35px;
      left: 10px;
      width: calc(100% - 20px);
      height: 20px;
      padding: 0 5px;
      border-bottom: solid 1px var(--primary-borderground-color);
      font-size: 15px;
      line-height: 20px;
      color: var(--primary-foreground-color);

      .title {
        flex-grow: 1;
        @include truncate;
      }

      .menu {
        flex-shrink: 0;
        width: auto;

        button {
          width: 20px;
          height: 20px;
          padding: 0;
          margin: 0;
          border: none;
          border-radius: 10px;
          outline: none;

          background: var(--primary-hoverground-color);
          color: var(--primary-foreground-color);

          &:hover {
            color: var(--primary-activeground-color);
          }
        }
      }
    }

    .link {
      position: absolute;
      bottom: 3px;
      left: 15px;
      width: calc(100% - 55px);
      height: 30px;
      font-size: 12px;
      color: var(--primary-foreground-color);
      overflow: hidden;
    }

    .thumbnail {
      max-width: 100%;
      max-height: 100%;
      opacity: 0.3;
    }
  }
</style>
