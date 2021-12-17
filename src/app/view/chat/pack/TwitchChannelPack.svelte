<script lang="ts">
  import { WindowService } from '../../../service/WindowService';
  import ExternalStreamPack from './ExternalStreamPack.svelte';

  export let body: string;
  let isError: boolean = false;
  let icon: string;
  let name: string;
  let id: string;
  let link: string;
  $: {
    try {
      const json = JSON.parse(body);
      icon = json.stream.channel.logo;
      name = json.stream.channel.display_name;
      id = json.stream.channel.name;
      link = `https://player.twitch.tv/?channel=${id}`;
    } catch {
      isError = true;
    }
  }

  function onClick() {
    WindowService.openContent({
      type: 'twitch-stream',
      src: link,
    });
  }

  function onContextMenu() {
    window.open(link + '&parent=' + location.hostname);
  }
</script>

{#if isError}
  <strong>잘못된 트위치 채널</strong>
{:else}
  <ExternalStreamPack
    {icon}
    {name}
    {id}
    {onClick}
    {onContextMenu}
    backgroundColor="#6441a4"
  />
{/if}
