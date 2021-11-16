import { ChatNetworkModel } from '../model/network/ChatNetworkModel';

class ChatNetworkServiceInit {
  #model = new ChatNetworkModel();

  init(privateKey: string): void {
    this.#model.init(privateKey);
  }
}

export const ChatNetworkService = new ChatNetworkServiceInit();
