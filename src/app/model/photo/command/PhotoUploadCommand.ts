import axios from 'axios';
import { SessionService } from '../../session/SessionService';

export class PhotoUploadCommand {
  async execute(file: File): Promise<PhotoDto | null> {
    if (!file || !this.#isValidFile(file)) {
      console.error('invalid files');
      return;
    }

    const base64 = await this.#readData(file);
    const uri = 'https://mycast.xyz:9011/photo';
    const privKey = SessionService.getPrivateKey();
    try {
      const { data } = await axios.post<PhotoDto>(uri, { base64, privKey });
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
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

  #isValidFile(file: File): boolean {
    if (!file || !file.type.includes('image')) {
      return false;
    }
    return true;
  }
}

type PhotoDto = {
  adult: boolean;
  hash: string;
  height: number;
  mimeType: string;
  regDate: number;
  url: string;
  width: number;
  tag: string[];
};
