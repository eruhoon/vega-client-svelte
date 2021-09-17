<script lang="ts">
  import { NotifyUserService } from '../../../model/notification/NotifyUserService';
  import { WindowService } from '../../../model/window/WindowService';

  export let hash: string = '';
  export let nickname: string = '';
  export let icon: string = '';
  export let isMobile: boolean = false;
  export let isComputer: boolean = false;

  const getFlagClass = (flag: boolean) => (flag ? 'active' : '');
  $: mobileClass = getFlagClass(isMobile);
  $: computerClass = getFlagClass(isComputer);

  const openNotifyUserModal = () => {
    WindowService.openModal('notify-user');
    NotifyUserService.setTarget({ hash, icon, nickname });
  };
</script>

<div class="chat-user-entry" on:click={openNotifyUserModal}>
  <div class="user-icon">
    <img src={icon} alt={nickname} />
  </div>
  <div class="info">
    <div class="nickname">
      <p>{nickname}</p>
    </div>
  </div>
  <div class="icon">
    <i class="fas fa-mobile {mobileClass}" />
    <i class="fas fa-desktop {computerClass}" />
  </div>
</div>

<style lang="scss">
  .chat-user-entry {
    display: block;
    width: calc(100% - 10px);
    height: 30px;
    padding: 5px;
    font-size: 14px;
    line-height: 20px;
    border-bottom: 1px solid #1f2226;

    &:last-child {
      border-bottom: 0px;
    }

    .user-icon {
      width: 30px;
      height: 30px;
      overflow: hidden;
      float: left;
      border-radius: 30px;

      img {
        width: 30px;
        height: 30px;
        object-fit: cover;
      }
    }

    .info {
      width: calc(100% - 90px);
      height: 30px;
      float: left;
      padding-left: 8px;

      div {
        width: 100%;
        float: left;
        padding-top: 8px;

        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

    .icon {
      width: 50px;
      height: 30px;
      float: right;

      i {
        width: 20px;
        text-align: center;
        font-size: 16px;
        padding: 7px 0px 7px 5px;
        float: right;
        color: #1f2226;
      }

      & > i.active {
        color: #ffffff;
      }
    }
  }
</style>
