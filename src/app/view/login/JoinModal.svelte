<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { LoginCommand } from '../../model/login/LoginCommand';
  import { ToastService } from '../../service/ToastService';
  import ModalTextInput from '../../view-framework/modal/input/ModalTextInput.svelte';
  import Modal from '../../view-framework/modal/Modal.svelte';

  const dispatch = createEventDispatcher<{ oncloseclick: void }>();
  let id: string;
  let nickname: string;
  let password: string;
  let passwordConfirm: string;
  let isValid: boolean = false;

  $: isValid =
    id?.length >= 4 &&
    id?.length <= 20 &&
    password?.length >= 4 &&
    password?.length <= 20 &&
    nickname?.length > 0 &&
    nickname?.length <= 20 &&
    password === passwordConfirm;

  async function onClick() {
    const result = await new LoginCommand().execute(id, password);
    if (result.result) {
      ToastService.toastText('가입 요청 성공');
    } else {
      ToastService.toastText('가입 요청 실패');
    }
    dispatch('oncloseclick');
  }
</script>

<Modal
  title="회원 가입"
  icon="fas fa-tools"
  on:oncloseclick={() => dispatch('oncloseclick')}
>
  <div slot="body" class="modal-body">
    <ModalTextInput title="아이디" bind:value={id} name="아이디" />
    <ModalTextInput title="닉네임" bind:value={nickname} name="닉네임" />
    <ModalTextInput
      title="비밀번호"
      name="비밀번호"
      placeholder="비밀번호"
      bind:value={password}
      type="password"
    />
    <ModalTextInput
      title="비밀번호 확인"
      name="비밀번호 확인"
      placeholder="비밀번호 확인"
      bind:value={passwordConfirm}
      type="password"
    />
  </div>
  <div slot="footer">
    <button
      class="footer-button"
      type="submit"
      on:click={onClick}
      disabled={!isValid}
    >
      JOIN
    </button>
  </div>
</Modal>

<style lang="scss">
  .footer-button {
    width: 100%;
    height: auto;
    border: 0px;
    background-color: #ff4081;
    color: #ffffff;

    &:disabled {
      background-color: #a8a8a8;
    }
  }
</style>
