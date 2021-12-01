export type Content =
  | IframeContent
  | MemoContent
  | PhotoContent
  | DonationContent
  | LocalStreamContent
  | TotoroStreamContent
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
  src: string;
};

type TotoroStreamContent = {
  type: 'totoro-stream';
  src: string;
};

type TwitchStreamContent = {
  type: 'twitch-stream';
  src: string;
};
