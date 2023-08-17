export type ChatClip = ChatLinkClip;

type ChatLinkClip = {
    data: { link: string, title: string },
    hash: string;
    type: 'link'
}