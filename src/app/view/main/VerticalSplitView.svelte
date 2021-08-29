<script lang="ts">
  export let minSideSize: number;

  let rawDividerPos = 300;
  let isMoveMode = false;
  let clientWidth: number;

  $: minX = minSideSize;
  $: maxX = clientWidth - minSideSize;
  $: dividerPos = trimPosition(rawDividerPos, minX, maxX);
  $: isSideLeft = dividerPos < clientWidth / 2;
  $: sideWidth = isSideLeft ? dividerPos : clientWidth - dividerPos;
  $: sideLeft = isSideLeft ? '0' : 'auto';
  $: sideRight = isSideLeft ? 'auto' : '0';

  const onDividerMove = (e: MouseEvent) => {
    if (isMoveMode) {
      rawDividerPos = e.clientX;
    }
  };

  const trimPosition = (pos: number, min: number, max: number): number => {
    const trimmedStart = (a: number, b: number) => (a > b ? a : b);
    const trimmedEnd = (a: number, b: number) => (a < b ? a : b);
    return trimmedStart(trimmedEnd(pos, max), min);
  };
</script>

<div class="container" bind:clientWidth>
  <div
    class="divided"
    style="left: {sideRight}; right: {sideLeft}; width: calc(100% - {sideWidth}px);"
  >
    <slot name="main" />
  </div>
  <div
    class="divided"
    style="left: {sideLeft}; right: {sideRight}; width: {sideWidth}px;"
  >
    <slot name="side" />
  </div>
  <div
    class="divider"
    class:active={isMoveMode}
    style="left: {dividerPos}px"
    on:mousedown={(_) => (isMoveMode = true)}
    on:mousemove={onDividerMove}
    on:mouseup={(_) => (isMoveMode = false)}
  />
</div>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .divided {
    position: absolute;
    height: 100%;
  }

  .divider {
    position: absolute;
    top: 0;
    width: 10px;
    height: 100%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    cursor: col-resize;

    &.active {
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      transform: none;
      -webkit-transform: none;
    }
  }
</style>
