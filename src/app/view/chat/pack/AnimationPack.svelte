<script lang="ts">
  import { PopupContentService } from '../../popup/PopupContentService';
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';

  export let body: string;
  let json: Animation;
  $: json = JSON.parse(body);
  $: icon = json.thumbnail;
  $: title = json.title;
  $: subtitle = json.date;
  $: link = json.link;

  function onClick() {
    PopupContentService.addContent({
      src: {
        link,
        title,
      },
      type: 'iframe',
    });
  }

  type Animation = {
    author: string;
    date: string;
    link: string;
    thumbnail: string;
    title: string;
  };
</script>

<GeneralPurposeCard
  {icon}
  {title}
  {subtitle}
  orientation="horizontal"
  on:click={onClick}
/>
