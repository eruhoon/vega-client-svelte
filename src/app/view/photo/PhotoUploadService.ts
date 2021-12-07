import { get, Readable, writable } from 'svelte/store';
import { PhotoUploadCommand } from '../../model/photo/command/PhotoUploadCommand';
import type { Photo } from '../../model/photo/Photo';

class PhotoUploadServiceInit {
  #uploading = writable(false);
  #uploadingFile = writable<File | null>(null);
  #uploadCommand = new PhotoUploadCommand();

  get uploading(): Readable<boolean> {
    return this.#uploading;
  }

  get uploadingFile(): Readable<File | null> {
    return this.#uploadingFile;
  }

  async uploadByFile(imageFile: File): Promise<Photo> {
    if (get(this.#uploading)) {
      console.error("it's already uploading");
      return;
    }
    this.#uploading.set(true);
    this.#uploadingFile.set(imageFile);
    try {
      const result = await this.#uploadCommand.execute(imageFile);
      return {
        hash: result.hash,
        height: result.height,
        isForAdult: result.adult,
        mimeType: result.mimeType,
        regDate: new Date(result.regDate),
        tags: result.tag,
        url: result.url,
        viewer: 0,
        width: result.width,
      };
    } finally {
      this.#uploading.set(false);
      this.#uploadingFile.set(null);
    }
  }
}

export const PhotoUploadService = new PhotoUploadServiceInit();
