import { Writable, writable } from 'svelte/store';

export const WindowService: WindowServiceInit = {
  userListShow: writable(false),
  emojiAttachViewShow: writable(false),
  sideBarShow: writable(false),
  settingMenuShow: writable(false),
  siteSettingModalShow: writable(false),
  streamSettingModalShow: writable(false),
  profileSettingModalShow: writable(false),
};

type WindowServiceInit = {
  readonly userListShow: Writable<boolean>;
  readonly emojiAttachViewShow: Writable<boolean>;
  readonly sideBarShow: Writable<boolean>;
  readonly settingMenuShow: Writable<boolean>;
  readonly siteSettingModalShow: Writable<boolean>;
  readonly streamSettingModalShow: Writable<boolean>;
  readonly profileSettingModalShow: Writable<boolean>;
};
