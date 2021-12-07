const TRUE = '1';
const FALSE = '0';
const DEFAULT_CHAT_VIEW_OFFSET = 300;
const DEFAULT_VOLUME = 50;

export class LocalStorageManager {
  #KEY_TIMESTAMP = 'vega.timestamp';
  #KEY_ENABLE_BOT = 'vega.enable_bot';
  #KEY_ENABLE_CHECKER_BAR = 'vega.enable_checker_bar';
  #KEY_ENABLE_DATASAVE = 'vega.enable_datasave';
  #KEY_FAVORITE_STREAMS = 'vega.favorite_stream';
  #KEY_CHAT_VIEW_OFFSET = 'vega.chat_view_offset';
  #KEY_VOLUME = 'vega.volume';

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

  get favoriteStreams(): string {
    return localStorage.getItem(this.#KEY_FAVORITE_STREAMS) || '[]';
  }

  set favoriteStreams(value: string) {
    localStorage.setItem(this.#KEY_FAVORITE_STREAMS, value ? value : '[]');
  }

  get chatViewOffset(): number {
    const raw = localStorage.getItem(this.#KEY_CHAT_VIEW_OFFSET);
    return raw ? parseInt(raw) : DEFAULT_CHAT_VIEW_OFFSET;
  }

  set chatViewOffset(value: number) {
    localStorage.setItem(this.#KEY_CHAT_VIEW_OFFSET, value.toString());
  }

  get volume(): number {
    const raw = localStorage.getItem(this.#KEY_VOLUME);
    return raw ? parseInt(raw) : DEFAULT_VOLUME;
  }

  set volume(value: number) {
    localStorage.setItem(this.#KEY_VOLUME, value.toString());
  }
}
