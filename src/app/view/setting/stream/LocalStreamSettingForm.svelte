<script lang="ts">
  import TextSettingInput from './TextSettingInput.svelte';

  export let streamKey: string;
  export let streamLink: string;
</script>

<div class="preview-img">
  <img
    alt="이미지보기"
    src="https://cphoto.asiae.co.kr/listimglink/6/2020060911301484295_1591669814.jpg"
  />
</div>
<TextSettingInput
  title="방송 배경 설정"
  placeholder="이미지 주소"
  name="stream-image-url"
/>
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
</style>
