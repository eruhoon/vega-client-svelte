import { writable } from 'svelte/store';

class ProfileServiceInit {
  readonly profileIcon = writable('');
  readonly nickname = writable('');
  readonly statusMessage = writable('');
  readonly platform = writable('local');
  readonly localId = writable('');
  readonly twitchId = writable('');
  readonly afreecaId = writable('');
}

export const ProfileService: ProfileServiceInit = new ProfileServiceInit();
