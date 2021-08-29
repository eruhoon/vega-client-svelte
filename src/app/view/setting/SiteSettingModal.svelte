<script lang="ts">
  import { get } from 'svelte/store';
  import { OptionService } from '../../model/option/OptionService';
  import SettingModal from './SettingModal.svelte';
  import PreferenceView from './site/SiteSettingPreferenceView.svelte';

  let enableTimestamp = get(OptionService.timestamp);
  let enableBot = get(OptionService.enableBot);

  OptionService.timestamp.subscribe((v) => (enableTimestamp = v));
  OptionService.enableBot.subscribe((v) => (enableBot = v));
</script>

<SettingModal title="사이트 설정" icon="fas fa-tools">
  <div slot="body" class="site-set-box">
    <PreferenceView
      title="채팅 시각 표기"
      enable={enableTimestamp}
      onClick={() => OptionService.setTimestamp(!enableTimestamp)}
    />
    <PreferenceView
      title="챗봇 표기"
      enable={enableBot}
      onClick={() => OptionService.setEnableBot(!enableBot)}
    />
  </div>
</SettingModal>

<style lang="scss">
  .site-set-box {
    width: calc(100% - 20px);
    height: 40px;
    padding: 5px 10px;
    border-bottom: 1px solid #1f2226;
  }
</style>
