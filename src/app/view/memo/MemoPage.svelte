<script>
  import { MobileUtils } from '../../util/mobile/MobileUtils';
  import DesktopMemoPage from './DesktopMemoPage.svelte';
  import MobileMemoPage from './MobileMemoPage.svelte';
</script>

{#if MobileUtils.isMobile()}
  <MobileMemoPage />
{:else}
  <DesktopMemoPage />
{/if}
