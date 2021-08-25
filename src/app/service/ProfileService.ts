import { Writable, writable } from 'svelte/store';

export const ProfileService: ProfileServiceInit = {
  profileIcon: writable(''),
  nickname: writable(''),
  platform: writable('local'),
};

type ProfileServiceInit = {
  readonly profileIcon: Writable<string>;
  readonly nickname: Writable<string>;
  readonly platform: Writable<string>;
};
