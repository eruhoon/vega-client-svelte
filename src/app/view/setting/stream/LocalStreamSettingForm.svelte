<script lang="ts">
  import TextSettingInput from './TextSettingInput.svelte';

  export let streamKey: string;
  export let streamLink: string;
</script>

<TextSettingInput
  title="스트림 링크"
  subtitle="OBS FMS URL"
  value={streamLink}
  name="stream-fms-url"
/>
<TextSettingInput
  title="스트림 키"
  subtitle="STREAM KEY"
  value={streamKey}
  name="stream-key"
/>
