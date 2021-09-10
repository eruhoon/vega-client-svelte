import { Readable, Writable, writable } from 'svelte/store';
import type { Toast } from './Toast';

class ToastServiceInit {
  #toasts: Writable<Toast[]> = writable([]);

  get toasts(): Readable<Toast[]> {
    return this.#toasts;
  }

  toast(toast: Toast) {
    this.#toasts.update((toasts) => [...toasts, toast]);
    setTimeout(() => {
      this.#toasts.update((toasts) => toasts.filter((t) => t !== toast));
    }, 3000);
  }
}

export const ToastService = new ToastServiceInit();
