<script lang="ts">
  import { WindowService } from '../../../service/WindowService';

  import BottomBarItem from './BottomBarItem.svelte';

  function onIconClick() {
    WindowService.openImageViewerPopup('https://i.imgur.com/Dl6pb97.jpg');
  }
</script>

<BottomBarItem
  icon="https://i.imgur.com/eaQRibR.png"
  on:iconclick={onIconClick}
/>
