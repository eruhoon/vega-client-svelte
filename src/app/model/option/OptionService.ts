import { writable } from 'svelte/store';

class OptionManager {
  readonly timestamp = writable(false);
}

export const OptionService = new OptionManager();
