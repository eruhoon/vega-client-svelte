<script lang="ts">
  import { WindowService } from '../../../service/WindowService';

  import BottomBarItem from './BottomBarItem.svelte';

  function onIconClick() {
    WindowService.openContent({
      type: 'iframe',
      src: 'https://colormytree.me/users/ae92e043efa8406f',
    });
  }
</script>

<BottomBarItem
  icon="https://i.imgur.com/4GO3NNJ.png"
  on:iconclick={onIconClick}
/>
