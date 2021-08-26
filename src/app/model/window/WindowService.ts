import { Readable, Writable, writable } from 'svelte/store';
import type { ModalType } from './ModalType';

class WindowServiceInit {
  userListShow = writable(false);
  emojiAttachViewShow = writable(false);
  sideBarShow = writable(false);
  settingMenuShow = writable(false);
  modal: Writable<ModalType | null> = writable(null);
  #currentImage: Writable<string | null> = writable(null);

  get currentImage(): Readable<string | null> {
    return this.#currentImage;
  }

  openImageViewerPopup(image: string) {
    this.#currentImage.set(image);
  }

  closeImageViewerPopup() {
    this.#currentImage.set(null);
  }
}

export const WindowService = new WindowServiceInit();
