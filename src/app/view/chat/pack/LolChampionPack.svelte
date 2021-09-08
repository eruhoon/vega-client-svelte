<script lang="ts">
  import { OptionService } from '../../../model/option/OptionService';
  import { PopupContentService } from '../../popup/PopupContentService';

  export let body: string;
  let isDataSaveMode: boolean;
  let skills: { icon: string; name: string }[];

  $: json = JSON.parse(body);
  $: name = json.name;
  $: description = json.description;
  $: icon = json.icon;
  $: background = json.skin[0].splash;
  $: skills = json.skill;
  $: link = json.link;

  OptionService.enableDataSave.subscribe((it) => (isDataSaveMode = it));

  function onClick() {
    PopupContentService.addContent({
      type: 'iframe',
      src: { title: `${name} 정보`, link },
    });
  }
</script>

{#if isDataSaveMode}
  <div>(대충 챔 {name} 정보)</div>
{:else}
  <div class="lol-champion-info" on:click={onClick}>
    <div class="bg">
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={background} />
      <div class="img-overlay" />
    </div>
    <div class="user-img">
      <img src={icon} alt="{name} 아이콘" />
    </div>
    <div class="champ-info">
      <h3 class="title">{name}</h3>
      <div class="tier">
        <p>{description}</p>
      </div>
      <div class="skills">
        {#each skills as skill}
          <img src={skill.icon} title={skill.name} alt={skill.name} />
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .lol-champion-info {
    width: calc(100% - 20px);
    height: 80px;
    padding: 10px;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

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
      width: 60px;
      height: 60px;
      border-radius: 2px;
      overflow: hidden;
      margin: 5px;
      float: left;
      border: 1px solid #2c3548;
      position: relative;

      img {
        width: 60px;
        height: 60px;
        float: left;
      }
    }
    .champ-info {
      width: calc(100% - 72px);
      float: left;
      position: relative;

      margin-top: 5px;

      * {
        color: #ffffff;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.75);
      }

      .title {
        font-size: 16px;
        font-weight: bolder;
        margin: 0%;
        padding-top: 10px;
      }
      .tier {
        width: 100%;
        height: auto;
        p {
          margin: 0%;
          padding: 0%;
          font-size: 12px;
        }
      }
      .skills {
        width: 100%;
        float: left;
        position: relative;

        img {
          width: 20px;
          height: 20px;
          margin-right: 2px;
          border: solid 1px #2c3548;
        }
      }
    }
  }
</style>
