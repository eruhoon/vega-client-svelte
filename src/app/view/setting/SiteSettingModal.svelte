<script lang="ts">
  import { get } from 'svelte/store';
  import { OptionService } from '../../model/option/OptionService';
  import SettingModal from './SettingModal.svelte';
  import PreferenceView from './site/SiteSettingPreferenceView.svelte';

  let enableTimestamp = get(OptionService.timestamp);

  OptionService.timestamp.subscribe((v) => (enableTimestamp = v));

  const toggleTimestamp = () => {
    OptionService.setTimestamp(!enableTimestamp);
  };
</script>

<SettingModal title="사이트 설정" icon="fas fa-tools">
  <div slot="body" class="site-set-box">
    <PreferenceView
      title="채팅 시각 표기"
      enable={enableTimestamp}
      onClick={toggleTimestamp}
    />
  </div>
</SettingModal>

<style lang="scss">
  // 모달 기본 박스 구성
  .site-set-box {
    width: calc(100% - 20px);
    height: 40px;
    padding: 5px 10px;
    border-bottom: 1px solid #1f2226;
  }
</style>
