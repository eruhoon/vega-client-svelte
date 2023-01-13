<script lang="ts">
  import { ChatNetworkService } from '../../../service/ChatNetworkService';
  import ChatBotEntry from './ChatBotEntry.svelte';
  import ChatSenderList from './ChatSenderList.svelte';

  let bots: {
    hash: string;
    icon: string;
    nickname: string;
    defaultMute: boolean;
  }[] = [];

  ChatNetworkService.applyBotsEvent.subscribe((it) => (bots = it));
</script>

<ChatSenderList title="봇 리스트" length={bots.length}>
  {#each bots as { hash, icon, nickname, defaultMute }}
    <ChatBotEntry {hash} {icon} {nickname} mute={defaultMute} />
  {/each}
</ChatSenderList>
