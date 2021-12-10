<script lang="ts">
  type videoSet = {
    donationUse: boolean;
    CoinUse: boolean;
    ttsTextCount: number;
    noticeLayout: string;
    titleTemplate: string;
    fontSize: number;
  };
  let videoSet: videoSet = {
    donationUse: false,
    CoinUse: false,
    ttsTextCount: 100,
    noticeLayout: 'center',
    titleTemplate: '{name}님이 영상후원을 해주셧습니다.',
    fontSize: 20,
  };
</script>

<article class="layout">
  <div class="container">
    <div class="components">
      <div class="title">
        <h1>후원 설정 / <small> Support Setting</small></h1>
      </div>
      <div class="card">
        <div class="btn-group">
          <h3>도네이션 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={videoSet.donationUse} />
            <span class="slider round" />
          </label>
        </div>
        <!--
        <hr />
        <div class="btn-group">
          <h3>마캐코인 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={videoSet.CoinUse} />
            <span class="slider round" />
          </label>
        </div>-->
      </div>
    </div>
    <div class="components">
      <div class="title">
        <h1>후원 영상 설정 / <small> Support Video System</small></h1>
      </div>
      <div class="card">
        <div class="input-group">
          <h3 class="input-title">영상 길이 제한</h3>
          <div class="input-box">
            <input bind:value={videoSet.ttsTextCount} />
          </div>
        </div>
        <hr />
        <!--<div class="input-group">
            <h3 class="input-title">알림 효과</h3>
            <input
              bind:value={videoSet.allim_effect}
              on:change{videoSupportSystemUpdate}
            />
          </div>
          <hr />-->
        <div class="thumbnail-group">
          <h3 class="thumbnail-title">알림 레이아웃</h3>
          <div class="thumbnail-btn">
            <label class="thumbnail">
              <input
                type="radio"
                value="bottom"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box">
                <span class="icon">
                  <i class="fas fa-image" />
                </span>
                <h3>text</h3>
              </span>
            </label>
            <label class="thumbnail">
              <input
                type="radio"
                value="center"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box nLayout-center">
                <span class="icon">
                  <i class="fas fa-image" />
                </span>
                <h3>text</h3>
              </span>
            </label>
            <label class="thumbnail">
              <input
                type="radio"
                value="noimg"
                bind:group={videoSet.noticeLayout}
              />
              <span class="radio-box nLayout-noimg">
                <h3>text</h3>
              </span>
            </label>
          </div>
        </div>
        <hr />
        <!--
        <div class="select-group">
          <h3 class="select-title">알림 효과음</h3>
          <div class="selecter">
            <Select
                items={alarmItems}
                selectedValue={videoSet.allim_sound}
                on:select={allimSoundSelect}
              />
          </div>
        </div>-->
      </div>
      <!--
      <div class="components">
        <div class="title">
          <h1>시스템 텍스트 / <small> System Text</small></h1>
        </div>
        <div class="card">
          <div class="input-group">
            <h3 class="input-title">내용 템플릿</h3>
            <div class="input-box">
              <input bind:value={videoSet.titleTemplate} />
            </div>
          </div>
          <hr />
          <div class="select-group">
            <h3 class="select-title">글자 폰트</h3>
            <div class="selecter">
              <Select
                  items={fontItems}
                  selectedValue={fontSelected}
                  {groupBy}
                />
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</article>

<style lang="scss">
  @import './scss/DonationSetView.scss';
</style>
