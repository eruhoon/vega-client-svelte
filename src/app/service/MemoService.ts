import axios from 'axios';
import { Readable, writable, Writable } from 'svelte/store';
import type { Memo } from '../model/memo/Memo';
import { SessionService } from '../model/session/SessionService';

class MemoManager {
  #currentMemo: Writable<Memo> = writable(null);
  #uploadMode: Writable<boolean> = writable(false);

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
  }

  async shareMemo(memoHash: string) {
    const url = 'https://mycast.xyz:8002/memo';
    const privKey = SessionService.getPrivateKey();
    await axios.post(url, {
      user: privKey,
      memoIdx: Number(memoHash),
    });
  }
}

export const MemoService = new MemoManager();
