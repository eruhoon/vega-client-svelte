import { Readable, writable } from 'svelte/store';
import { LocalStorageManager } from '../storage/LocalStorageManager';

class OptionManager {
  readonly #timestamp = writable(false);
  readonly #enableBot = writable(true);
  readonly #enableCheckerBar = writable(true);

  #localStorage = new LocalStorageManager();

  constructor() {
    this.#timestamp.set(this.#localStorage.timestamp);
    this.#enableBot.set(this.#localStorage.enableBot);
    this.#enableCheckerBar.set(this.#localStorage.enableCheckerBar);
  }

  get timestamp(): Readable<boolean> {
    return this.#timestamp;
  }

  get enableBot(): Readable<boolean> {
    return this.#enableBot;
  }

  get enableCheckerBar(): Readable<boolean> {
    return this.#enableCheckerBar;
  }

  setTimestamp(value: boolean) {
    this.#timestamp.set(value);
    this.#localStorage.timestamp = value;
  }

  setEnableBot(value: boolean) {
    this.#enableBot.set(value);
    this.#localStorage.enableBot = value;
  }

  setEnableCheckerBar(value: boolean) {
    this.#enableCheckerBar.set(value);
    this.#localStorage.enableCheckerBar = value;
  }
}

export const OptionService = new OptionManager();
