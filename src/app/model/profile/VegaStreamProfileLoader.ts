import axios from 'axios';
import type { StreamProfile } from './StreamProfile';

export class VegaStreamProfileLoader {
  #privateKey: string;

  constructor(privateKey: string) {
    this.#privateKey = privateKey;
  }

  async load(): Promise<StreamProfile> {
    const url = this.#getUrl();
    const { data } = await axios.get<UserStreamDto>(url);
    return {
      afreecaId: data.afreecaId,
      backgroundImage: data.backgroundImage,
      localId: data.localHash,
      platform: data.platform,
      twitchId: data.twitchId,
    };
  }

  #getUrl(): string {
    return `https://mycast.xyz:9011/user/${this.#privateKey}/stream`;
  }
}

type UserStreamDto = {
  platform: string;
  backgroundImage: string;
  localHash: string;
  afreecaId: string;
  twitchId: string;
};
