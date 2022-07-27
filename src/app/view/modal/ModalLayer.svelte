<script lang="ts">
  import { WindowService } from '../../service/WindowService';
  import Layer from '../../view-framework/layer/Layer.svelte';
  import TestCommandModal from '../lab/TestCommandModal.svelte';
  import NotifyUserModal from '../notification/NotifyUserModal.svelte';
  import BookmarkSettingModal from '../setting/bookmark/BookmarkSettingModal.svelte';
  import ChatWidgetSettingModal from '../setting/ChatWidgetSettingModal.svelte';
  import DonationSettingModal from '../setting/DonationSettingModal.svelte';
  import ProfileSettingModal from '../setting/ProfileSettingModal.svelte';
  import SiteSettingModal from '../setting/SiteSettingModal.svelte';
  import StreamSettingModal from '../setting/StreamSettingModal.svelte';
  import AddStreamModal from './AddStreamModal.svelte';
  import UploadImageChatModal from './image/UploadImageChatModal.svelte';
  import UploadMemoModal from './memo/UploadMemoModal.svelte';

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
      case 'bookmark':
        modal = BookmarkSettingModal;
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
      case 'upload-memo':
        modal = UploadMemoModal;
        break;
      case 'test-command':
        modal = TestCommandModal;
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
  <Layer zIndex={60}>
    <div class="click-blocker" />
    <div class="modal-wrapper" on:click={onClick} bind:this={modalWrapper}>
      <svelte:component this={modal} />
    </div>
  </Layer>
{/if}

<style lang="scss">
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
  }
</style>
