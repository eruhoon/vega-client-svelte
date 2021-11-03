export class MobileUtils {
  static isMobile(): boolean {
    const userAgent = navigator.userAgent;
    const isMobile =
      userAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null || userAgent.match(/LG|SAMSUNG|Samsung/) != null;
    return isMobile;
  }
}
