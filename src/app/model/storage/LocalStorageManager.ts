const TRUE = '1';
const FALSE = '0';

export class LocalStorageManager {
  #KEY_TIMESTAMP = 'vega.timestamp';

  get timestamp(): boolean {
    return localStorage.getItem(this.#KEY_TIMESTAMP) === TRUE;
  }

  set timestamp(value: boolean) {
    localStorage.setItem(this.#KEY_TIMESTAMP, value ? TRUE : FALSE);
  }
}
