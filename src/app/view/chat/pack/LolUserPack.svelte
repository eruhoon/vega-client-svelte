<script lang="ts">
  import PopupContentLayer from '../../popup/PopupContentLayer.svelte';
  import { PopupContentService } from '../../popup/PopupContentService';

  export let body: string;
  $: json = JSON.parse(body);
  $: {
    console.log(json);
  }
  let isDataSaveMode: boolean;
  let isBackgroundError: boolean = false;
  $: icon = json.icon;
  $: name = json.name;
  $: level = json.level;
  $: tier = json.tier;
  $: tierText = getTierText(tier);
  let mostChamps: { icon: string; name: string; background: string }[];
  $: mostChamps = json.most.top;
  $: link = `https://www.op.gg/summoner/userName=${name}`;

  function onClick() {
    PopupContentService.addContent({
      type: 'iframe',
      src: {
        link,
        title: `LOL 유저 정보: ${name}`,
      },
    });
  }

  function getTierText(tierObj: {
    tier: string;
    division: string;
    point: number;
  }): string {
    const tier = tierObj.tier;
    const division =
      tier === 'CHALLENGER' ||
      tier === 'GRANDMASTER' ||
      tier === 'MASTER' ||
      tier === 'UNRANK'
        ? ''
        : tierObj.division;

    const point = tierObj.point > 0 ? `${tierObj.point}P` : '';

    return [tier, division, point].join(' ');
  }
</script>

{#if isDataSaveMode}
  <div>
    (대충 '{name}' 계정이 '{tier.tier}
    {tier.division}
    {tier.point}점'이라는 내용)
  </div>
{:else}
  <div class="lol-user-info" on:click={onClick}>
    <div class="bg">
      {#if mostChamps.length > 0 && !isBackgroundError}
        <img
          src={mostChamps[0].background}
          alt="most champ"
          on:error={(_) => (isBackgroundError = true)}
        />
      {/if}
      <div class="img-overlay" />
    </div>
    <div class="user-img">
      <img src={icon} alt="{name} 프로필 아이콘" />
      <div class="level">
        <p>Lv. {level}</p>
      </div>
    </div>
    <div class="user-info">
      <h3 class="title">{name}</h3>
      <div class="tier">
        <p>{tierText}</p>
      </div>
    </div>
    <div class="mostpick">
      {#each mostChamps as champ}
        <img src={champ.icon} title={champ.name} alt={champ.name} />
      {/each}
    </div>
  </div>
{/if}

<style lang="scss">
  .lol-user-info {
    width: calc(100% - 20px);
    height: 80px;
    padding: 10px;
    overflow: hidden;
    position: relative;
    border-radius: 3px;

    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      img {
        width: 100%;
        height: auto;
      }
      .img-overlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
      }
    }
    .user-img {
      width: 50px;
      height: 70px;
      border-radius: 2px;
      overflow: hidden;
      margin: 5px;
      float: left;
      border: 1px solid var(--primary-hoverground-color);
      position: relative;

      img {
        width: 50px;
        height: 50px;
        float: left;
      }
      .level {
        width: 100%;
        float: left;
        height: 20px;
        color: #eabd56;
        text-align: center;
        font-size: 10px;
        background-color: var(--primary-hoverground-color);
        p {
          margin: 0%;
        }
      }
    }
    .user-info {
      width: calc(100% - 62px);
      float: left;
      position: relative;

      margin-top: 5px;

      * {
        color: var(--primary-foreground-color);
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
      }

      .title {
        color: var(--primary-foreground-color);
        font-size: 16px;
        font-weight: bolder;
        margin: 0%;
        padding-top: 10px;
      }
      .tier {
        width: 100%;
        height: auto;
        p {
          color: var(--primary-foreground-color);
          margin: 0%;
          padding: 0%;
          font-size: 12px;
        }
      }
    }
    .mostpick {
      width: calc(100% - 62px);
      float: left;
      position: relative;

      img {
        width: 20px;
        height: 20px;
        margin-right: 2px;
        border: solid 1px var(--primary-hoverground-color);
      }
    }
  }
</style>
