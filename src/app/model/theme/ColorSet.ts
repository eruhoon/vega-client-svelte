import type { ThemeColorSet } from './ThemeColorSet';

export class ColorSet {
  static readonly DefaultTheme: ThemeColorSet = {
    primaryForegroundColor: '#2a2f38',
    primaryBackgroundColor: '#ffffff',
  };

  static readonly DarkTheme: ThemeColorSet = {
    primaryForegroundColor: '#ffffff',
    primaryBackgroundColor: '#2a2f38',
  };
}
