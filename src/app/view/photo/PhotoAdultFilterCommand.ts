import axios from 'axios';
import { SessionService } from '../../service/SessionService';

export class PhotoAdultFilterCommand {
  async execute(photoHash: string, adult: boolean): Promise<boolean> {
    const privKey = SessionService.getPrivateKey();
    const host = 'https://mycast.xyz:9011';
    const url = `${host}/photo/${photoHash}/adult`;

    try {
      const { data } = await axios.post<Result>(
        url,
        this.#createParam(privKey, adult)
      );
      return data && data.result === true;
    } catch (e) {
      console.error('unknown error', e);
      return false;
    }
  }

  #createParam(privKey: string, adult: boolean) {
    const params = new URLSearchParams();
    params.set('user', privKey);
    params.set('msg', adult ? 'true' : 'false');
    return params.toString();
  }
}

type Result = { result: boolean };
