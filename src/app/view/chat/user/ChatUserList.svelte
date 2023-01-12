<script lang="ts">
  import type { User } from '../../../model/user/User';
  import { ChatNetworkService } from '../../../service/ChatNetworkService';
  import ChatSenderList from './ChatSenderList.svelte';
  import ChatUserEntry from './ChatUserEntry.svelte';

  let users: User[] = [];

  ChatNetworkService.applyUsersEvent.subscribe((it) => (users = it));
</script>

<ChatSenderList title="채팅 접속자" length={users.length}>
  {#each users as { hash, icon, nickname, computer, mobile }}
    <ChatUserEntry
      {hash}
      {icon}
      {nickname}
      isComputer={computer}
      isMobile={mobile}
    />
  {/each}
</ChatSenderList>
