import axios from 'axios';

export class JoinCommand {
  async execute(id: string, pw: string, nick: string): Promise<boolean> {
    const url = this.#getUri();
    try {
      const res = await axios.post<string>(url, this.#getBody(id, pw, nick));
      return true;
    } catch {
      return false;
    }
  }

  #getUri(): string {
    return 'https://mycast.xyz:3001/join';
  }

  #getBody(id: string, pw: string, nick: string): string {
    return `vgid=${id}&vgpw=${pw}&vgnick=${nick}`;
  }
}
