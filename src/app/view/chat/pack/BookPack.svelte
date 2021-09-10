<script lang="ts">
  import GeneralPurposeCardPack from './GeneralPurposeCardPack.svelte';

  export let body: string;
  let json: Book;
  $: json = JSON.parse(body);
  $: icon = json.thumbnail;
  $: title = json.title;
  $: subtitle = parseSubtitle(json);
  $: link = json.link;

  function parseSubtitle(json: { author: string; translator: string }): string {
    return json.translator
      ? `${json.author} 저, ${json.translator} 역`
      : json.author;
  }

  type Book = {
    author: string;
    category: string;
    date: string;
    link: string;
    thumbnail: string;
    title: string;
    translator: string;
  };
</script>

<GeneralPurposeCardPack
  {icon}
  {title}
  {subtitle}
  {link}
  orientation="horizontal"
/>
