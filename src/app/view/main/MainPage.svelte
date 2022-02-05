<script lang="ts">
  import { MobileUtils } from '../../util/mobile/MobileUtils';
  import DesktopMainPage from './DesktopMainPage.svelte';
  import MobileMainPage from './MobileMainPage.svelte';

  export let privateKey: string;
</script>

{#if MobileUtils.isMobile()}
  <MobileMainPage {privateKey} />
{:else}
  <DesktopMainPage {privateKey} />
{/if}
