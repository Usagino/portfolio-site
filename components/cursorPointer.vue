<template lang="pug">
  .cursors
    .cursor
    .follower
</template>

<script>
import { TweenMax } from 'gsap'
export default {
  mounted(){
    let cursor = document.querySelector('.cursor')
    let cursorRect = cursor.getBoundingClientRect();
    console.log(cursorRect);
    window.onmousemove = event =>{
      event = event || window.event; // IE対応
      let x = event.clientX;
      let y = event.clientY;
      TweenMax.set('.cursor',{x:x-4,y:y-4})
      TweenMax.to('.follower',1,{x:x -20,y:y-20})
    }
  }
}
</script>

<style lang="scss">
  html{
    // cursor: none !important;
  }
  .cursor,
  .follower {
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
  }
  .cursor {
    width: 8px;
    height: 8px;
    background-color: #000;
    z-index: 9000;
  }
  .follower {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 3px solid #0b0b0b;
    z-index: 8000;
    transition: transform ease .1s;
    text-align: center;
    span {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      transform: scale(0);
    }
    &.is-active {
      transform: scale(3);
    }
  }
</style>
