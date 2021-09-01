import { Readable, Writable, writable } from 'svelte/store';
import type { Toast } from './Toast';

class ToastServiceInit {
  #toasts: Writable<Toast[]> = writable([]);

  get toasts(): Readable<Toast[]> {
    return this.#toasts;
  }
}

export const ToastService = new ToastServiceInit();
