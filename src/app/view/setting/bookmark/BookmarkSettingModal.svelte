<script lang="ts">
  import { onMount } from 'svelte';
  import type { Bookmark } from '../../../model/bookmark/Bookmark';
  import { BookmarkService } from '../../../service/BookmarkService';

  import SettingModal from '../SettingModal.svelte';
  import BookmarkInputForm from './BookmarkInputForm.svelte';
  import BookmarkPrefListView from './BookmarkPrefListView.svelte';

  let bookmarks: Bookmark[] = [];

  onMount(() => {
    BookmarkService.bookmarks.subscribe((it) => (bookmarks = it));
  });
</script>

<SettingModal title="북마크 설정" icon="fas fa-bookmark">
  <div slot="body">
    <!-- 북마크 추가 폼 -->
    <BookmarkInputForm />
    <!-- 북마크 리스트 -->
    <BookmarkPrefListView {bookmarks} />
  </div>
</SettingModal>

<style lang="scss">
  div {
    max-height: calc(100vh - 188px);

    overflow-y: auto;
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
  }

  // 스크롤 색상용
  div {
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

  // 모바일 처리
  @media (min-width: 320px) and (max-width: 500px) {
    div {
      max-height: calc(100vh - 123px) !important;
    }
  }
</style>
