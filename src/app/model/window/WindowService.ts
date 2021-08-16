import { Writable, writable } from 'svelte/store';

export const WindowService: WindowServiceInit = {
  userListShow: writable(false),
};

type WindowServiceInit = {
  readonly userListShow: Writable<boolean>;
};
