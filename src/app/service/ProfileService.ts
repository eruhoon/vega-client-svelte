import { writable } from 'svelte/store';

class ProfileServiceInit {
  readonly profileIcon = writable('');
  readonly nickname = writable('');
  readonly statusMessage = writable('');
  readonly platform = writable('local');
}

export const ProfileService: ProfileServiceInit = new ProfileServiceInit();
