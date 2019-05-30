<template lang="pug">
  .cursors
    .cursor
    .follower.follower1
    .follower.follower2
    .follower.follower3
</template>

<script>
import { TweenMax } from 'gsap'
export default {
  mounted(){
    let cursor = document.querySelector('.cursor')
    let cursorRect = cursor.getBoundingClientRect();
    window.onmousemove = event =>{
      let scroll = document.documentElement.scrollTop;
      event = event || window.event; // IE対応
      let x = event.clientX;
      let y = event.clientY  + scroll;
      TweenMax.set('.cursors',{opacity:1})
      TweenMax.set('.cursor',{x:x,y:y})
      TweenMax.to('.follower1',0.01,{x:x -15,y:y-15});
      TweenMax.to('.follower2', 0.1,{x:x -15,y:y-15});
      TweenMax.to('.follower3', 0.2,{x:x -15,y:y-15});
    }


    const target = document.querySelectorAll('a');
    for (let i of target) {
      //ON
      i.addEventListener('mouseenter', () => {
        TweenMax.to('.cursor',1,{
          scale:6,
          opacity:0.2
        });
        TweenMax.to('.follower1,.follower2,.follower3',0.4,{
          scale:2,
          opacity:0.2,
        });
      }, false);
      //OUT
      i.addEventListener('mouseleave', () => {
        TweenMax.to('.cursor, .follower1,.follower2,.follower3',0.4,{
          scale:1,
          background:'',
          opacity:1
        });
      }, false);
    }
  }
}
</script>

<style lang="scss">
  html{
    // cursor: none !important;
  }
  .follower1{ opacity: 1 }
  .follower2{ opacity: 0.8 }
  .follower3{ opacity: 0.4 }
  .cursors{
    opacity: 0;
  }
  .cursor, .follower {
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    box-sizing: border-box;
  }
  .cursor {
    width: 10px;
    height: 10px;
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
  @include mq(sm){
    .cursors{
      display: none;
    }
  }
</style>
