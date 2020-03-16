<template lang="pug">
  .mouse-stoker(:style="{display:displayStyle}")
    .mouse-stoker__circle(:class="{'mouse-stoker__link':linkHover}")
      .mouse-stoker__text
        p {{mouseText}}
</template>

<script>
import {TweenMax, Expo, Elastic} from 'gsap'

export default {
  data(){
    return{
      linkHover:false,
      mouseText:'GO NEXT PAGE',
      displayStyle:'block'
    }
  },
  methods:{
    linkMouseover(text){
      this.linkHover = true
      this.mouseText = text
    },
    linkMouseLeave(){
      this.linkHover = false
    }
  },
  mounted(){
    if(this.$ua._parsed.category === 'smartphone'){
      this.displayStyle = 'none'
    }
    const stalker = document.getElementsByClassName('mouse-stoker');
    document.addEventListener('mousemove', function (e) {
      TweenMax.set('.mouse-stoker',{
        css: {
          left: e.clientX,
          top: e.clientY
        }
      })
    });
  }
}
</script>

<style lang="scss" scoped>
$size:36px;
.mouse-stoker{
  pointer-events: none;
  position: fixed;
  width: fit-content;
  height: fit-content;
  transform: translate(0,0);
  transition: transform 0.2s;  //ちょっと遅れてついてくるように
  transition-timing-function: ease-out;
  z-index: 99999999;
  &__circle{
    border: 1px solid rgba(103, 103, 103,1);
    border-radius: 50%;
    width: $size;
    height: $size;
    transition: all 300ms ease;
  }
  &__text{
    display: none;
    p{
      @include strok_text;
      font-size:60px;
      white-space: nowrap;
    }
  }
  &__link{
    border: 1px solid rgba(103, 103, 103,0);

    .mouse-stoker__text{
      display: block
    }
  }
}

</style>
