<script lang="ts">
  import { get } from 'svelte/store';
  import type { NotificationTarget } from '../../model/notification/NotificationTarget';
  import { NotifyUserService } from '../../model/notification/NotifyUserService';
  import { SessionService } from '../../model/session/SessionService';
  import { SocketService } from '../../model/socket/SocketService';
  import Modal from '../chat/modal/Modal.svelte';

  let target: NotificationTarget | null = get(NotifyUserService.target);
  $: hash = target?.hash;
  $: icon = target?.icon;

  NotifyUserService.target.subscribe((v) => (target = v));

  const notifyUser = () => {
    const privateKey = SessionService.getPrivateKey();
    SocketService.notifyUser?.execute(privateKey, hash);
  };
</script>

<Modal>
  <div class="modal" slot="modal">
    <img class="icon" src={icon} alt="호출 유저 아이콘" />
    <div class="title">
      <i class="material-icons">alarm</i>
      <p>유저 호출</p>
    </div>
    <div class="text">
      <p>호출하시겠어요?</p>
    </div>
    <button on:click={notifyUser}>
      <h3>호출</h3>
    </button>
  </div>
</Modal>

<style lang="scss">
  .modal {
    position: absolute;
    left: calc(50% - 150px);
    top: calc(50% - 60px);
    width: 300px;
    height: 120px;
    opacity: 1;
    background: #ffffff;
    border-radius: 5px;
    border: 5px solid #ffffff;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    img {
      width: 120px;
      height: 120px;
      background: #ffffff;
      border-radius: 15px;

      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

      position: absolute;
      top: -60px;
      left: 10px;
    }

    .title {
      width: calc(100% - 140px);
      height: 20px;
      padding-top: 10px;
      padding-left: 140px;

      text-align: left;

      position: absolute;
      top: -40px;
      left: 0px;

      i {
        float: left;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        padding: 0%;
        margin: 0%;
      }
      p {
        float: left;
        color: #ffffff;
        padding: 0%;
        margin: 0%;
        font-size: 14px;
        width: auto;
        padding-left: 5px;
      }
    }

    .text {
      width: calc(100% - 140px);
      height: 40px;
      padding: 15px 0px;
      padding-left: 130px;
      text-align: center;
      p {
        padding: 0%;
        margin: 0%;
        line-height: 24px;
        font-size: 20px;
        color: #757575;
      }
    }

    button {
      width: calc(100% + 10px);
      height: 60px;
      margin: -5px;
      background-color: #ff4081;
      border: 0px solid #f5f5f5;

      color: #ffffff;

      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-top: 4px;

      h3 {
        font-size: 24px;
        font-weight: bolder;
        line-height: 24px;
        padding: 0%;
        margin: 0%;
      }
    }
  }
</style>
