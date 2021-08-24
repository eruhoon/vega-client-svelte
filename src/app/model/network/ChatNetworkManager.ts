import { ChatNetworkModel } from './ChatNetworkModel';

export class ChatNetworkManager {
  #model = new ChatNetworkModel();

  init(privateKey: string): void {
    this.#model.init(privateKey);
  }
}
