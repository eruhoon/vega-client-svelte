<script lang="ts">
  import GeneralPurposeCard from './gpc/GeneralPurposeCard.svelte';

  export let body: string;
  let icon: string;
  let nickname: string;
  let content: string;
  $: {
    const json = JSON.parse(body);
    icon = json.icon;
    nickname = json.nickname;
    content = json.content;
  }
</script>

<GeneralPurposeCard
  {icon}
  title={nickname}
  subtitle={content}
  orientation="horizontal"
/>
