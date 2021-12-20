import { Readable, writable, Writable } from 'svelte/store';
import { LocalStorageManager } from '../model/storage/LocalStorageManager';

class ThemeServiceInit {
  #theme: Writable<Theme> = writable('default');
  #storage = new LocalStorageManager();

  constructor() {
    this.#theme.set(this.#storage.isDarkMode ? 'dark' : 'default');
  }

  get theme(): Readable<Theme> {
    return this.#theme;
  }

  setTheme(theme: Theme) {
    this.#theme.set(theme);
    this.#storage.isDarkMode = theme === 'dark';
  }
}

export const ThemeService = new ThemeServiceInit();
