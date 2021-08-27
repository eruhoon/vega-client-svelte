<script lang="ts">
  import TextSettingInput from './TextSettingInput.svelte';

  export let streamKey: string;
</script>

<TextSettingInput
  title="스트림 키"
  subtitle="STREAM KEY"
  bind:value={streamKey}
  name="stream-key"
/>
