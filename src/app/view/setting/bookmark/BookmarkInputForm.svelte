<script lang="ts">
  import { BookmarkService } from '../../../service/BookmarkService';

  import BookmarkTextInput from './BookmarkTextInput.svelte';

  let title: string;
  let icon: string;
  let link: string;

  function onButtonClick() {
    BookmarkService.addBookmark({ icon, link, title });
  }
</script>

<div class="form">
  <div class="form-title">
    <h4>북마크 추가</h4>
  </div>
  <div class="input">
    <BookmarkTextInput title="제목" bind:value={title} />
    <BookmarkTextInput title="아이콘" bind:value={icon} />
    <BookmarkTextInput title="링크" bind:value={link} />
  </div>
  <button class="button" on:click={(_) => onButtonClick()}>
    <h2>추가하기</h2>
  </button>
</div>

<style lang="scss">
  .form {
    width: calc(100% - 30px);
    height: auto;
    padding: 0px 15px;

    //display: flex;
    //align-items: center;

    .form-title {
      width: 100%;
      height: 30px;
      padding: 15px;
      margin: 0px -15px;
      margin-bottom: 15px;

      background: #1f2226;

      h4 {
        width: 100%;
        padding: 6px 0px;
      }
    }
    .input {
      //flex-grow: 1;
    }
    .button {
      width: calc(100% + 30px);
      height: auto;
      margin: 0px -15px;
      margin-top: 20px;
      border: 0px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      padding: 20px 15px;
      background-color: var(--primary-activeground-color);
      color: var(--primary-activeground-font-color);
    }
  }

  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    .profile-form {
      .stream-sub {
        position: fixed;
        bottom: 0px;
        width: 100%;
      }
    }
  }
</style>
