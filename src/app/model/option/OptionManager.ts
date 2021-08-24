import { get, writable } from 'svelte/store';

export class OptionManager {
  readonly #enableTimestamp = writable(false);

  get enableTimestamp() {
    return get(this.#enableTimestamp);
  }

  updateEnableTimestamp = this.#enableTimestamp.update;

  subscribeEnableTimestamp = this.#enableTimestamp.subscribe;
}
