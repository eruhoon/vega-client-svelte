<script lang="ts">
  import { PopupContentService } from '../../../popup/PopupContentService';
  import BottomBarItem from '../BottomBarItem.svelte';

  export let title: string;
  export let icon: string = '';
  export let link: string;

  function onIconClick() {
    PopupContentService.addContent({
      src: { link, title },
      type: 'iframe',
    });
  }
</script>

<BottomBarItem {icon} on:iconclick={onIconClick} />
