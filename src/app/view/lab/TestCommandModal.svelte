<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import ModalTextInput from '../../view-framework/modal/input/ModalTextInput.svelte';

  import Modal from '../../view-framework/modal/Modal.svelte';

  let commandText: string = '';

  const dispatch = createEventDispatcher<{ oncloseclick: void }>();

  function onKeyDown(code: string) {
    if (code === 'Enter') {
      execute(commandText);
      commandText = '';
    }
  }

  function execute(commandText: string) {
    console.log(commandText);
  }
</script>

<Modal
  title="테스트 커맨드"
  icon="fas fa-flask"
  on:oncloseclick={() => dispatch('oncloseclick')}
>
  <div slot="body">
    <ModalTextInput
      title="Command"
      bind:value={commandText}
      name="Command"
      on:keydown={(e) => onKeyDown(e.detail)}
    />
  </div>
</Modal>
