import Axios from 'axios';
import { ClipboardImageParser } from './ClipboardImageParser';

export class ClipboardManager {
  #clipboardImageParser = new ClipboardImageParser();

  uploadImageCache(
    rawData: DataTransfer | null,
    callback: (str: string) => void
  ): boolean {
    const file = this.#clipboardImageParser.parseImageFile(rawData);
    if (file === null) {
      return false;
    }
    this.uploadImageCacheWithFile(file, (imageUri) => {
      callback(imageUri);
    });
    return true;
  }

  uploadImageCacheWithUrl(
    rawData: DataTransfer | null,
    callback: (result: string) => void
  ): void {
    this.#clipboardImageParser.parseImageUrl(rawData, (uri) => {
      if (uri !== null) {
        callback(uri);
      }
    });
  }

  public uploadImageCacheWithFile(
    file: File,
    callback: (result: string) => void
  ): void {
    const formData = new FormData();
    formData.append('image', file);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    Axios.post('https://mycast.xyz:8002/cache', formData, config).then(
      (res) => {
        if (res.status !== 200 || !res.data) {
          return;
        }
        const imageUri = res.data;
        callback(imageUri);
      }
    );
  }
}
