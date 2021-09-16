import { Readable, Writable, writable } from 'svelte/store';
import { HashGenerator } from '../../util/hash/HashGenerator';
import type { Toast } from './Toast';

class ToastServiceInit {
  #toasts: Writable<Toast[]> = writable([]);
  #hashGenerator = new HashGenerator();

  get toasts(): Readable<Toast[]> {
    return this.#toasts;
  }

  toastText(toastText: string) {
    const toast = {
      hash: this.#hashGenerator.generate('toast'),
      text: toastText,
    };
    this.#toast(toast);
  }

  #toast(toast: Toast) {
    this.#toasts.update((toasts) => [...toasts, toast]);
    setTimeout(() => {
      this.#toasts.update((toasts) => toasts.filter((t) => t !== toast));
    }, 3000);
  }
}

export const ToastService = new ToastServiceInit();
