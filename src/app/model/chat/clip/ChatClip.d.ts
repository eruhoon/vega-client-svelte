export type ChatClip = ChatLinkClip | YoutubeClip;

type ChatLinkClip = {
  data: { link: string, title: string },
  hash: string;
  type: 'link'
}

type YoutubeClip = {
  data: { id: string, title: string },
  hash: string;
  type: 'youtube'
}
