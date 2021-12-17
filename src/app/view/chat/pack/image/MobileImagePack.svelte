<script lang="ts">
  import { ChatService } from '../../../../service/ChatService';
  import { OptionService } from '../../../../service/OptionService';
  import { WindowService } from '../../../../service/WindowService';

  export let body = '';
  let dataSaveMode = false;
  let menuMode = false;
  let hidden = false;

  const openImageViewerPopup = () => {
    WindowService.openImageViewerPopup(body);
  };

  OptionService.enableDataSave.subscribe((it) => (dataSaveMode = !it));

  function onImageLoaded() {
    ChatService.requestScrollDown();
  }
</script>

<div class="container" on:click={(_) => (menuMode = true)}>
  {#if dataSaveMode}
    <div class="image-wrapper" class:hidden>
      <img class="image" src={body} alt="이미지" on:load={onImageLoaded} />
      <div class="alt">Hidden</div>
    </div>
    {#if menuMode}
      <div
        class="menu-wrapper"
        on:click|stopPropagation={(_) => (menuMode = false)}
      >
        <div class="menu-list">
          <div>
            {#if hidden}
              <button on:click={(_) => (hidden = false)}>
                <i class="fas fa-eye" />
              </button>
            {:else}
              <button on:click={(_) => (hidden = true)}>
                <i class="fas fa-eye-slash" />
              </button>
            {/if}
            <button on:click={openImageViewerPopup}>
              <i class="far fa-folder-open" />
            </button>
          </div>
        </div>
      </div>
    {/if}
  {:else}
    <div on:click={(_) => (dataSaveMode = true)}>이미지</div>
  {/if}
</div>

<style lang="scss">
  .container {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .image-wrapper {
    width: 100%;
    height: auto;
    text-align: center;

    .alt {
      display: none;
      position: absolute;
      left: 0;
      top: 30px;
      width: 100%;
    }

    &.hidden {
      img {
        visibility: hidden;
      }

      .alt {
        display: block;
      }
    }
  }

  .image {
    max-width: 90%;
    height: auto;
    max-height: 300px;
    background: #1f2226;
    border: 1px solid rgb(10, 12, 14);
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .menu-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: black;
      opacity: 0.3;
    }

    .menu-list {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
