<script lang="ts">
  import { onMount } from 'svelte';
  import { ClipboardImageParser } from '../../model/clipboard/ClipboardImageParser';
  import type { Photo } from '../../model/photo/Photo';
  import PhotoEntry from './PhotoEntry.svelte';
  import PhotoInterface from './PhotoInterface.svelte';
  import { PhotoService } from './PhotoService';
  import PhotoUploadProgressView from './PhotoUploadProgressView.svelte';
  import { PhotoUploadService } from './PhotoUploadService';

  const imageParser = new ClipboardImageParser();
  let photos: Photo[] = [];
  let photoSets = [{ dateString: '' }];
  let scroller: HTMLDivElement;
  let uploading: boolean = false;
  let uploadInput: HTMLInputElement;
  let uploadingFile: File | null = null;

  onMount(() => {
    PhotoService.photos.subscribe((it) => (photos = it));
    PhotoService.init('');

    PhotoUploadService.uploading.subscribe((it) => (uploading = it));
    PhotoUploadService.uploadingFile.subscribe((it) => (uploadingFile = it));
  });

  function onScroll() {
    const diff = scroller.scrollHeight - scroller.scrollTop;
    const threashold = scroller.clientHeight * 2;
    if (diff < threashold) {
      PhotoService.loadMore();
    }
  }

  function onUploadFileStaged() {
    if (!uploadInput.files || !uploadInput.files[0]) {
      console.error('no files');
      return;
    }
    const item = uploadInput.files[0];
    uploadImageFile(item);
  }

  function onPaste(event: ClipboardEvent) {
    const imageFile = imageParser.parseImageFile(event.clipboardData);
    uploadImageFile(imageFile);
  }

  function onDrop(event: DragEvent) {
    const imageFile = imageParser.parseImageFile(event.dataTransfer);
    uploadImageFile(imageFile);
  }

  async function uploadImageFile(imageFile: File | null) {
    if (!imageFile) {
      console.error('null image');
      return;
    }
    console.log('url ', imageFile);
    const photo = await PhotoUploadService.uploadByFile(imageFile);
    PhotoService.addPhoto(photo);
  }
</script>

<div
  bind:this={scroller}
  class="photo-main-content"
  on:scroll={onScroll}
  on:paste={onPaste}
  on:dragover|preventDefault
  on:drop|preventDefault={onDrop}
>
  <div class="ph-navbar">
    <PhotoInterface
      on:onsearch={(e) => PhotoService.init(e.detail)}
      on:onuploadclick={(_) => uploadInput.click()}
    />
  </div>
  {#each photoSets as photoSet}
    <div class="ph-d-list">
      <p>{photoSet.dateString}</p>
      <div class="ph-list">
        {#each photos as photo}
          <PhotoEntry
            {photo}
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
<form enctype="multipart/form-data">
  <input
    type="file"
    accept="image/*"
    on:change={onUploadFileStaged}
    bind:this={uploadInput}
  />
</form>
{#if uploading}
  <PhotoUploadProgressView file={uploadingFile} />
{/if}

<style lang="scss">
  .photo-main-content {
    width: auto;
    height: 100%;
    margin: 0%;
    padding-left: 10px;
    position: relative;
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

    .ph-navbar {
      width: 100%;
      height: auto;
      display: flex;
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
        color: #ffffff;
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

  // 컬러 스크롤링 컬러셋
  .photo-main-content {
    background-color: #2a2f38;
    scrollbar-color: #ff4081 #2a2f38;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      border-color: #2a2f38;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-track {
      background: #2a2f38;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff4081;
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
