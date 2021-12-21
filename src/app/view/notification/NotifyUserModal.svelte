<script lang="ts">
  import { get } from 'svelte/store';
  import type { NotificationTarget } from '../../model/notification/NotificationTarget';
  import { NotifyUserService } from '../../model/notification/NotifyUserService';
  import { SessionService } from '../../service/SessionService';
  import { SocketService } from '../../service/SocketService';
  import { ToastService } from '../../service/ToastService';
  import { WindowService } from '../../service/WindowService';

  let target: NotificationTarget | null = get(NotifyUserService.target);
  $: hash = target?.hash;
  $: icon = target?.icon;
  $: name = target?.nickname;

  NotifyUserService.target.subscribe((v) => (target = v));

  const notifyUser = () => {
    const privateKey = SessionService.getPrivateKey();
    SocketService.notifyUser?.execute(privateKey, hash);
    ToastService.toastText(`${name}님에게 호출했어요 !`);
  };

  const onSubmitClick = () => {
    notifyUser();
    WindowService.closeModal();
  };
</script>

<div class="modal">
  <img class="icon" src={icon} alt="호출 유저 아이콘" />
  <div>
    <div class="title">
      <i class="fas fa-bell" />
      <p>유저 호출</p>
    </div>
    <div class="text">
      <p>호출하시겠어요?</p>
    </div>
  </div>

  <button on:click={onSubmitClick}>
    <h3>호출</h3>
  </button>
</div>

<style lang="scss">
  .modal {
    position: absolute;
    left: calc(50% - 170px);
    top: calc(50% - 100px);
    width: 310px;
    height: 200px;
    padding: 0px 10px;
    opacity: 1;
    background: var(--primary-background-color);
    border-radius: 5px;
    border: 5px solid var(--primary-background-color);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    img {
      width: 120px;
      height: 120px;
      background: var(--primary-background-color);
      border-radius: 50%;
      margin-right: 10px;
      margin-top: 5px;
      float: left;

      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }

    div {
      width: calc(100% - 130px);
      float: left;
      .title {
        width: 100%;
        height: 20px;
        padding-top: 40px;

        text-align: left;

        i {
          float: left;
          font-size: 16px;
          line-height: 15px;
          color: var(--primary-foreground-color);
          padding: 0%;
          padding-right: 5px;
          margin: 0%;
        }
        p {
          float: left;
          color: var(--primary-foreground-color);
          padding: 0%;
          margin: 0%;
          font-size: 14px;
          width: auto;
          padding-left: 5px;
        }
      }

      .text {
        width: 100%;
        height: 40px;
        padding: 15px 0px;
        text-align: left;
        p {
          padding: 0%;
          margin: 0%;
          line-height: 24px;
          font-size: 20px;
          color: var(--primary-foreground-color);
        }
      }
    }

    button {
      width: calc(100% + 30px);
      height: 60px;
      margin: 0px -15px;
      background-color: var(--primary-activeground-color);
      border: 0px solid #f5f5f5;

      color: var(--primary-activeground-font-color);

      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      margin-top: 20px;

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
