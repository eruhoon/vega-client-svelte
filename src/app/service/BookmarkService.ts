import { get, Readable, writable, Writable } from 'svelte/store';
import type { Bookmark } from '../model/bookmark/Bookmark';

class BookmarkServiceInit {
  #bookmarks: Writable<Bookmark[]> = writable([]);

  get bookmarks(): Readable<Bookmark[]> {
    return this.#bookmarks;
  }

  addBookmark(bookmark: Bookmark) {
    const bookmarks = get(this.#bookmarks);
    if (bookmarks.every((b) => b !== bookmark)) {
      this.#bookmarks.update((it) => [...it, bookmark]);
    }
  }

  removeBookmark(bookmark: Bookmark) {
    this.#bookmarks.update((it) => it.filter((it) => it !== bookmark));
  }
}

export const BookmarkService = new BookmarkServiceInit();
