<script lang="ts">
  import type { User } from '../../../model/user/User';

  import { UserListService } from '../../../service/UserListService';
  import ChatUserEntry from './ChatUserEntry.svelte';

  import type { ChatUserEntryProp } from './ChatUserEntryProp';

  let users: User[] = [];
  UserListService.users.subscribe((u) => {
    users = u;
    console.log(u);
  });

  $: props = users.map<ChatUserEntryProp>((user) => {
    return {
      icon: user.icon,
      nickname: user.nickname,
      flag: {
        computer: user.computer,
        mobile: user.mobile,
      },
    };
  });
</script>

<div class="chat-user-list">
  <div class="cu-list-title">
    <h4>채팅 접속자</h4>
    <span>
      <i class="material-icons"> person_pin </i>
      <p>{props.length}명</p>
    </span>
  </div>
  <div class="cu-entry">
    {#each props as userProp}
      <ChatUserEntry prop={userProp} />
    {/each}
  </div>
</div>
