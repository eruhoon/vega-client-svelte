<script lang="ts">
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';
  export let body: string;
  $: json = JSON.parse(body);

  $: icon = json.icon;
  $: link = json.link;
  $: title = json.name;
  $: subtitle = `${json.rarity} ${json.type.name}`;
  $: showType = 'in-app-browser';
  $: orientation = 'horizontal';
</script>

<GeneralPurposeCard {icon} {title} {link} {subtitle} {orientation} />
