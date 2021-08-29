<script lang="ts">
  export let title: string;
  export let enable: boolean = false;
  export let onClick = () => {};
</script>

<div on:click={onClick}>
  <div class="set-title">
    <p>{title}</p>
  </div>
  <div class="set-switch">
    <label for="enable" class="switch" class:active={enable}>
      <span class="slider" />
    </label>
  </div>
</div>

<style lang="scss">
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

    .active .slider:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
  }
</style>
