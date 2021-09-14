import Axios from 'axios';
import { SessionService } from '../../session/SessionService';
import type { StreamInfo } from '../../stream/StreamInfo';

export class SocketShareStreamCommand {
  #stream: StreamInfo;

  constructor(param: StreamInfo) {
    this.#stream = param;
  }

  execute() {
    const url = 'https://mycast.xyz:8002/stream/';
    const privateKey = SessionService.getPrivateKey();
    const msg = JSON.stringify({
      keyId: this.#stream.keyid,
      icon: this.#stream.icon,
      nickname: this.#stream.title,
      platform: this.#stream.platform,
      description: this.#stream.description,
      thumbnail: this.#stream.thumbnail,
      link: this.#stream.url,
      viewer: this.#stream.viewer,
    });
    const param = new URLSearchParams({ user: privateKey, msg });
    Axios.post(url, param.toString());
  }
}
