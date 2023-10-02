<script lang="ts">
  import type { ChatClip } from '../../../model/chat/clip/ChatClip';
  import { WindowService } from '../../../service/WindowService';
  import ChatInterfaceMenuEntry from '../ChatInterfaceMenuEntry.svelte';

  export let clip: ChatClip;

  function onEntryClick(e: CustomEvent<string>) {}

  function onNavigateClick() {
    switch (clip.type) {
      case 'link':
        window.open(clip.data.link, '_blank', 'width=1280,height=720');
        break;
      case 'youtube':
        WindowService.openContent({
          type: 'iframe',
          src: `https://www.youtube.com/embed/${clip.data.id}?autoplay=1`,
        });
    }
  }
</script>

<ChatInterfaceMenuEntry
  hash={clip.hash}
  nickname={clip.data.title}
  on:onentryclick={onEntryClick}
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <i
    class="fas fa-arrow-circle-right"
    on:click|stopPropagation={onNavigateClick}
  />
</ChatInterfaceMenuEntry>

<style lang="scss">
  i {
    cursor: pointer;
  }
</style>
