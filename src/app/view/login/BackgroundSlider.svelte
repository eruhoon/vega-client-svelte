<script lang="ts">
  import { fade } from 'svelte/transition';

  const images = [
    './assets/image/login/bg/1.png',
    './assets/image/login/bg/2.png',
    './assets/image/login/bg/3.png',
    './assets/image/login/bg/4.png',
    './assets/image/login/bg/5.png',
    './assets/image/login/bg/6.png',
    './assets/image/login/bg/7.png',
    './assets/image/login/bg/8.png',
    './assets/image/login/bg/9.png',
    './assets/image/login/bg/10.png',
    './assets/image/login/bg/11.png',
    './assets/image/login/bg/12.png',
    './assets/image/login/bg/13.png',
    './assets/image/login/bg/14.png',
    './assets/image/login/bg/15.png',
    './assets/image/login/bg/16.png',
    './assets/image/login/bg/17.png',
    './assets/image/login/bg/18.png',
    './assets/image/login/bg/19.png',
    './assets/image/login/bg/20.png',
  ];

  let index = 0;
  let interval: number = -1;

  const nextImg = () => {
    index = getRandomNumber(images.length, index);
    console.log(index);
  };

  const getRandomNumber = (max: number, except: number): number => {
    const next = Math.floor(Math.random() * max);
    return next == except ? (except + 1) % max : next;
  };

  const startPlay = () => {
    interval = setInterval(nextImg, 4000);
  };

  const stopPlay = () => {
    clearInterval(interval);
    interval = -1;
  };

  startPlay();
</script>

<div
  class="main"
  on:mouseover={(_) => stopPlay()}
  on:mouseleave={(_) => startPlay()}
  on:focus={(_) => {}}
>
  <div class="slider">
    {#each [images[index]] as src (index)}
      <img transition:fade {src} alt="" />
    {/each}
  </div>
</div>

<style lang="scss">
  .main {
    width: 100%;
    height: 100%;
    .slider {
      width: 100%;
      height: 100%;
      opacity: 0.35;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
