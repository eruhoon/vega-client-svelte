<script lang="ts">
  import { onMount } from 'svelte';
  import { ClipboardImageParser } from '../../model/clipboard/ClipboardImageParser';
  import type { Photo } from '../../model/photo/Photo';
  import PhotoEntry from './PhotoEntry.svelte';
  import { PhotoService } from './PhotoService';
  import { PhotoUploadService } from './PhotoUploadService';

  const imageParser = new ClipboardImageParser();
  let searchQuery: string;
  let photos: Photo[] = [];
  let photoSets = [{ dateString: '' }];
  let scroller: HTMLDivElement;
  let timer = -1;
  let uploadFiles: FileList;
  let uploading: boolean = false;

  let uploadingFile: File | null = null;
  let uploadingFilePath: string | null = null;
  $: uploadingFileSize = uploadingFile
    ? `${Math.round((uploadingFile.size / 1024) * 10) / 10} KB`
    : '- KB';
  $: uploadingFileType = uploadingFile
    ? uploadingFile.type.split('/')[1].toUpperCase()
    : 'PNG';

  onMount(() => {
    PhotoService.photos.subscribe((it) => (photos = it));
    PhotoService.init('');

    PhotoUploadService.uploading.subscribe((it) => (uploading = it));
    PhotoUploadService.uploadingBase64.subscribe(
      (it) => (uploadingFilePath = it)
    );
    PhotoUploadService.uplaodingFile.subscribe((it) => (uploadingFile = it));
  });

  function onScroll() {
    const diff = scroller.scrollHeight - scroller.scrollTop;
    const threashold = scroller.clientHeight * 2;
    if (diff < threashold) {
      PhotoService.loadMore();
    }
  }

  function onKeyDown() {
    clearTimeout(timer);
    timer = Number(
      setTimeout(() => {
        PhotoService.init(searchQuery);
        timer = -1;
      }, 600)
    );
  }

  function onUploadFileStaged() {}

  function onPaste(event: ClipboardEvent) {
    const imageFile = imageParser.parseImageFile(event.clipboardData);
    uploadImageFile(imageFile);
  }

  function onDrop(event: DragEvent) {
    const imageFile = imageParser.parseImageFile(event.dataTransfer);
    uploadImageFile(imageFile);
  }

  function uploadImageFile(imageFile: File | null): void {
    if (!imageFile) {
      console.error('null image');
      return;
    }
    console.log('url ', imageFile);
    PhotoUploadService.addPhotoByFile(imageFile);
  }
</script>

<div
  bind:this={scroller}
  class="photo-main-content"
  on:scroll={onScroll}
  on:paste={onPaste}
  on:drop={onDrop}
>
  <div class="ph-navbar">
    <div class="ph-search">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>검색</label>
      <div class="ph-search-input">
        <input type="text" on:keyup={onKeyDown} bind:value={searchQuery} />
        <spna class="icon">
          <i class="fas fa-search" />
        </spna>
      </div>
    </div>
    <div class="ph-upload">
      <button class="upload-btn">
        <div class="icon">
          <i class="fas fa-file-upload" />
        </div>
        <p>업로드</p>
      </button>
    </div>
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
  <input type="file" on:change={onUploadFileStaged} bind:files={uploadFiles} />
</form>
{#if uploading}
  <div class="photo-upload-view">
    <div class="photo-img-box">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={uploadingFilePath} />
    </div>
    <div class="photo-info-box">
      <h4>{uploadingFile?.name}</h4>
      <p>{uploadingFileSize} / {uploadingFileType}</p>
    </div>
    <div class="photo-state">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src="/assets/image/photo/loader-large.gif" />
    </div>
  </div>
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
    .ph-upload {
      width: 50%;
      height: 50px;
      padding-top: 25px;
      padding-bottom: 20px;

      .upload-btn {
        width: auto;
        height: 50px;
        padding: 7px 15px;
        margin-right: 15px;
        border-radius: 2px;

        float: right;
        outline: none;
        color: #ffffff;
        border: 1px solid #1c2027;
        background-color: #1c2027;

        line-height: 20px;
        font-size: 14px;

        display: flex;

        -webkit-transition: 0.4s;
        transition: 0.4s;

        &:hover {
          border-color: #ff4081;
          color: #ff4081;
        }

        .icon {
          width: 30px;
          height: auto;
          padding: 2px 0px;

          font-size: 30px;
        }
        p {
          width: auto;
          height: auto;
          padding-left: 7px;
          padding-top: 8px;
        }
      }
    }

    .ph-search {
      width: 50%;
      height: 50px;
      padding-top: 25px;
      padding-bottom: 20px;
      position: relative;

      label {
        width: 40px;
        padding: 7px 0px;
        padding-right: 10px;
        margin-left: 10px;
        float: left;

        font-size: 18px;
        line-height: 36px;
        color: #ffffff;
      }

      .ph-search-input {
        width: calc(100% - 60px);
        height: 50px;
        float: left;
        position: relative;

        input {
          width: calc(100% - 64px);
          height: 50px;
          padding: 7px 15px;
          padding-right: 65px;
          border-radius: 2px;

          outline: none;
          color: #ffffff;
          border: 1px solid #1c2027;
          background-color: #1c2027;

          line-height: 20px;
          font-size: 14px;
        }

        .icon {
          width: 36px;
          height: 36px;
          padding-left: 10px;

          position: absolute;
          right: 70px;
          top: 7px;

          text-align: center;
          line-height: 36px;
          border-left: 1px solid #ffffff;
          color: #ffffff;

          i {
            font-size: 20px;
          }
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

      .ph-search {
        width: calc(100% - 10px);
        height: 50px;
        padding-top: 25px;
        padding-bottom: 20px;
        position: relative;

        label {
          display: none;
        }

        .ph-search-input {
          width: 100%;
          height: 50px;
          position: relative;
          float: left;

          input {
            width: calc(100% - 10px);
            height: 50px;
            line-height: 20px;
            font-size: 14px;

            padding: 7px 15px;
            padding-right: 40px;
            border-radius: 2px;
            border: 1px solid #1c2027;
            outline: none;
            background-color: #2a2f38;
          }

          .icon {
            width: 36px;
            height: 36px;
            padding-left: 10px;

            position: absolute;
            right: 20px;
            top: 7px;

            text-align: center;
            line-height: 36px;
            border-left: 1px solid #ffffff;
            color: #ffffff;

            i {
              font-size: 20px;
            }
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

  .photo-upload-view {
    width: 350px;
    height: 50px;
    padding: 5px;
    position: fixed;
    bottom: 80px;
    right: 10px;
    background-color: #ffffff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    .photo-img-box {
      width: 50px;
      height: 50px;
      text-align: right;
      float: left;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .photo-info-box {
      width: calc(100% - 120px);
      height: 30px;
      padding: 10px;
      float: left;

      * {
        padding: 0%;
        margin: 0%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h4 {
        width: 100%;
        height: auto;
        font-size: 14px;
        line-height: 16px;
        font-weight: normal;
        color: #424242;
      }
      p {
        width: 100%;
        height: auto;
        font-size: 12px;
        line-height: 14px;
        font-weight: lighter;
        color: #616161;
      }
    }
    .photo-state {
      width: 50px;
      height: 50px;
      text-align: center;
      float: left;

      img {
        max-width: 100%;
        max-height: 100%;

        // display: none;
      }
      i {
        font-size: 32px;
        line-height: 50px;

        color: #43a047;
      }
    }
  }
</style>
