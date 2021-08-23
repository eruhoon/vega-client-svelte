export class SessionModel {
  set privateKey(privateKey: string | null) {
    sessionStorage.setItem('privateKey', privateKey);
  }

  get privateKey(): string | null {
    return sessionStorage.getItem('privateKey') || null;
  }
}
