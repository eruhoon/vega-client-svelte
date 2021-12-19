import { Readable, Writable, writable } from 'svelte/store';
import { HashGenerator } from '../../../util/hash/HashGenerator';
import type { PushEntryParam } from './PushEntryParam';

class PushListServiceInit {
  readonly #MAX_PUSH_LENGTH = 5;
  readonly #params: Writable<PushEntryParam[]> = writable([]);
  readonly #hashGenerator = new HashGenerator();

  get params(): Readable<PushEntryParam[]> {
    return this.#params;
  }

  push(notification: VegaNotification): void {
    const param: PushEntryParam = {
      hash: this.#hashGenerator.generate('PushList'),
      notification,
      timestamp: notification.timestamp,
    };
    this.#params.update((it) =>
      [param, ...it].filter((e, i) => i < this.#MAX_PUSH_LENGTH)
    );
  }

  readAll() {
    this.#params.update((it) => {
      it.map((param) => {
        param.notification.read = true;
        return param;
      });
      return it;
    });
  }
}

export const PushListService = new PushListServiceInit();

export type VegaNotification = {
  hash: string;
  icon: string;
  title: string;
  body: string;
  timestamp: number;
  read: boolean;
  mute: boolean;
  channel: NotificationChannelHash;
};

type NotificationChannel = {
  hash: string;
  name: string;
  browser: boolean;
  os: boolean;
};

type NotificationChannelHash = 'default' | 'alarm' | 'local-stream';
