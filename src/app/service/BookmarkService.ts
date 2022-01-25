import { get, Readable, writable, Writable } from 'svelte/store';
import type { Bookmark } from '../model/bookmark/Bookmark';
import { LocalStorageManager } from '../model/storage/LocalStorageManager';

class BookmarkServiceInit {
  #bookmarks: Writable<Bookmark[]> = writable([]);
  readonly #storage = new LocalStorageManager();

  constructor() {
    this.#loadBookmarks();
  }

  get bookmarks(): Readable<Bookmark[]> {
    return this.#bookmarks;
  }

  addBookmark(bookmark: Bookmark) {
    const bookmarks = get(this.#bookmarks);
    if (bookmarks.every((b) => b !== bookmark)) {
      this.#bookmarks.update((it) => [...it, bookmark]);
    }
    this.#saveBookmarks();
  }

  removeBookmark(bookmark: Bookmark) {
    this.#bookmarks.update((it) => it.filter((it) => it !== bookmark));
    this.#saveBookmarks();
  }

  #loadBookmarks() {
    const rawBookmarks = this.#storage.bookmarks;
    const bookmarks: Bookmark[] = JSON.parse(rawBookmarks);
    this.#bookmarks.set(bookmarks);
  }

  #saveBookmarks() {
    const bookmarks = get(this.#bookmarks);
    const rawBookmarks = JSON.stringify(bookmarks);
    this.#storage.bookmarks = rawBookmarks;
  }
}

export const BookmarkService = new BookmarkServiceInit();
