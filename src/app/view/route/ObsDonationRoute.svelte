<script lang="ts">
  import { onMount } from 'svelte';
  import { DonationSocketioModel } from '../../model/socket/donation/DonationSocketioModel';
  import { SessionService } from '../../service/SessionService';

  // import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

  // const socket = io();
  onMount(() => {
    new DonationSocketioModel('localhost:3000', SessionService.getPrivateKey());
  });
</script>

donation page123123123
