import axios from 'axios';

export class LoginCommand {
  private readonly URI = 'https://mycast.xyz:3001/auth';

  public async execute(id: string, password: string): Promise<LoginResult> {
    const query = `mcid=${id}&mcpw=${password}`;
    const { data } = await axios.post<LoginResponse>(this.URI, query);
    return data;
  }
}

type LoginResult = {
  result: boolean;
  sid: string;
  hash: string;
  message: string;
};

type LoginResponse = {
  result: boolean;
  sid: string;
  hash: string;
  message: string;
};
