import { get, Readable, writable, Writable } from 'svelte/store';
import type { BotMuteSetting } from '../model/chat/ChatBotMuteSetting';
import { LocalStorageManager } from '../model/storage/LocalStorageManager';

class ChatBotServiceInit {
    readonly #muteBotSettings: Writable<BotMuteSetting[]> = writable([]);
    readonly #storage = new LocalStorageManager();

    constructor() {
        this.#loadMuteBots();
    }

    get muteBotSettings(): Readable<BotMuteSetting[]> {
        return this.#muteBotSettings;
    }

    setMuteBot(botHash: string, mute: boolean) {
        this.#muteBotSettings.update(it => {
            const filtered = it.filter(setting => setting.hash !== botHash);
            return [...filtered, { hash: botHash, mute }];
        });
        this.#saveMuteBots();
    }

    #loadMuteBots() {
        const rawMuteBots = this.#storage.muteBotSettings;
        const muteBots: BotMuteSetting[] = JSON.parse(rawMuteBots);
        this.#muteBotSettings.set(muteBots);
    }

    #saveMuteBots() {
        const muteBots = get(this.#muteBotSettings);
        const rawMuteBots = JSON.stringify(muteBots);
        this.#storage.muteBotSettings = rawMuteBots;
    }
}

export const ChatBotService = new ChatBotServiceInit();