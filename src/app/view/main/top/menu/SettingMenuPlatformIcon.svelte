<script lang="ts">
  import SettingMenuImage from './SettingMenuImage.svelte';

  export let platformId: string = 'local';
</script>

{#if platformId === 'local'}
  <SettingMenuImage slot="extra" imageSrc="/assets/image/stream/mycast.svg" />
{:else if platformId === 'totoro'}
  <SettingMenuImage slot="extra" imageSrc="/assets/image/stream/totoro.svg" />
{:else if platformId === 'afreeca'}
  <SettingMenuImage
    slot="extra"
    imageSrc="/assets/image/stream/afreecatv.svg"
  />
{:else if platformId === 'twitch'}
  <SettingMenuImage slot="extra" imageSrc="/assets/image/stream/twitch.svg" />
{:else}
  <SettingMenuImage slot="extra" imageSrc="/assets/image/stream/mycast.svg" />
{/if}
