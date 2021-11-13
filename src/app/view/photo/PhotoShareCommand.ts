import axios from 'axios';
import { SessionService } from '../../model/session/SessionService';

export class PhotoShareCommand {
  execute(photoUrl: string) {
    const url = 'https://mycast.xyz:8002/photo';
    axios.post(url, this.#createParam(photoUrl));
  }

  #createParam(photoUrl: string): string {
    const privKey = SessionService.getPrivateKey();
    const params = new URLSearchParams();
    params.set('user', privKey);
    params.set('msg', photoUrl);
    return params.toString();
  }
}
