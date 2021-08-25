import { Writable, writable } from 'svelte/store';
import type { ModalType } from './ModalType';

class WindowServiceInit {
  userListShow = writable(false);
  emojiAttachViewShow = writable(false);
  sideBarShow = writable(false);
  settingMenuShow = writable(false);
  siteSettingModalShow = writable(false);
  streamSettingModalShow = writable(false);
  profileSettingModalShow = writable(false);
  modal: Writable<ModalType | null> = writable(null);
}

export const WindowService = new WindowServiceInit();
