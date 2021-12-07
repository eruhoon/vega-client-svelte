<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  let searchQuery: string;
  let timer = -1;

  const dispatch =
    createEventDispatcher<{ onsearch: string; onuploadclick: void }>();

  function onKeyDown() {
    clearTimeout(timer);
    timer = Number(
      setTimeout(() => {
        dispatch('onsearch', searchQuery);
        timer = -1;
      }, 600)
    );
  }
</script>

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
  <button class="upload-btn" on:click={(_) => dispatch('onuploadclick')}>
    <div class="icon">
      <i class="fas fa-file-upload" />
    </div>
    <p>업로드</p>
  </button>
</div>

<style lang="scss">
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

  @media screen and (max-width: 768px) {
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
  }
</style>
