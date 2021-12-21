import type { ThemeColorSet } from './ThemeColorSet';

export class ColorSet {
  static readonly DefaultTheme: ThemeColorSet = {
    primaryForegroundColor: '#424242',
    primaryBackgroundColor: '#ffffff',
    primaryHovergroundColor: '#f0f0f0',
    primaryActivegroundColor: '#ff4081',
    primaryActivegroundFontColor: '#ffffff',
    primaryBordergroundColor: '#e0e0e0',
    primaryBoxShadow: '2px 0px 5px 1px rgb(0 0 0 / 15%),1px 0px 5px 0px rgb(0 0 0 / 5%), 1px 0px 5px 0px rgb(0 0 0 / 5%)',
    primaryChatShadow: '0 0 8px 0 rgb(0 0 0 / 10%), 0 0 15px 0 rgb(0 0 0 / 5%), 0 0 20px 4px rgb(0 0 0 / 5%)',
    primarySettingShadow: '0px 2px 10px 6px rgb(0 0 0 / 5%), 0px 2px 0px 0px rgb(0 0 0 / 2%), 0px 0px 2px 0px rgb(0 0 0 / 2%)',
  };

  static readonly DarkTheme: ThemeColorSet = {
    primaryForegroundColor: '#ffffff',
    primaryBackgroundColor: '#2a2f38',
    primaryHovergroundColor: '#1f2226',
    primaryActivegroundColor: '#ff4081',
    primaryActivegroundFontColor: '#ffffff',
    primaryBordergroundColor: '#0a0c0e',
    primaryBoxShadow: '2px 0px 5px 1px rgb(0 0 0 / 40%),1px 0px 5px 0px rgb(0 0 0 / 30%), 1px 0px 5px 0px rgb(0 0 0 / 30%)',
    primaryChatShadow: '0 0 8px 0 rgb(0 0 0 / 40%), 0 0 15px 0 rgb(0 0 0 / 30%), 0 0 20px 4px rgb(0 0 0 / 30%)',
    primarySettingShadow: '0px 2px 10px 6px rgb(0 0 0 / 20%), 0px 2px 0px 0px rgb(0 0 0 / 14%), 0px 0px 2px 0px rgb(0 0 0 / 12%)',
  };
}
/* 
  var(--primary-foreground-color)
  var(--primary-background-color)
  var(--primary-hoverground-color)
  var(--primary-activeground-color)
  var(--primary-activeground-font-color)
  var(--primary-borderground-color)
  var(--primary-box-shadow)
  var(--primary-chat-shadow)
  var(--primary-setting-shadow)
*/

