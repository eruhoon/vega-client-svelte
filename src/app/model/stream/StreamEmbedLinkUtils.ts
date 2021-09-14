import type { StreamInfo } from './StreamInfo';

export class StreamEmbedLinkUtils {
  static getLink(info: StreamInfo): string {
    switch (info.platform) {
      case 'local':
      case 'totoro':
        return this.#getLocalLink(info);
      case 'twitch':
        return this.#getTwitchLink(info);
      default:
        return info.url;
    }
  }

  static #getLocalLink(info: StreamInfo): string {
    const { host } = location;
    const { keyid, platform } = info;
    return `//${host}/embed?id=${keyid}&p=${platform}`;
  }

  static #getTwitchLink(info: StreamInfo): string {
    const { hostname } = location;
    const { url: link } = info;
    const url = new URL(link, location.href);
    const params = new URLSearchParams(url.search);
    params.append('parent', hostname);
    url.search = params.toString();
    return `${url.toString()}`;
  }
}
