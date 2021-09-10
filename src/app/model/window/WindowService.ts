import { Readable, Writable, writable } from 'svelte/store';
import type { Content } from './Content';
import type { ModalType } from './ModalType';

class WindowServiceInit {
  userListShow = writable(false);
  #isEmojiAttachViewShow = writable(false);
  #sideBarShow = writable(false);
  settingMenuShow = writable(false);
  #content: Writable<Content | null> = writable(null);
  #modal: Writable<ModalType | null> = writable(null);
  #currentImage: Writable<string | null> = writable(null);

  get content(): Readable<Content> {
    return this.#content;
  }

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

  closeEmojiAttachView() {
    this.#isEmojiAttachViewShow.set(false);
  }

  get sideBarShow(): Readable<boolean> {
    return this.#sideBarShow;
  }

  toggleSideBar() {
    this.#sideBarShow.update((show) => !show);
  }

  closeSideBar() {
    this.#sideBarShow.set(false);
  }

  openContent(content: Content) {
    this.#content.set(null);
    setTimeout(() => this.#content.set(content));
  }
}

export const WindowService = new WindowServiceInit();
