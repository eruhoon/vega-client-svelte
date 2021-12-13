<script lang="ts">
  type osuMapSet = {
    donationUse: boolean;
    CoinUse: boolean;
    osumapTotalList: number;
  };
  let osuMapSet: osuMapSet = {
    donationUse: false,
    CoinUse: false,
    osumapTotalList: 100,
  };
</script>

<article class="layout">
  <div class="container">
    <div class="components">
      <div class="title">
        <h1>후원 세부 설정 / <small> Support Setting</small></h1>
      </div>
      <div class="card">
        <div class="btn-group">
          <h3>도네이션 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={osuMapSet.donationUse} />
            <span class="slider round" />
          </label>
        </div>
        <!--
        <hr />
        <div class="btn-group">
          <h3>마캐코인 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={osuMapSet.CoinUse} />
            <span class="slider round" />
          </label>
        </div>-->
      </div>
    </div>
    <div class="components">
      <div class="title">
        <h1>Osu 후원 설정 / <small> Osu Support System</small></h1>
      </div>
      <div class="card">
        <div class="input-group">
          <h3 class="input-title">총 맵 제한</h3>
          <div class="input-box">
            <input bind:value={osuMapSet.osumapTotalList} />
          </div>
        </div>
        <hr />
        <!--<div class="input-group">
          <h3 class="input-title">알림 효과</h3>
          <input bind:value={osuMapSet.allim_effect} />
        </div>
        <hr />-->
        <!--
        <div class="select-group">
          <h3 class="select-title">알림 효과음</h3>
          <div class="selecter">
            <Select
              items={alarmItems}
              selectedValue={osuMapSet.allim_sound}
              on:select={allimSoundSelect}
            />
          </div>
        </div>-->
      </div>
    </div>
  </div>
</article>

<style lang="scss">
  @import './scss/DonationSetView.scss';
</style>
