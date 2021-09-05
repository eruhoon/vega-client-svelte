const TRUE = '1';
const FALSE = '0';

export class LocalStorageManager {
  #KEY_TIMESTAMP = 'vega.timestamp';
  #KEY_ENABLE_BOT = 'vega.enable_bot';
  #KEY_ENABLE_CHECKER_BAR = 'vega.enable_checker_bar';
  #KEY_ENABLE_DATASAVE = 'vega.enable_datasave';

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

  get enableCheckerBar(): boolean {
    return localStorage.getItem(this.#KEY_ENABLE_CHECKER_BAR) !== FALSE;
  }

  set enableCheckerBar(value: boolean) {
    localStorage.setItem(this.#KEY_ENABLE_CHECKER_BAR, value ? TRUE : FALSE);
  }

  get enableDataSave(): boolean {
    return localStorage.getItem(this.#KEY_ENABLE_DATASAVE) === TRUE;
  }

  set enableDataSave(value: boolean) {
    localStorage.setItem(this.#KEY_ENABLE_DATASAVE, value ? TRUE : FALSE);
  }
}
