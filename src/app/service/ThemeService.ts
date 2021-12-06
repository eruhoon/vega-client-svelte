import { Readable, writable, Writable } from 'svelte/store';

class ThemeServiceInit {
  #theme: Writable<Theme> = writable('default');

  get theme(): Readable<Theme> {
    return this.#theme;
  }

  setTheme(theme: Theme) {
    this.#theme.set(theme);
  }
}

export const ThemeService = new ThemeServiceInit();
