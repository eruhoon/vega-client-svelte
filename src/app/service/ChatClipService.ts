import { Readable, writable, type Writable } from 'svelte/store';
import type { ChatClip } from '../model/chat/clip/ChatClip';

class ChatClipServiceInit {

    readonly #clips: Writable<ChatClip[]> = writable([]);

    get clips(): Readable<ChatClip[]> {
        return this.#clips;
    }

    updateClips(clips: ChatClip[]) {
        this.#clips.set(clips);
    }
}

export const ChatClipService = new ChatClipServiceInit();