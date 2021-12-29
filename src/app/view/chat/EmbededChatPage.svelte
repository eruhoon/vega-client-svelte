<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatNetworkService } from '../../service/ChatNetworkService';
  import ImagePopupLayer from '../main/popup/ImagePopupLayer.svelte';
  import ModalLayer from '../modal/ModalLayer.svelte';
  import ChatPage from './ChatPage.svelte';

  export let privateKey: string;

  onMount(() => {
    ChatNetworkService.init(privateKey);
  });
</script>

<ChatPage />
<ModalLayer />
<ImagePopupLayer />
