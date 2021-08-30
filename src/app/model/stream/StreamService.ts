import { Readable, Writable, writable } from 'svelte/store';
import type { StreamInfo } from './StreamInfo';

class StreamServiceInit {
  readonly #locals: Writable<StreamInfo[]> = writable([]);

  get locals(): Readable<StreamInfo[]> {
    return this.#locals;
  }

  setLocals(locals: StreamInfo[]) {
    console.log(locals);
    this.#locals.set(locals);
  }
}

export const StreamService = new StreamServiceInit();
