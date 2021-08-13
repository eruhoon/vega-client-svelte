<script lang="ts">
  import type { ChatUserEntryProp } from './ChatUserEntryProp';

  export let prop: ChatUserEntryProp = {
    nickname: '',
    icon: '',
    level: 0,
    flag: {
      mobile: false,
      computer: false,
    },
  };

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(prop.flag.mobile);
  $: computerClass = getFlagClass(prop.flag.computer);
</script>

<div>
  <div class="user-icon">
    <img src={prop.icon} alt="" />
  </div>
  <div class="info">
    <div class="nickname">
      <span>{prop.nickname} /</span>
    </div>
    <div class="level">
      <span>Lv.{prop.level}</span>
    </div>
  </div>
  <div class="icon">
    <i class="material-icons {mobileClass}">phone_iphone</i>
    <i class="material-icons {computerClass}">computer</i>
  </div>
</div>
