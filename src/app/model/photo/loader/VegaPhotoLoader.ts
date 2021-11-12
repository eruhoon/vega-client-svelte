import axios from 'axios';
import type { Photo } from '../Photo';

export class VegaPhotoLoader {
  static readonly #HOST = 'https://mycast.xyz:9011/photo';

  constructor() {}

  async load(params: Params): Promise<Photo[]> {
    try {
      const { data } = await axios.get<PhotoDto[]>(this.#getUri(params));
      return data.map((dto) => {
        const tag = dto.tag || '';
        const tags = tag.split(',').filter((t) => t.length > 0);
        return {
          hash: dto.hash,
          height: dto.height,
          isForAdult: dto.adult,
          mimeType: dto.mimeType,
          regDate: new Date(dto.regDate),
          tags,
          url: dto.url,
          viewer: 0,
          width: dto.width,
        };
      });
    } catch {
      return [];
    }
  }

  #getUri(params: Params): string {
    const urlParams = new URLSearchParams();
    urlParams.set('q', params.q);
    urlParams.set('start', params.start.toString());
    urlParams.set('num', params.length.toString());
    return `${VegaPhotoLoader.#HOST}?${urlParams.toString()}`;
  }
}

type Params = {
  q: string;
  start: number;
  length: number;
};

type PhotoDto = {
  adult: boolean;
  hash: string;
  height: number;
  idx: number;
  mimeType: string;
  regDate: string;
  url: string;
  tag: string;
  width: number;
};
