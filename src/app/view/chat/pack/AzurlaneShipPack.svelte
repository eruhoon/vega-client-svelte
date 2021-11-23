<script lang="ts">
  import { PopupContentService } from '../../popup/PopupContentService';

  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';
  export let body: string;
  $: json = JSON.parse(body);

  $: icon = json.icon;
  $: link = json.link;
  $: title = json.name;
  $: subtitle = `${json.rarity} ${json.type.name}`;
  $: orientation = 'horizontal';

  function onClick() {
    PopupContentService.addContent({
      src: {
        link,
        title,
      },
      type: 'iframe',
    });
  }
</script>

<GeneralPurposeCard
  {icon}
  {title}
  {subtitle}
  {orientation}
  on:click={onClick}
/>
