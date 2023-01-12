<script lang="ts">
  import { ChatNetworkService } from '../../../service/ChatNetworkService';
  import ChatSenderEntry from './ChatSenderEntry.svelte';
  import ChatSenderList from './ChatSenderList.svelte';

  let bots: {
    hash: string;
    icon: string;
    nickname: string;
  }[] = [];

  ChatNetworkService.applyBotsEvent.subscribe((it) => (bots = it));
</script>

<ChatSenderList title="봇 리스트" length={bots.length}>
  {#each bots as { hash, icon, nickname }}
    <ChatSenderEntry {hash} {icon} {nickname} />
  {/each}
</ChatSenderList>
