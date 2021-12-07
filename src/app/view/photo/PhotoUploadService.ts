import { get, Readable, writable } from 'svelte/store';
import { PhotoUploadCommand } from '../../model/photo/command/PhotoUploadCommand';

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

  async addPhotoByFile(imageFile: File) {
    if (get(this.#uploading)) {
      console.error("it's already uploading");
      return;
    }
    this.#uploading.set(true);
    this.#uploadingFile.set(imageFile);
    const result = await this.#uploadCommand.execute(imageFile);
    console.log(result);
    this.#uploading.set(false);
    this.#uploadingFile.set(null);
  }
}

export const PhotoUploadService = new PhotoUploadServiceInit();
