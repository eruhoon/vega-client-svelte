import type { StreamInfo } from '../../../model/stream/StreamInfo';
import type { Content } from '../../../model/window/Content';

export class ContentFactory {
  createFromStream(stream: StreamInfo): Content {
    switch (stream.platform) {
      case 'lck':
        return {
          type: 'hls',
          src: stream.url,
        }
      case 'local':
        return {
          type: 'local-stream',
          src: {
            icon: stream.icon,
            url: stream.keyid,
            title: stream.title,
          },
        };
      case 'totoro':
        return {
          type: 'totoro-stream',
          src: {
            icon: stream.icon,
            url: stream.keyid,
            title: stream.title,
          },
        };
      case 'kakaotv':
        return {
          type: 'iframe',
          src: stream.url,
        };
      case 'twitch':
        return {
          type: 'twitch-stream',
          src: stream.url,
        };
      case 'afreeca':
        return {
          type: 'iframe',
          src: stream.url,
        };
      case 'youtube':
        return {
          type: 'iframe',
          src: stream.url,
        };
      default:
        return {
          type: 'iframe',
          src: stream.url,
        };
    }
  }
}
