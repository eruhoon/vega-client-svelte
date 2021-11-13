import axios from 'axios';
import type { Memo } from '../Memo';

export class VegaMemoLoader {
  static readonly #HOST = 'https://mycast.xyz:9011/memo';

  async load(): Promise<Memo[]> {
    const uri = VegaMemoLoader.#HOST;
    const res = await axios.get<MemoDto[]>(uri);

    if (!res || !res.data) {
      return [];
    }

    return res.data.map((dto) => {
      return {
        body: dto.content,
        hash: dto.idx.toString(),
        regDate: new Date(dto.regDate),
        userIcon: dto.userIcon,
        userName: dto.userNickname,
      };
    });
  }
}

type MemoDto = {
  idx: number;
  userIcon: string;
  userNickname: string;
  content: string;
  regDate: number;
};
