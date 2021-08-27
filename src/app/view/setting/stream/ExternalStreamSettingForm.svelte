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
<button class="stream-sub">
  <h2>방송 설정 저장</h2>
</button>

<style lang="scss">
  .preview-img {
    width: 100%;
    max-height: 265px;
    overflow: hidden;

    margin-bottom: 15px;

    img {
      width: 100%;
    }
  }
  .input-group {
    width: 100%;
    margin-bottom: 15px;

    p {
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      background: #1f2226;
      border: 0px;
      border-radius: 0%;
      color: #ffffff;
      padding: 15px 10px;
    }
  }
  .stream-sub {
    width: calc(100% + 30px);
    height: auto;
    margin: 0px -15px;
    border: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    padding: 20px 15px;
    background-color: #ff4081;
    color: #ffffff;
  }
</style>
