<script lang="ts">
  import { NotifyUserService } from '../../../model/notification/NotifyUserService';
  import { WindowService } from '../../../service/WindowService';
  import ChatSenderEntry from './ChatSenderEntry.svelte';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: string = '';
  export let isMobile: boolean = false;
  export let isComputer: boolean = false;

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(isMobile);
  $: computerClass = getFlagClass(isComputer);

  function onEntryClick(e: CustomEvent<string>) {
    const hash = e.detail;
    openNotifyUserModal();
  }

  function openNotifyUserModal() {
    WindowService.openModal('notify-user');
    NotifyUserService.setTarget({ hash, icon, nickname });
  }
</script>

<ChatSenderEntry {hash} {nickname} {icon} on:onentryclick={onEntryClick}>
  <i class="fas fa-mobile {mobileClass}" />
  <i class="fas fa-desktop {computerClass}" />
</ChatSenderEntry>

<style lang="scss">
  i {
    width: 20px;
    text-align: center;
    font-size: 16px;
    padding: 7px 0px 7px 5px;
    float: right;
    color: var(--primary-hoverground-color);
  }

  i.active {
    color: var(--primary-foreground-color);
  }
</style>
