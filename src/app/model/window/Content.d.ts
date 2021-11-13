export type Content =
  | IframeContent
  | MemoContent
  | PhotoContent
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
