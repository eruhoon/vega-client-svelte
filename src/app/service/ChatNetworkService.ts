import { ChatNetworkModel } from '../model/network/ChatNetworkModel';

class ChatNetworkManagerInit {
  #model = new ChatNetworkModel();

  init(privateKey: string): void {
    this.#model.init(privateKey);
  }
}

export const ChatNetworkService = new ChatNetworkManagerInit();
