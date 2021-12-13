<script lang="ts">
  type voiceSet = {
    donationUse: boolean;
    CoinUse: boolean;
    customImgUse: boolean;
    ttsTextCount: number;
    noticeLayout: string;
    titleTtsuse: boolean;
    titleTemplate: string;
    fontSize: number;
  };
  let voiceSet: voiceSet = {
    donationUse: false,
    CoinUse: false,
    customImgUse: false,
    ttsTextCount: 100,
    noticeLayout: 'center',
    titleTtsuse: false,
    titleTemplate: '{name}님이 후원을 해주셧습니다.',
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
            <input type="checkbox" bind:checked={voiceSet.donationUse} />
            <span class="slider round" />
          </label>
        </div>
        <!--
        <hr />
        <div class="btn-group">
          <h3>마캐코인 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={voiceSet.CoinUse} />
            <span class="slider round" />
          </label>
        </div>
        <hr />
        <div class="btn-group">
          <h3>이미지 후원 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={voiceSet.customImgUse} />
            <span class="slider round" />
          </label>
        </div>-->
      </div>
    </div>
    <div class="components">
      <div class="title">
        <h1>후원 시스템 설정 / <small> Support System</small></h1>
      </div>
      <div class="card">
        <div class="input-group">
          <h3 class="input-title">글자 제한</h3>
          <div class="input-box">
            <input bind:value={voiceSet.ttsTextCount} />
          </div>
        </div>
        <hr />
        <!--<div class="input-group">
          <h3 class="input-title">알림 효과</h3>
          <div class="input-box">
            <input
              bind:value={voiceSet.allim_effect}
              on:change={() => console.log(voiceSet.allim_effect)}
            />
            {#if error.allim_effect}<p>{error.allim_effect}</p>{/if}
          </div>
        </div>
        <hr />-->
        <div class="thumbnail-group">
          <h3 class="thumbnail-title">알림 레이아웃</h3>
          <div class="thumbnail-btn">
            <label class="thumbnail">
              <input
                type="radio"
                name="layoutSelect"
                bind:group={voiceSet.noticeLayout}
                value="bottom"
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
                name="layoutSelect"
                bind:group={voiceSet.noticeLayout}
                value="center"
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
                name="layoutSelect"
                bind:group={voiceSet.noticeLayout}
                value="noimg"
              />
              <span class="radio-box nLayout-noimg">
                <h3>text</h3>
              </span>
            </label>
          </div>
        </div>
        <hr />
        <div class="imgUpload-group">
          <h3 class="imgUpload-title">알림 이미지</h3>
          <div class="imgUpload-box">
            <div class="imgUpload-btn">
              <!-- 이미지 업로드 구현 필수 -->
              <!--<Dropzone on:drop={handleFilesSelect}>
                <div class="upload-text">
                  <span class="icon">
                    <Fa icon={faFileImage} size="3x" />
                  </span>
                  <h3>드래그 or 클릭</h3>
                </div>
              </Dropzone>-->
            </div>
            <!--
            <div class="imgUpload-list">
              {#each $imgFileList as item}
                <div class="imgItme">
                  <img class="tmpimg" src={item.img_url} alt="d" />
                  <div class="img-btn-group">
                    <a class="close-btn">
                      <Fa icon={faTimes} size="" />
                    </a>
                  </div>
                </div>
              {/each}
            </div>
            -->
          </div>
        </div>
        <!--
        <hr />
        <div class="select-group">
          <h3 class="select-title">알림 효과음</h3>
          <div class="selecter">
            <Select
              items={alarmItems}
              selectedValue={voiceSet.allim_sound}
              on:select={allimSoundSelect}
            />
          </div>
        </div>-->
      </div>
    </div>
    <!--
    <div class="components">
      <div class="title">
        <h1>시스템 텍스트 / <small> System Text</small></h1>
      </div>
      <div class="card">
        <div class="btn-group">
          <h3>타이틀 TTS 사용하기</h3>
          <label class="switch">
            <input type="checkbox" bind:checked={voiceSet.titleTtsuse} />
            <span class="slider round" />
          </label>
        </div>
        <hr />
        <div class="input-group">
          <h3 class="input-title">타이틀 템플릿</h3>
          <div class="input-box">
            <input bind:value={voiceSet.titleTemplate} />
          </div>
        </div>
        <hr />
        <div class="select-group">
          <h3 class="select-title">글자 폰트</h3>
          <div class="selecter">
            <Select items={fontItems} selectedValue={fontSelected} {groupBy} />
          </div>
        </div>
        <hr />
        <div class="input-group">
          <h3 class="input-title">시스템 텍스트 크기(px)</h3>
          <div class="input-box">
            <input bind:value={voiceSet.fontSize} />
          </div>
        </div>
        <hr />
        <div class="color-group">
          <h3 class="color-title">시스템 텍스트 색상</h3>
          <label class="color-selecter">
            <input bind:value={sysTextColor.rgba} />
            <a
              on:click={() => colorSelectAcitve('sys')}
              style="background-color:{sysTextColor.rgba}"
            >
              <i class="fas fa-palette"></i>
            </a>
            {#if sysTextColor.active}
              <div class="color-pick">
                <HsvPicker
                  on:colorChange={sysTextColorCallback}
                  startColor={'#202225'}
                />
              </div>
            {/if}
          </label>
        </div>
        <hr />
        <div class="color-group">
          <h3 class="color-title">닉네임, 금액 색상</h3>
          <label class="color-selecter">
            <input bind:value={impactColor.rgba} />
            <a
              on:click={() => colorSelectAcitve("impact")}
              style="background-color:{impactColor.rgba}"
            >
              <i class="fas fa-palette"></i>
            </a>
            {#if impactColor.active}
              <div class="color-pick">
                <HsvPicker
                  on:colorChange={impactColorCallback}
                  startColor={"#202225"}
                />
              </div>
            {/if}
          </label>
        </div>
      </div>
    </div>-->
  </div>
</article>

<style lang="scss">
  @import './scss/DonationSetView.scss';
</style>
