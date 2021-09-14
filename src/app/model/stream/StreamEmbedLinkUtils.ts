import type { StreamInfo } from './StreamInfo';

export class StreamEmbedLinkUtils {
  static getLink(info: StreamInfo): string {
    switch (info.platform) {
      case 'local':
      case 'totoro':
        return this.#getLocalLink(info);
    }
  }

  static #getLocalLink(info: StreamInfo): string {
    const { host } = location;
    const { keyid, platform } = info;
    return `//${host}/embed?id=${keyid}&p=${platform}`;
  }
}
