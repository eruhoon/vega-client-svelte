import Axios from 'axios';
import type { StagedStream } from './StageStream';

export class StageStreamCommand {
  #platform: string;
  #keyId: string;

  constructor(pf: string, keyId: string) {
    this.#platform = pf;
    this.#keyId = keyId;
  }

  async execute(): Promise<StagedStream | null> {
    const host = 'https://mycast.xyz:9011';
    const url = `${host}/stream/${this.#platform}/${this.#keyId}`;
    try {
      const { data } = await Axios.get<StagedStream>(url);
      if (!data) {
        return null;
      }
      return data;
    } catch (e) {
      console.error('unknown error', e);
      return null;
    }
  }
}
