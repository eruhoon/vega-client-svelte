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
        <BookmarkPrefListView {bookmarks} />

        <BookmarkInputForm />
    </div>
</SettingModal>
