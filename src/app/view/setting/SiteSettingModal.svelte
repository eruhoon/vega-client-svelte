<script lang="ts">
  import { OptionService } from '../../model/option/OptionService';
  import SettingModal from './SettingModal.svelte';

  let enableTimestamp = OptionService.enableTimestamp;

  OptionService.subscribeEnableTimestamp((v) => (enableTimestamp = v));

  const toggleTimestamp = () => {
    OptionService.updateEnableTimestamp((v) => !v);
  };
</script>

<SettingModal title="사이트 설정" icon="fas fa-tools">
  <div slot="body" class="site-set-box">
    <div class="set-title">
      <p>채팅 시각 표기</p>
    </div>
    <div class="set-switch">
      <label
        for="enableTimestamp"
        class="switch"
        class:active={enableTimestamp}
        on:click={toggleTimestamp}
      >
        <span class="slider" />
      </label>
    </div>
  </div>
</SettingModal>

<style lang="scss">
  // 모달 기본 박스 구성
  .site-set-box {
    width: calc(100% - 20px);
    height: 40px;
    padding: 5px 10px;
    border-bottom: 1px solid #1f2226;

    /* 잠시 꺼둠
          &:last-child{
            border-bottom: 0px;
          }
          &.max-w {
            height: 150px;
          }
          */
    .set-title {
      width: 80%;
      height: 42px;
      float: left;

      p {
        font-size: 18px;
        padding: 12px;
        color: #ffffff;
      }
    }

    .set-switch {
      width: calc(20% - 30px);
      height: 42px;
      float: right;
      margin-right: 12px;
      // padding-left: 30px;

      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 33px;
        margin-top: 3px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #1f2226;

        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 33px;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 28px;
        width: 28px;
        left: 5px;
        bottom: 3px;
        background-color: #ffffff;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
      }

      .active .slider {
        background-color: #ff4081;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #ff4081;
      }

      .active .slider:before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
      }
    }
  }
</style>
