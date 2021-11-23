<script lang="ts">
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';

  export let body: string;
  let json: Animation;
  $: json = JSON.parse(body);
  $: icon = json.thumbnail;
  $: title = json.title;
  $: subtitle = json.date;
  $: link = json.link;

  type Animation = {
    author: string;
    date: string;
    link: string;
    thumbnail: string;
    title: string;
  };
</script>

<GeneralPurposeCard {icon} {title} {subtitle} {link} orientation="horizontal" />
