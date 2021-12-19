<script lang="ts">
  import { MemoService } from '../../service/MemoService';

  import MemoEntry from './MemoEntry.svelte';

  export let memos = [];

  function onUploadClick() {
    MemoService.setUploadMode(true);
  }
</script>

<div class="memo-main-content">
  <div class="mm-navbar">
    <div class="mm-search">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label>검색</label>
      <div class="mm-search-input">
        <input type="text" />
        <spna class="icon">
          <i class="fas fa-search" />
        </spna>
      </div>
    </div>
    <div class="mm-upload">
      <button class="upload-btn" on:click={onUploadClick}>
        <div class="icon">
          <i class="fas fa-file-upload" />
        </div>
        <p>업로드</p>
      </button>
    </div>
  </div>
  <div class="mm-list">
    {#each memos as memo}
      <MemoEntry {memo} />
    {/each}
  </div>
</div>

<style lang="scss">
  .memo-main-content {
    width: calc(100% - 10px);
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

    .mm-navbar {
      width: 100%;
      height: auto;
      display: flex;
    }

    .mm-upload {
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

    .mm-search {
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

      .mm-search-input {
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

    .mm-list {
      width: 100%;
      height: auto;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  // 컬러 스크롤링 컬러셋
  .memo-main-content {
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
</style>
