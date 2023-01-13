<script lang="ts">
  import { ChatBotService } from '../../../service/ChatBotService';
  import { ToastService } from '../../../service/ToastService';
  import ChatSenderEntry from './ChatSenderEntry.svelte';

  export let hash: string;
  export let icon: string;
  export let nickname: string;
  export let mute: boolean;

  $: muteClass = mute ? 'fa-bell-slash' : 'fa-bell active';

  function onEntryClick(e: CustomEvent<string>) {
    ToastService.toastText('해위2');
  }

  function onMuteClick() {
    const next = !mute;
    ChatBotService.setMuteBot(hash, next);
    ToastService.toastText(
      `'${nickname}'의 채팅을 ${next ? '껐어요' : '켰어요'}.`
    );
    mute = !mute;
  }
</script>

<ChatSenderEntry {hash} {icon} {nickname} on:onentryclick={onEntryClick}>
  <i class="fas {muteClass}" on:click|stopPropagation={onMuteClick} />
  <i class="fas fa-question active" />
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
