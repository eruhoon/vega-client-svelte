<script lang="ts">
  import { SessionService } from '../../service/SessionService';
  import EmbededChatPage from '../chat/EmbededChatPage.svelte';

  let userHash: string | null = null;

  SessionService.subscribePrivateKey((v) => (userHash = v));
</script>

<EmbededChatPage privateKey={userHash} />
