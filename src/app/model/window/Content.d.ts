export type Content =
  | IframeContent
  | MemoContent
  | PhotoContent
  | DonationContent
  | LocalStreamContent
  | TotoroStreamContent
  | HlsStreamContent
  | TwitchStreamContent;

type IframeContent = {
  type: 'iframe';
  src: string;
};

type MemoContent = {
  type: 'memo';
};

type PhotoContent = {
  type: 'photo';
};

type DonationContent = {
  type: 'donation';
};

type LocalStreamContent = {
  type: 'local-stream';
  src: LocalStreamSource;
};

type TotoroStreamContent = {
  type: 'totoro-stream';
  src: LocalStreamSource;
};

type HlsStreamContent = {
  type: 'hls';
  src: string;
};

type TwitchStreamContent = {
  type: 'twitch-stream';
  src: string;
};

export type LocalStreamSource = {
  icon: string;
  url: string;
  title: string;
};
