<script lang="ts">
  import ChatSenderEntry from './ChatSenderEntry.svelte';

  export let hash: string;
  export let icon: string;
  export let nickname: string;
  export let mute: boolean;
</script>

<ChatSenderEntry {hash} {icon} {nickname}>
  {#if mute}
    <i class="fas fa-bell-slash" />
  {:else}
    <i class="fas fa-bell active" />
  {/if}
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
