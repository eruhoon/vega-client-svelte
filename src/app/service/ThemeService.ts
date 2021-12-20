import { get, Readable, writable, Writable } from 'svelte/store';
import { LocalStorageManager } from '../model/storage/LocalStorageManager';
import { ColorSet } from '../model/theme/ColorSet';

class ThemeServiceInit {
  #theme: Writable<Theme> = writable('default');
  #storage = new LocalStorageManager();

  constructor() {
    this.#theme.set(this.#storage.isDarkMode ? 'dark' : 'default');
    this.#refresh();
  }

  get theme(): Readable<Theme> {
    return this.#theme;
  }

  setTheme(theme: Theme) {
    this.#theme.set(theme);
    this.#storage.isDarkMode = theme === 'dark';

    this.#refresh();
  }

  #refresh() {
    const colorEntries = Object.entries(this.#getColorEntries());
    const css = colorEntries
      .map(([key, value]) => {
        const newKey = key.replace(
          /[A-Z]/g,
          (value) => `-${value.toLowerCase()}`
        );
        return `--${newKey}:${value}`;
      })
      .join(';');
    document.documentElement.style.cssText = css;
  }

  #getColorEntries() {
    switch (get(this.#theme)) {
      case 'dark':
        return ColorSet.DarkTheme;
      case 'default':
      default:
        return ColorSet.DefaultTheme;
    }
  }
}

export const ThemeService = new ThemeServiceInit();
