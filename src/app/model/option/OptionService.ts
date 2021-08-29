import { Readable, writable } from 'svelte/store';
import { LocalStorageManager } from '../storage/LocalStorageManager';

class OptionManager {
  readonly #timestamp = writable(false);
  readonly #enableBot = writable(true);

  #localStorage = new LocalStorageManager();

  constructor() {
    this.#timestamp.set(this.#localStorage.timestamp);
    this.#enableBot.set(this.#localStorage.enableBot);
  }

  get timestamp(): Readable<boolean> {
    return this.#timestamp;
  }

  get enableBot(): Readable<boolean> {
    return this.#enableBot;
  }

  setTimestamp(value: boolean) {
    this.#timestamp.set(value);
    this.#localStorage.timestamp = value;
  }

  setEnableBot(value: boolean) {
    this.#enableBot.set(value);
    this.#localStorage.enableBot = value;
  }
}

export const OptionService = new OptionManager();
