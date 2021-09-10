<script lang="ts">
  import { WindowService } from '../../../model/window/WindowService';
  import ExternalStreamPack from './ExternalStreamPack.svelte';

  export let body: string;
  let json: Param;
  $: json = JSON.parse(body);
  $: icon = json.icon;
  $: name = json.nickname;
  $: id = json.keyid;
  $: link = `https://play.afreecatv.com/${id}/embed`;

  function onClick() {
    WindowService.openContent({
      type: 'iframe',
      src: link,
    });
  }

  function onContextMenu() {
    window.open(link);
  }

  type Param = {
    description: string;
    icon: string;
    keyid: string;
    nickname: string;
    platform: string;
    result: boolean;
    title: string;
  };
</script>

<ExternalStreamPack
  {name}
  {id}
  {icon}
  {onClick}
  {onContextMenu}
  backgroundColor="#0545b1"
/>
