import { Readable, writable, Writable } from 'svelte/store';
import type { Memo } from '../model/memo/Memo';

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
}

export const MemoService = new MemoManager();
