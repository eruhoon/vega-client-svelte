import { Readable, writable } from 'svelte/store';
import { LocalStorageManager } from '../storage/LocalStorageManager';

class OptionManager {
  readonly #timestamp = writable(false);

  #localStorage = new LocalStorageManager();

  constructor() {
    console.log(this.#localStorage.timestamp);
    this.#timestamp.set(this.#localStorage.timestamp);
  }

  get timestamp(): Readable<boolean> {
    return this.#timestamp;
  }

  setTimestamp(value: boolean) {
    this.#timestamp.set(value);
    this.#localStorage.timestamp = value;
  }
}

export const OptionService = new OptionManager();
