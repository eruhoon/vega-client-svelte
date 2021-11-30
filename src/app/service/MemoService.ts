import axios from 'axios';
import { Readable, writable, Writable } from 'svelte/store';
import { VegaMemoLoader } from '../model/memo/loader/VegaMemoLoader';
import type { Memo } from '../model/memo/Memo';
import { SessionService } from '../model/session/SessionService';

class MemoServiceInit {
  #memos: Writable<Memo[]> = writable([]);
  #currentMemo: Writable<Memo> = writable(null);
  #uploadMode: Writable<boolean> = writable(false);

  #loader = new VegaMemoLoader();

  get memos(): Readable<Memo[]> {
    return this.#memos;
  }

  get currentMemo(): Readable<Memo> {
    return this.#currentMemo;
  }

  get uploadMode(): Readable<boolean> {
    return this.#uploadMode;
  }

  setCurrentMemo(memo: Memo | null) {
    this.#currentMemo.set(memo);
  }

  setUploadMode(mode: boolean) {
    this.#uploadMode.set(mode);
  }

  async uploadMemo(memo: string): Promise<void> {
    const url = 'https://mycast.xyz:9011/memo';
    const form = {
      userKey: SessionService.getPrivateKey(),
      text: memo,
    };
    await axios.post(url, form);

    this.refresh();
  }

  async shareMemo(memoHash: string) {
    const url = 'https://mycast.xyz:8002/memo';
    const privKey = SessionService.getPrivateKey();
    await axios.post(url, {
      user: privKey,
      memoIdx: Number(memoHash),
    });
  }

  async refresh() {
    this.#memos.set(await this.#loader.load());
  }
}

export const MemoService = new MemoServiceInit();
