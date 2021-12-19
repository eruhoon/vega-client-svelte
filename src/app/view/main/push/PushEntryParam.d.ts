import type { VegaNotification } from './PushListService';

export type PushEntryParam = {
  hash: string;
  notification: VegaNotification;
  timestamp: number;
};
