import { Writable, writable } from 'svelte/store';

export const ProfileService: ProfileServiceInit = {
  profileIcon: writable(''),
  nickname: writable(''),
};

type ProfileServiceInit = {
  readonly profileIcon: Writable<string>;
  readonly nickname: Writable<string>;
};
