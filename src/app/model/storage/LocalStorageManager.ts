const TRUE = '1';
const FALSE = '0';

export class LocalStorageManager {
  #KEY_TIMESTAMP = 'vega.timestamp';
  #KEY_ENABLE_BOT = 'vega.enable_bot';

  get timestamp(): boolean {
    return localStorage.getItem(this.#KEY_TIMESTAMP) === TRUE;
  }

  set timestamp(value: boolean) {
    localStorage.setItem(this.#KEY_TIMESTAMP, value ? TRUE : FALSE);
  }

  get enableBot(): boolean {
    return localStorage.getItem(this.#KEY_ENABLE_BOT) !== FALSE;
  }

  set enableBot(value: boolean) {
    localStorage.setItem(this.#KEY_ENABLE_BOT, value ? TRUE : FALSE);
  }
}
