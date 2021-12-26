<script lang="ts">
  import { PopupContentService } from '../../popup/PopupContentService';
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';

  export let body: string;
  let icon: string;
  let title: string;
  let subtitle: string;
  let link: string;
  $: {
    try {
      const json: Movie = JSON.parse(body);
      icon = json.image;
      title = json.title;
      subtitle = json.pubDate;
      link = json.link;
    } catch {
      isError = true;
    }
  }

  function onClick() {
    PopupContentService.addContent({
      src: {
        link,
        title,
      },
      type: 'iframe',
    });
  }

  type Movie = {
    actor: string[];
    director: string[];
    image: string;
    link: string;
    pubDate: string;
    rate: string;
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
