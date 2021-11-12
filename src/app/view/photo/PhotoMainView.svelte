<script lang="ts">
  import { VegaPhotoLoader } from '../../model/photo/loader/VegaPhotoLoader';
  import type { Photo } from '../../model/photo/Photo';
  import PhotoEntry from './PhotoEntry.svelte';

  const CHUNK_SIZE = 100;
  const photoLoader = new VegaPhotoLoader();

  let offset = 0;
  let photos: Photo[] = [];
  let photoSets = [{ dateString: '' }];
  let scroller: HTMLDivElement;
  let loading = false;
  let timer = -1;

  async function load(start: number) {
    if (loading) {
      return;
    }
    loading = true;
    const loaded = await photoLoader.load({
      q: '',
      start: start,
      length: CHUNK_SIZE,
    });
    photos = [...photos, ...loaded];
    loading = false;
    offset += CHUNK_SIZE;
  }

  load(offset);

  function onScroll() {
    const diff = scroller.scrollHeight - scroller.scrollTop;
    const threashold = scroller.clientHeight * 2;
    if (diff < threashold) {
      load(offset);
    }
  }

  function onKeyDown() {
    clearTimeout(this.mTimer);
    timer = Number(
      setTimeout(() => {
        searchPhoto();
        timer = -1;
      }, 600)
    );
  }

  function searchPhoto() {
    const elm = this.mSearchInput.nativeElement;
    const query = elm.value;
    this.mService.search(query);
  }
</script>

<div bind:this={scroller} class="photo-main-content" on:scroll={onScroll}>
  <div class="ph-search">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>검색</label>
    <div class="ph-search-input">
      <input type="text" on:keyup={onKeyDown} />
      <i class="material-icons">search</i>
    </div>
  </div>
  {#each photoSets as photoSet}
    <div class="ph-d-list">
      <p>{photoSet.dateString}</p>
      <div class="ph-list">
        {#each photos as photo}
          <PhotoEntry
            originalHeight={photo.height}
            originalWidth={photo.width}
            adult={photo.isForAdult}
            thumbnail={photo.url}
          />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .photo-main-content {
    width: calc(100% - 231px);
    height: 100%;
    margin: 0%;
    padding-left: 10px;
    position: relative;
    float: left;
    overflow-y: scroll;

    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      border: 3px solid;
    }

    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      height: 50px;
      width: 50px;
      -webkit-border-radius: 8px;
      border-radius: 8px;
    }

    .ph-search {
      width: 100%;
      height: 36px;
      padding-top: 25px;
      padding-bottom: 20px;
      position: relative;

      label {
        width: 40px;
        font-size: 16px;
        line-height: 36px;
        margin-left: 10px;
        float: left;
      }

      .ph-search-input {
        width: calc(50% - 30px);
        height: 36px;
        position: relative;
        float: left;

        input {
          width: calc(100% - 64px);
          height: 20px;
          line-height: 20px;
          font-size: 14px;

          padding: 7px 15px;
          padding-right: 40px;
          border-radius: 25px;
          border: 1px solid;
          outline: none;
        }

        i {
          width: 36px;
          height: 36px;

          position: absolute;
          right: 9px;
          top: 1px;

          text-align: center;
          line-height: 36px;
        }
      }
    }

    .ph-d-list {
      width: 100%;
      height: auto;
      margin-bottom: 20px;

      p {
        width: auto;
        height: 20px;
        font-size: 16px;
        line-height: 20px;
        margin-left: 10px;
      }

      .ph-list {
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .photo-main-content {
      width: calc(100% - 10px);
      height: 100%;
      margin: 0%;
      padding-left: 10px;
      position: relative;
      float: left;
      overflow-y: scroll;

      scrollbar-width: thin;

      .ph-search {
        width: calc(100% - 10px);
        height: 36px;
        padding-top: 25px;
        padding-bottom: 20px;
        position: relative;

        label {
          display: none;
        }

        .ph-search-input {
          width: 100%;
          height: 36px;
          position: relative;
          float: left;

          input {
            width: calc(100% - 60px);
            height: 20px;
            line-height: 20px;
            font-size: 14px;

            padding: 7px 15px;
            padding-right: 40px;
            border-radius: 25px;
            border: 1px solid;
            outline: none;
          }

          i {
            width: 36px;
            height: 36px;

            position: absolute;
            right: 9px;
            top: 1px;

            text-align: center;
            line-height: 36px;
          }
        }
      }
      .ph-d-list {
        width: 100%;
        height: auto;
        margin-bottom: 10px;

        p {
          width: auto;
          height: 20px;
          font-size: 16px;
          line-height: 20px;
          margin-left: 10px;
          margin: 0px;
          padding: 0px;
        }
      }
    }
  }
</style>
