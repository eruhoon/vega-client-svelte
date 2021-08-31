export type Content = IframeContent | LocalStreamContent | TotoroStreamContent;

type IframeContent = {
  type: 'iframe';
  src: string;
};

type LocalStreamContent = {
  type: 'local-stream';
  src: string;
};

type TotoroStreamContent = {
  type: 'totoro-stream';
  src: string;
};
