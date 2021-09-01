import { Readable, Writable, writable } from 'svelte/store';
import type { StreamInfo } from './StreamInfo';

class StreamServiceInit {
  readonly #locals: Writable<StreamInfo[]> = writable([]);
  readonly #externals: Writable<StreamInfo[]> = writable([]);

  get locals(): Readable<StreamInfo[]> {
    return this.#locals;
  }

  get externals(): Readable<StreamInfo[]> {
    return this.#externals;
  }

  setLocals(locals: StreamInfo[]) {
    this.#locals.set(locals);
  }

  setExternals(externals: StreamInfo[]) {
    this.#externals.set(externals);
  }
}

export const StreamService = new StreamServiceInit();
