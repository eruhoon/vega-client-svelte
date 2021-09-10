<script lang="ts">
  import GeneralPurposeCardPack from './GeneralPurposeCardPack.svelte';

  export let body: string;
  let isError: boolean = false;
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

<GeneralPurposeCardPack
  {icon}
  {title}
  {subtitle}
  {link}
  orientation="horizontal"
/>
