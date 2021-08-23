export class SessionStorageModel {
  set privateKey(privateKey: string) {
    sessionStorage.setItem('privateKey', privateKey);
  }

  get privateKey(): string {
    return sessionStorage.getItem('privateKey') || '';
  }
}
