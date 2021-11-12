export type Photo = {
  hash: string;
  url: string;
  width: number;
  height: number;
  mimeType: string;
  regDate: Date;
  viewer: number;
  tags: string[];
  isForAdult: boolean;
};
