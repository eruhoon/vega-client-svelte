<script lang="ts">
  import { PopupContentService } from '../../../popup/PopupContentService';

  import type { GeneralPurposeProperty } from '../GeneralPurposeProperty';

  export let body: string = '[]';
  const errorMessage = 'error';
  let isDataSaveMode = false;
  let isError = false;
  let json: GeneralPurposeProperty[];

  $: json = JSON.parse(body);
  $: props = json || [];

  function onClick(prop: GeneralPurposeProperty) {
    switch (prop.showType) {
      case 'in-app-browser':
        PopupContentService.addContent({
          src: {
            link: prop.link,
            title: prop.title,
          },
          type: 'iframe',
        });
    }
  }
</script>

{#if isError}
  <div>{errorMessage}</div>
{:else if isDataSaveMode}
  <div>(대충 많은 양의 내용)</div>
{:else}
  <div class="card-container">
    {#each props as prop}
      <div class="card-info {prop.orientation}" on:click={(e) => onClick(prop)}>
        <div class="img">
          <img src={prop.icon} alt="{prop.title} 이미지" />
        </div>
        <div class="info">
          <p class="title">{prop.title}</p>
          <p>{prop.subtitle}</p>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .card-container {
    width: 100%;
    max-height: 204px;
    padding-bottom: 5px;
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-button:start:decrement,
    &::-webkit-scrollbar-button:end:increment {
      display: block;
      height: 10px;
    }
    &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      height: 10px;
      width: 10px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }
    .card-info {
      border-radius: 3px;
      border: 1px solid #1f2226;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      margin-right: 10px;
      border-radius: 3px;
      overflow: hidden;

      &:last-child {
        margin-right: 0px;
      }
      .img {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border-right: 1px solid #1f2226;
        background-color: #2a2f38;
        margin: 0px auto;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .info {
        height: auto;
        * {
          margin: 0%;
          padding: 0%;
          line-height: 12px;
        }
        p {
          font-size: 12px;
          padding-bottom: 4px;
          &.title {
            font-family: 'Jeju Gothic', sans-serif !important;
            font-size: 14px;
            line-height: 16px;
          }
        }
      }

      &.horizontal {
        width: calc(70% - 10px);
        height: 100px;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: calc(70% - 10px);
        .img {
          width: 100px;
          height: 100px;
          float: left;
          border-right: 1px solid #1f2226;
        }
        .info {
          width: calc(100% - 121px);
          padding-left: 5px;
          padding-right: 15px;
          float: left;
          margin-top: 20px;
          p {
            padding: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;
            padding-bottom: 4px;
            max-height: 32px;
            max-lines: 2;
            -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
            -webkit-box-orient: vertical;
          }
        }
      }
      &.vertical {
        width: 100px !important;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100px;
        .img {
          width: 100px;
          height: 100px;
          border-bottom: 1px solid #1f2226;
        }
        .info {
          width: calc(100% - 6px);
          padding: 5px 3px;
          margin-top: 5px;
          overflow: hidden;
          p {
            margin-bottom: 4px;
            text-align: center;
            width: 100%;
            height: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-height: 16px;
            max-height: 32px;
            max-lines: 2;
            -webkit-line-clamp: 2; /* 표시하고자 하는 라인 수 */
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
</style>
