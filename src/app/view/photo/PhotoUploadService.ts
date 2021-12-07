import { get, Readable, writable } from 'svelte/store';
import { PhotoUploadCommand } from '../../model/photo/command/PhotoUploadCommand';

class PhotoUploadServiceInit {
  #uploading = writable(false);
  #uploadingFile = writable<File | null>(null);
  #uploadCommand = new PhotoUploadCommand();
  #uploadingBase64 = writable<string | null>(null);

  get uploading(): Readable<boolean> {
    return this.#uploading;
  }

  get uplaodingFile(): Readable<File | null> {
    return this.#uploadingFile;
  }

  get uploadingBase64(): Readable<string | null> {
    return this.#uploadingBase64;
  }

  async addPhotoByFile(imageFile: File) {
    if (get(this.#uploading)) {
      console.error("it's already uploading");
      return;
    }
    this.#uploading.set(true);
    this.#uploadingFile.set(imageFile);
    this.#uploadingBase64.set(await this.#readData(imageFile));
    const result = await this.#uploadCommand.execute(imageFile);
    console.log(result);
    this.#uploadingBase64.set(null);
    this.#uploading.set(false);
    this.#uploadingFile.set(null);
  }

  async #readData(file: File): Promise<string | null> {
    return new Promise((resolve) => {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = (_) => {
        if (typeof fileReader.result === 'string') {
          const base64 = fileReader.result;
          resolve(base64);
        }
      };
      fileReader.readAsDataURL(file);
    });
  }
}

export const PhotoUploadService = new PhotoUploadServiceInit();
