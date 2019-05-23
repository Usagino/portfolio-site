<template lang="pug">
  .menu
    .menu__icon(v-on:click="play")
      lottie(
        :options="lottieOptions"
        v-on:animCreated="handleAnimation"
        )
    nav.menu__nav
      ul.menu__nav__list
        li
          no-ssr
            nuxt-link(to="/") TOP
        li
          no-ssr
            nuxt-link(to="/works") WORKS
        li
          no-ssr
            nuxt-link(to="/about") ABOUT
</template>

<script>
  import Lottie from "~/components/Lottie.vue";
  import * as animationData from "~/assets/json/menuIcon.json";
  import { TimelineLite,TweenMax,Expo } from 'gsap'

  let side_toggle = 1;
  export default {
    components:{
      Lottie
    },
    data(){
      return {
        lottieOptions: {
          animationData: animationData,
          loop: true,
          autoplay:false
        },
      }
    },
    methods: {
      handleAnimation: function(anim) {
        this.anim = anim;
      },
      play: function () {
        if (side_toggle == 0) {
          // 消える方
          this.anim.setDirection(-1)
          this.anim.play();
          TweenMax.to(".menu__nav",0.5,{
            delay:0.8,
            x:"100%"
          });
          TweenMax.to(".menu + *",0.5,{
            delay:0.8,
            opacity:1,
            left:"0%"
          });

          side_toggle = 1;
        }else{
          // 出てくる方
          this.anim.setDirection(1)
          this.anim.play();
          TweenMax.to(".menu__nav",0.5,{
            delay:0.6,
            x:"0%"
          });
          TweenMax.to(".menu + *",0.5,{
            delay:0.6,
            opacity:0.4,
            left:"-20%"
          });

          side_toggle = 0;
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .menu{
    &::after{
      content: "";
      position: fixed;
      z-index: 998;
      height: 100vh;
      width: 100vw;
      background: #1c1c1caa;
      display: none;

    }
    &__icon, &__nav{
      position: fixed;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &__icon{
      height: 4rem;
      width: 4rem;
      right: 1rem;
      z-index: 1001;
    }
    &__nav{
      height: 100vh;
      width: 28vw;
      background: #FF6161;
      z-index: 1000;
      right: 0;
      transform: translateX(100%);
      &__list{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        li{
          margin:1rem 0;
        }
        a{
          font-size: 3rem;
          color: #f9f9f9;
        }
      }
    }
  }
</style>
