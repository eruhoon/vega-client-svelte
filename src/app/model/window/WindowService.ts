import { Writable, writable } from 'svelte/store';

class WindowServiceInit {
  userListShow = writable(false);
  emojiAttachViewShow = writable(false);
  sideBarShow = writable(false);
  settingMenuShow = writable(false);
  siteSettingModalShow = writable(false);
  streamSettingModalShow = writable(false);
  profileSettingModalShow = writable(false);
  modal = writable(null);
}

export const WindowService = new WindowServiceInit();
