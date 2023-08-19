<script lang="ts">
  import { onMount } from 'svelte';
  import type { ChatClip } from '../../../model/chat/clip/ChatClip';
  import ChatInterfaceMenu from '../ChatInterfaceMenu.svelte';
  import { ChatClipService } from '../../../service/ChatClipService';
  import ClipEntry from './ClipEntry.svelte';

  let generatedClips: ChatClip[] = [];

  onMount(() => {
    ChatClipService.clips.subscribe((it) => (generatedClips = it));
  });
</script>

<ChatInterfaceMenu title="클립 목록">
  {#each generatedClips as clip}
    <ClipEntry {clip} />
  {/each}
</ChatInterfaceMenu>
