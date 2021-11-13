import { Readable, writable, Writable } from 'svelte/store';
import type { Photo } from './Photo';

class PhotoContentManager {
  #currentPhoto: Writable<Photo | null> = writable(null);

  get currentPhoto(): Readable<Photo | null> {
    return this.#currentPhoto;
  }

  setCurrentPhoto(photo: Photo) {
    this.#currentPhoto.set(photo);
  }
}

export const PhotoContentService = new PhotoContentManager();
