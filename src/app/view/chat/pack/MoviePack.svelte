<script lang="ts">
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';

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

<GeneralPurposeCard {icon} {title} {subtitle} {link} orientation="horizontal" />
