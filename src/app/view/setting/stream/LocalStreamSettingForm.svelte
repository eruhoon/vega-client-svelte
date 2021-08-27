<script>
  import TextSettingInput from './TextSettingInput.svelte';
</script>

<div class="preview-img">
  <img
    alt="이미지보기"
    src="https://cphoto.asiae.co.kr/listimglink/6/2020060911301484295_1591669814.jpg"
  />
</div>
<div class="input-group">
  <p>방송 배경 설정</p>
  <input type="text" placeholder="이미지 주소" name="stream-image-url" />
</div>
<TextSettingInput
  title="스트림 링크"
  subtitle="OBS FMS URL"
  value="rtmp://totoro.mycast.xyz/live"
  name="stream-fms-url"
/>
<TextSettingInput
  title="스트림 키"
  subtitle="STREAM KEY"
  value="asdguioqwberh8hu3o21j4"
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
</style>
