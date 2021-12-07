import Axios from 'axios';
import { SessionService } from '../../session/SessionService';
import type { Photo } from '../Photo';

export class PhotoTagCommand {
  execute(photoHash: string, tags: string) {
    const privKey = SessionService.getPrivateKey();
    const host = 'https://mycast.xyz:9011';
    const url = `${host}/photo/${photoHash}/tags`;
    Axios.post(url, { user: privKey, msg: tags });
  }
}
