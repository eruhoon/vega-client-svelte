<script lang="ts">
  import { ToastService } from '../../../service/ToastService';
  import ChatInterfaceMenuEntry from '../ChatInterfaceMenuEntry.svelte';

  export let hash: string;
  export let nickname: string;
  export let link: string;

  function onEntryClick(e: CustomEvent<string>) {}

  function onNavigateClick() {
    ToastService.toastText('해위2');
    window.open(link, '_blank', 'width=1280,height=720');
  }
</script>

<ChatInterfaceMenuEntry {hash} {nickname} on:onentryclick={onEntryClick}>
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
