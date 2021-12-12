import io from 'socket.io-client';
import { HashGenerator } from '../../../util/hash/HashGenerator';
import { PushListService } from '../../../view/main/push/PushListService';
import type {
  CheckerSocketModel,
  OnRefreshStreams,
} from './CheckerSocketModel';

const KEY_NEW_STREAM = 'new_stream_notification';

export class SocketIoCheckerSocketModel implements CheckerSocketModel {
  #socket: SocketIOClient.Socket;
  #onRefreshStream: OnRefreshStreams | null = null;

  constructor(host: string, privateKey: string) {
    this.#socket = SocketIoCheckerSocketModel.#createSocket(host, privateKey);
    this.#socket.on('connect', () => {
      console.log('connected');
    });
    this.#socket.on('refresh_streams', (raw: any) => {
      this.#onRefreshStream(raw);
    });
    this.#socket.on(KEY_NEW_STREAM, (raw: NewStreamNotificationParam) => {
      PushListService.push({
        hash: new HashGenerator().generate('newStreamNotification'),
        title: '새 방송 알림',
        icon: raw.icon,
        body: `${raw.nickname} 방송을 시작합니다.`,
        mute: true,
        channel: 'local-stream',
        read: false,
        timestamp: new Date().getTime(),
      });
    });
  }

  onRefreshStream(callback: OnRefreshStreams | null) {
    this.#onRefreshStream = callback;
  }

  static #createSocket(
    host: string,
    privateKey: string
  ): SocketIOClient.Socket {
    return io.connect(`https://${host}?key=${privateKey}`);
  }
}

type NewStreamNotificationParam = {
  description: string;
  icon: string;
  keyid: string;
  nickname: string;
  onair: boolean;
  platform: string;
  result: boolean;
  thumbnail: string;
  title: string;
  url: string;
  viewer: number;
};
