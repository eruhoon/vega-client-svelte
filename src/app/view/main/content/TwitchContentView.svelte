<script lang="ts">
  import { LinkUtils } from '../../../util/link/LinkUtils';

  import IframeContentView from './IframeContentView.svelte';

  export let src: string | null = null;
  $: link = src ? getLink(src) : null;

  const getLink = (src: string | null) => {
    return LinkUtils.addQuery(src, 'parent', location.hostname);
  };
</script>

<IframeContentView src={link} allowfullscreen={true} />
