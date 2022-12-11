import { Readable, writable, Writable } from "svelte/store";
import type { ContentHistory } from "../model/history/ContentHistory";

const MAX_RECENT_COUNT = 10;

class ContentHistoryServiceInit {

    readonly #histories: Writable<ContentHistory[]> = writable([]);

    get histories(): Readable<ContentHistory[]> {
        return this.#histories;
    }

    addHistory(history: ContentHistory) {
        this.#histories.update(it => {
            if (it.every(h => !this.checkEqual(h, history))) {
                const next = [history, ...it].filter((_, i) => i < MAX_RECENT_COUNT);
                return next;
            } else {
                return it;
            }

        });
    }

    removeHistory(history: ContentHistory) {
        this.#histories.update(it => {
            return it.filter(h => !this.checkEqual(h, history));
        })
    }

    checkEqual(h1: ContentHistory, h2: ContentHistory): boolean {
        return h1.description === h2.description &&
            h1.icon === h2.icon &&
            h1.link === h2.link &&
            h1.thumbnail === h2.thumbnail &&
            h1.title === h2.title;
    }
}

export const ContentHistoryService = new ContentHistoryServiceInit();