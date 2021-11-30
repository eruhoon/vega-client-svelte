import { Readable, writable } from 'svelte/store';
import { VegaPhotoLoader } from '../../model/photo/loader/VegaPhotoLoader';
import type { Photo } from '../../model/photo/Photo';

class PhotoServiceInit {
  readonly #CHUNK_SIZE = 100;
  readonly #loader = new VegaPhotoLoader();
  readonly #photos = writable([]);
  #query = '';
  #nextStart = 0;
  #loading = false;

  get photos(): Readable<Photo[]> {
    return this.#photos;
  }

  async init(query: string) {
    this.#loading = true;

    this.#query = query;
    const photos = await this.#loader.load({
      q: query,
      start: 0,
      length: this.#CHUNK_SIZE,
    });
    this.#photos.set(photos);
    this.#nextStart = this.#CHUNK_SIZE;

    this.#loading = false;
  }

  async loadMore() {
    if (this.#loading) {
      return;
    }
    this.#loading = true;

    const photos = await this.#loader.load({
      q: this.#query,
      start: this.#nextStart,
      length: this.#CHUNK_SIZE,
    });
    this.#photos.update((it) => [...it, ...photos]);
    this.#nextStart += this.#CHUNK_SIZE;

    this.#loading = false;
  }
}

export const PhotoService = new PhotoServiceInit();
