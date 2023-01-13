<script lang="ts">
  import type { BotMuteSetting } from '../../../model/chat/ChatBotMuteSetting';
  import { ChatBotService } from '../../../service/ChatBotService';
  import { ChatNetworkService } from '../../../service/ChatNetworkService';
  import ChatBotEntry from './ChatBotEntry.svelte';
  import ChatSenderList from './ChatSenderList.svelte';

  let bots: Bot[] = [];
  let muteBotSettings: BotMuteSetting[] = [];

  ChatNetworkService.applyBotsEvent.subscribe((it) => (bots = it));
  ChatBotService.muteBotSettings.subscribe((it) => (muteBotSettings = it));

  function isMute(botHash: string, defaultMute: boolean): boolean {
    const found = muteBotSettings.find((setting) => setting.hash === botHash);
    if (found) {
      return found.mute;
    } else {
      return defaultMute;
    }
  }

  type Bot = {
    hash: string;
    icon: string;
    nickname: string;
    defaultMute: boolean;
  };
</script>

<ChatSenderList title="봇 리스트" length={bots.length}>
  {#each bots as { hash, icon, nickname, defaultMute }}
    <ChatBotEntry {hash} {icon} {nickname} mute={isMute(hash, defaultMute)} />
  {/each}
</ChatSenderList>
