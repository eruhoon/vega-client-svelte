import { Readable, writable, Writable } from "svelte/store";

const MAX_RECENT_COUNT = 10;

class EmojiServiceInit {

    readonly #recents: Writable<string[]> = writable([]);

    get recents(): Readable<string[]> {
        return this.#recents;
    }

    registerRecent(emoji: string) {
        this.#recents.update(it => {
            const filtered = it.filter(e => e !== emoji)
                .slice(0, MAX_RECENT_COUNT - 1);
            console.log([emoji, ...filtered]);
            return [emoji, ...filtered];
        });
    }
}

export const EmojiService = new EmojiServiceInit();