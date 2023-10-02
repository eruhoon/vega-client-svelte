export type ChatInterfaceMenuEntryIcon = ImageIcon | FontAwesomeIcon;

type ImageIcon = {
  type: 'image',
  src: string
};

type FontAwesomeIcon = {
  type: 'fa',
  src: string
};
