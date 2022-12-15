<script lang="ts">
  import { WindowService } from "../../../service/WindowService";

  import BottomBarItem from "./BottomBarItem.svelte";

  function onIconClick() {
    WindowService.openContent({
      type: "iframe",
      src: "https://colormytree.me/2022/01GM774PETTASQY75PFZBV8J3A",
    });
  }
</script>

<BottomBarItem
  icon="https://i.imgur.com/cdnNWKM.png"
  on:iconclick={onIconClick}
/>
