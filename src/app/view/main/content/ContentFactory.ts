import type { StreamInfo } from '../../../model/stream/StreamInfo';
import type { Content } from '../../../model/window/Content';

export class ContentFactory {
  createFromStream(stream: StreamInfo): Content {
    switch (stream.platform) {
      case 'local':
        return {
          type: 'local-stream',
          src: stream.keyid,
        };
      case 'totoro':
        return {
          type: 'totoro-stream',
          src: stream.keyid,
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
