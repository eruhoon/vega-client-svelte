import { Readable, Writable, writable } from 'svelte/store';

class ChatClipboardServiceInit {
  #currentImage: Writable<string | null> = writable(null);

  get currentImage(): Readable<string | null> {
    return this.#currentImage;
  }

  setCurrentImage(image: string) {
    this.#currentImage.set(image);
  }
}

export const ChatClipboardService = new ChatClipboardServiceInit();
