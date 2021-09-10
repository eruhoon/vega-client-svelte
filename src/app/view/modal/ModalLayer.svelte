<script lang="ts">
  import { WindowService } from '../../model/window/WindowService';
  import NotifyUserModal from '../notification/NotifyUserModal.svelte';
  import ChatWidgetSettingModal from '../setting/ChatWidgetSettingModal.svelte';
  import DonationSettingModal from '../setting/DonationSettingModal.svelte';
  import ProfileSettingModal from '../setting/ProfileSettingModal.svelte';
  import SiteSettingModal from '../setting/SiteSettingModal.svelte';
  import StreamSettingModal from '../setting/StreamSettingModal.svelte';
  import AddStreamModal from './AddStreamModal.svelte';
  import UploadImageChatModal from './image/UploadImageChatModal.svelte';

  let modalWrapper: HTMLElement;
  let modal = null;

  WindowService.modal.subscribe((m) => {
    switch (m) {
      case 'profile':
        modal = ProfileSettingModal;
        break;
      case 'site':
        modal = SiteSettingModal;
        break;
      case 'stream':
        modal = StreamSettingModal;
        break;
      case 'chat-widget':
        modal = ChatWidgetSettingModal;
        break;
      case 'donation':
        modal = DonationSettingModal;
        break;
      case 'notify-user':
        modal = NotifyUserModal;
        break;
      case 'upload-image-chat':
        modal = UploadImageChatModal;
        break;
      case 'add-stream':
        modal = AddStreamModal;
        break;
      default:
        modal = null;
    }
  });

  const onClick = (e: Event) => {
    if (e.target === modalWrapper) {
      WindowService.closeModal();
    }
  };
</script>

{#if modal}
  <div class="modal-layer">
    <div class="click-blocker" />
    <div class="modal-wrapper" on:click={onClick} bind:this={modalWrapper}>
      <svelte:component this={modal} />
    </div>
  </div>
{/if}

<style lang="scss">
  .modal-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 60;
  }

  .click-blocker {
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
  }

  .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 100;
  }
</style>
