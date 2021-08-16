import { writable } from 'svelte/store';
import type { User } from '../model/user/User';

export const UserListService = {
  users: writable<User[]>([]),
};
