<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import ModalInputGroup from './ModalInputGroup.svelte';

  const dispatch = createEventDispatcher<{ keydown: string }>();

  export let title = '';
  export let subtitle = '';
  export let value = '';
  export let name = '';
  export let placeholder = '';
  export let type = 'text';

  function onKeyDown(e: KeyboardEvent) {
    dispatch('keydown', e.code);
  }
</script>

<ModalInputGroup {title} {subtitle}>
  {#if type === 'password'}
    <input type="password" bind:value {name} {placeholder} />
  {:else}
    <input type="text" bind:value {name} {placeholder} on:keydown={onKeyDown} />
  {/if}
</ModalInputGroup>

<style lang="scss">
  input {
    width: 100%;
    background: #1f2226;
    border: 0px;
    border-radius: 0%;
    color: #ffffff;
    padding: 15px 10px;
  }
</style>
