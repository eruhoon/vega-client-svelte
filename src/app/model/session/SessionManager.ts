import { get, writable } from 'svelte/store';
import { SessionStorageModel } from './SessionStorageModel';

export class SessionManager {
  readonly #privateKey = writable<string>('');
  readonly storage = new SessionStorageModel();

  constructor() {
    this.#privateKey.set(this.storage.privateKey);
  }

  setPrivateKey(privateKey: string): void {
    this.#privateKey.set(privateKey);
    this.storage.privateKey = privateKey;
  }

  getPrivateKey(): string {
    return get(this.#privateKey);
  }

  subscribePrivateKey = this.#privateKey.subscribe;
}
