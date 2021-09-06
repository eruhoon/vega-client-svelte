export class ClipboardImageParser {
  parseImageFile(rawData: DataTransfer | null): File | null {
    if (!rawData || !rawData.files || !rawData.files.item(0)) {
      console.warn('no data', rawData);
      return null;
    }
    const file = rawData.files.item(0);
    if (!file || file.type.indexOf('image') === -1) {
      console.warn('no image');
      return null;
    }
    return file;
  }

  parseImageUrl(
    rawData: DataTransfer | null,
    callback: (result: string | null) => void
  ) {
    if (!rawData || !rawData.items || !rawData.items[0]) {
      console.warn('no data', rawData);
      callback(null);
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < rawData.items.length; i++) {
        const item = rawData.items[i];
        if (item.type === 'text/plain') {
          return new Promise<string>((resolve) => {
            item.getAsString((link) => {
              callback(link);
            });
          });
        }
        return;
      }
      callback(null);
    }
  }
}
