import Axios from 'axios';
import { SessionService } from '../../../service/SessionService';

export class PhotoTagCommand {
  execute(photoHash: string, tags: string) {
    const privKey = SessionService.getPrivateKey();
    const host = 'https://mycast.xyz:9011';
    const url = `${host}/photo/${photoHash}/tags`;
    Axios.post(url, { user: privKey, msg: tags });
  }
}
