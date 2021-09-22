import { Readable, Writable, writable } from 'svelte/store';
import { HashGenerator } from '../../../util/hash/HashGenerator';
import type { PushEntryParam } from './PushEntryParam';

class PushListServiceInit {
  readonly #MAX_PUSH_LENGTH = 10;
  readonly #params: Writable<PushEntryParam[]> = writable([]);
  readonly #hashGenerator = new HashGenerator();

  get params(): Readable<PushEntryParam[]> {
    return this.#params;
  }

  push(notification: VegaNotification): void {
    const param: PushEntryParam = {
      hash: this.#hashGenerator.generate('PushList'),
      notification,
      timeText: this.#createTimeText(notification.timestamp),
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

  #createTimeText(timestamp: number): string {
    const now = new Date().getTime();
    const ago = now - timestamp;
    const agoSecond = Math.round(ago / 1000);
    const agoMinute = Math.floor(agoSecond / 60);
    const agoHour = Math.floor(agoMinute / 60);
    const agoDate = Math.floor(agoHour / 24);
    let timeText: string;
    if (agoDate > 0) {
      timeText = `${agoDate}일 전`;
    } else if (agoHour > 0) {
      timeText = `${agoHour}시간 전`;
    } else if (agoMinute > 0) {
      timeText = `${agoMinute}분 전`;
    } else {
      timeText = '방금';
    }
    return timeText;
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
