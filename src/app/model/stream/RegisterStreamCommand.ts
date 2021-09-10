import Axios from 'axios';

export class RegisterStreamCommand {
  #platform: string;
  #keyId: string;

  constructor(pf: string, keyId: string) {
    this.#platform = pf;
    this.#keyId = keyId;
  }

  async execute(): Promise<boolean> {
    const host = 'https://mycast.xyz:9011';
    const url = `${host}/stream`;
    try {
      const param = new URLSearchParams();
      param.append('platform', this.#platform);
      param.append('keyId', this.#keyId);
      const { data } = await Axios.post<Result>(url, param.toString());
      if (!data || !data.result) {
        return false;
      }
      return true;
    } catch (e) {
      console.error('unknown error', e);
      return false;
    }
  }
}

type Result = {
  result: boolean;
  msg: string;
};
