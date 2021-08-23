import { get, writable } from 'svelte/store';
import { SessionStorageModel } from './SessionStorageModel';

export class SessionManager {
  readonly #privateKey = writable<string | null>(null);
  readonly storage = new SessionStorageModel();

  constructor() {
    this.#privateKey.set(this.storage.privateKey);
  }

  setPrivateKey(privateKey: string | null): void {
    this.#privateKey.set(privateKey);
    this.storage.privateKey = privateKey;
  }

  getPrivateKey(): string | null {
    return get(this.#privateKey);
  }

  subscribePrivateKey = this.#privateKey.subscribe;
}
