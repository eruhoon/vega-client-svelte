import { Readable, Writable, writable } from 'svelte/store';
import type { ModalType } from './ModalType';

class WindowServiceInit {
  userListShow = writable(false);
  #isEmojiAttachViewShow = writable(false);
  sideBarShow = writable(false);
  settingMenuShow = writable(false);
  #modal: Writable<ModalType | null> = writable('site');
  #currentImage: Writable<string | null> = writable(null);

  get modal(): Readable<ModalType | null> {
    return this.#modal;
  }

  get currentImage(): Readable<string | null> {
    return this.#currentImage;
  }

  openModal(modal: ModalType) {
    this.#modal.set(modal);
  }

  closeModal() {
    this.#modal.set(null);
  }

  openImageViewerPopup(image: string) {
    this.#currentImage.set(image);
  }

  closeImageViewerPopup() {
    this.#currentImage.set(null);
  }

  get emojiAttachViewShow(): Readable<boolean> {
    return this.#isEmojiAttachViewShow;
  }

  toggleEmojiAttachView() {
    this.#isEmojiAttachViewShow.update((show) => !show);
  }
}

export const WindowService = new WindowServiceInit();
