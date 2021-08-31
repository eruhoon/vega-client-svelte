export interface CheckerSocketModel {}

export type OnRefreshStreams = (streams: RefreshStream) => void;

export type RefreshStream = {
  external: CheckerSocketStream[];
  local: CheckerSocketStream[];
};

type CheckerSocketStream = {
  description: string;
  icon: string;
  keyid: string;
  nickname: string;
  platform: string;
  thumbnail: string;
  title: string;
  url: string;
  viewer: number;
};
