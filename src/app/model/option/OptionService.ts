import { Readable, writable } from 'svelte/store';
import { LocalStorageManager } from '../storage/LocalStorageManager';

class OptionManager {
  readonly #timestamp = writable(false);
  readonly #enableBot = writable(true);
  readonly #enableCheckerBar = writable(true);
  readonly #enableDataSave = writable(false);
  readonly #chatViewOffset = writable<number>(300);

  #localStorage = new LocalStorageManager();

  constructor() {
    this.#timestamp.set(this.#localStorage.timestamp);
    this.#enableBot.set(this.#localStorage.enableBot);
    this.#enableCheckerBar.set(this.#localStorage.enableCheckerBar);
    this.#enableDataSave.set(this.#localStorage.enableDataSave);
    this.#chatViewOffset.set(this.#localStorage.chatViewOffset);
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

  get enableDataSave(): Readable<boolean> {
    return this.#enableDataSave;
  }

  get chatViewOffset(): Readable<number> {
    return this.#chatViewOffset;
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

  setEnableDataSave(value: boolean) {
    this.#enableDataSave.set(value);
    this.#localStorage.enableDataSave = value;
  }

  setChatViewOffset(value: number) {
    this.#chatViewOffset.set(value);
    this.#localStorage.chatViewOffset = value;
  }
}

export const OptionService = new OptionManager();
