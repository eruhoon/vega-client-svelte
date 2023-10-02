import { Readable, Writable, writable } from 'svelte/store';
import type { Content } from '../model/window/Content';
import type { ModalType } from '../model/window/ModalType';
import type { ActiveInterfaceMenu } from './window/ActiveInterfaceMenu';

class WindowServiceInit {
  readonly #activeInterfaceMenu: Writable<ActiveInterfaceMenu | null> =
    writable(null);
  #sideBarShow = writable(false);
  settingMenuShow = writable(false);
  #content: Writable<Content | null> = writable(null);
  #modal: Writable<ModalType | null> = writable(null);
  #currentImage: Writable<string | null> = writable(null);

  get activeInterfaceMenu(): Readable<ActiveInterfaceMenu> {
    return this.#activeInterfaceMenu;
  }

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

  toggleChatInterfaceMenu(menu: ActiveInterfaceMenu) {
    this.#activeInterfaceMenu.update(prev => {
      return prev !== menu ? menu : null;
    });
  }

  closeEmojiAttachView() {
    this.#activeInterfaceMenu.update(prev => {
      return prev !== 'emoji' ? prev : null;
    });
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

  closeContent() {
    this.#content.set(null);
  }
}

export const WindowService = new WindowServiceInit();
