import { Writable, writable } from 'svelte/store';

export const ProfileService: ProfileServiceInit = {
  statusMessage: writable(''),
  profileIcon: writable(''),
  nickname: writable(''),
  platform: writable('local'),
};

type ProfileServiceInit = {
  readonly profileIcon: Writable<string>;
  readonly nickname: Writable<string>;
  readonly platform: Writable<string>;
  readonly statusMessage: Writable<string>;
};
