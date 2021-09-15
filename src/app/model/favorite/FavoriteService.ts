import { get, Readable, Writable, writable } from 'svelte/store';
import { LocalStorageManager } from '../storage/LocalStorageManager';
import type { FavoriteStream } from './FavoriteStream';

class FavoriteServiceInit {
  readonly #favorites: Writable<FavoriteStream[]> = writable([]);
  readonly #storage = new LocalStorageManager();

  constructor() {
    this.#loadFavorites();
  }

  get favorites(): Readable<FavoriteStream[]> {
    return this.#favorites;
  }

  isFavorite(platform: string, keyId: string): boolean {
    const favorites = get(this.#favorites);
    return favorites.some(
      (it) => it.platform === platform && it.keyId === keyId
    );
  }

  addFavorite(platform: string, keyId: string): void {
    if (this.isFavorite(platform, keyId)) {
      console.warn('duplicated favorite');
      return;
    }
    const favorite = { platform, keyId };
    this.#favorites.update((it) => [...it, favorite]);
    this.#saveFavorites();
  }

  removeFavorite(platform: string, keyId: string): void {
    this.#favorites.update((it) =>
      it.filter((f) => f.platform !== platform || f.keyId !== keyId)
    );
    this.#saveFavorites();
  }

  #loadFavorites() {
    const rawFavorites = this.#storage.favoriteStreams;
    const favorites: FavoriteStream[] = JSON.parse(rawFavorites);
    this.#favorites.set(favorites);
  }

  #saveFavorites() {
    const favorites = get(this.#favorites);
    const rawFavorites = JSON.stringify(favorites);
    this.#storage.favoriteStreams = rawFavorites;
  }
}

export const FavoriteService = new FavoriteServiceInit();
