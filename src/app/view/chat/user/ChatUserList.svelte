<script lang="ts">
  import type { User } from '../../../model/user/User';
  import { UserListService } from '../../../service/UserListService';
  import ChatUserEntry from './ChatUserEntry.svelte';

  let users: User[] = [];

  UserListService.users.subscribe((u) => (users = u));
</script>

<div class="chat-user-list">
  <div class="cu-list-title">
    <h4>채팅 접속자</h4>
    <span>
      <i class="material-icons"> person_pin </i>
      <p>{users.length}명</p>
    </span>
  </div>
  <div class="cu-entry">
    {#each users as { icon, nickname, computer, mobile }}
      <ChatUserEntry
        {icon}
        {nickname}
        isComputer={computer}
        isMobile={mobile}
      />
    {/each}
  </div>
</div>
