<script lang="ts">
    import type { Bookmark } from '../../../model/bookmark/Bookmark';

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
    <div class="input">
        <BookmarkTextInput title="제목" bind:value={title} />
        <BookmarkTextInput title="아이콘" bind:value={icon} />
        <BookmarkTextInput title="링크" bind:value={link} />
    </div>
    <div class="button">
        <button on:click={(_) => onButtonClick()}>Add</button>
    </div>
</div>

<style lang="scss">
    .form {
        padding: 10px;
        display: flex;
        align-items: center;

        .input {
            flex-grow: 1;
        }
        .button {
            flex-shrink: 0;
            width: 50px;
        }
    }
</style>
