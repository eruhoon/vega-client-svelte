export class ChatHistoryManager {
  static readonly #DEFAULT_INDEX = -1;
  static readonly #CAPACITY: number = 10;
  #chatHistories: string[];
  #index: number;

  constructor() {
    this.#chatHistories = [];
    this.#index = ChatHistoryManager.#DEFAULT_INDEX;
  }

  addHistory(chat: string): void {
    this.#chatHistories.unshift(chat);
    this.#chatHistories = this.#chatHistories.filter(
      (_, i) => i < ChatHistoryManager.#CAPACITY
    );
  }

  getPrev(): string {
    this.#index++;
    if (this.#index >= this.#chatHistories.length) {
      this.#index = this.#chatHistories.length - 1;
      console.warn('oldest history');
    }
    return this.#chatHistories[this.#index];
  }

  getNext(): string {
    this.#index--;
    if (this.#index < 0) {
      this.#index = -1;
      console.warn('latest history');
    }
    return this.#index >= 0 ? this.#chatHistories[this.#index] : '';
  }

  isEmpty(): boolean {
    return this.#chatHistories.length === 0;
  }

  resetIndex(): void {
    this.#index = ChatHistoryManager.#DEFAULT_INDEX;
  }
}
