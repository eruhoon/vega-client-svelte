<script>
  import GeneralPurposeCardPack from './GeneralPurposeCardPack.svelte';
  export let body;
  $: json = JSON.parse(body);

  $: icon = json.icon;
  $: title = json.title;
  $: link = json.link;
  $: subtitle = json.subtitle;
  $: orientation = json.orientation;
</script>

<GeneralPurposeCardPack {icon} {title} {link} {subtitle} {orientation} />
