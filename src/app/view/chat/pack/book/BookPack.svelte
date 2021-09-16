<script lang="ts">
  import { PopupContentService } from '../../../popup/PopupContentService';
  import GeneralPurposeCardPack from '../GeneralPurposeCardPack.svelte';

  export let body: string;
  let json: Book;
  let isError = false;
  $: json = parseBook(body);
  $: icon = json.thumbnail;
  $: title = json.title;
  $: subtitle = parseSubtitle(json);
  $: link = json.link;

  function parseBook(raw: string): Book {
    try {
      const json = JSON.parse(raw);
      if (!json) {
        throw null;
      }
      return json;
    } catch {
      isError = true;
      return {
        author: '',
        category: '',
        date: '',
        link: '',
        thumbnail: '',
        title: '',
        translator: '',
      };
    }
  }

  function onClick() {
    PopupContentService.addContent({
      type: 'iframe',
      src: { title: 'BookPack', link },
    });
  }

  function parseSubtitle(json: Book): string {
    const { author, translator } = json;
    return translator ? `${author} 저, ${translator} 역` : json.author;
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

{#if isError}
  <strong>잘못된 책</strong>
{:else}
  <GeneralPurposeCardPack
    {icon}
    {title}
    {subtitle}
    orientation="horizontal"
    on:click={onClick}
  />
{/if}
