<template lang="pug">
  .menu
    .menu__icon(v-on:click="play")
      lottie(
        :options="lottieOptions"
        v-on:animCreated="handleAnimation"
        )
    span.menu__back

    nav.menu__nav
      ul.menu__nav__list
        li
          nuxt-link(to="/") TOP
        li
          nuxt-link(to="/works") WORKS
        li
          nuxt-link(to="/about") ABOUT
        li.menu__nav__list__media
          a(href="https://twitter.com/_Frontart" target="_blank") Twitter
        li.menu__nav__list__media
          a(href="https://www.instagram.com/frontartgraph/" target="_blank") Instagram
        li.menu__nav__list__media
          a(href="https://dribbble.com/usaginoniku" target="_blank") Dribbble
      menuAnime
</template>

<script>
  import menuAnime from '~/components/lottie/menuAnime';
  import Lottie from "~/components/lottie/Lottie.vue";
  import * as animationData from "~/assets/json/menuIcon.json";
  import { TimelineLite,TweenMax,Expo } from 'gsap'

  let side_toggle = 1;
  export default {
    components:{
      Lottie,
      menuAnime
    },
    data(){
      return {
        lottieOptions: {
          animationData: animationData,
          loop: false,
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
            x:"100%",
            ease: Expo.easeIn
          });
          TweenMax.to(".menu + *",0.5,{
            delay:0.8,
            opacity:1,
            left:"0%",
            ease: Expo.easeIn
          });
          TweenMax.to(".menu__back",0.5,{
            delay:1,
            x:"-100%",
            ease: Expo.easeIn
          });
          TweenMax.to('.cursor',1,{background:'',delay:0.6,})
          TweenMax.to('.follower',1,{borderColor:'',delay:0.6,})
          side_toggle = 1;
        }else{
          // 出てくる方
          this.anim.setDirection(1)
          this.anim.play();
          TweenMax.to(".menu__nav",0.5,{
            delay:0.6,
            x:"0%",
          });
          TweenMax.to(".menu__back",0.5,{
            delay:0.2,
            x:"0%",
          });
          TweenMax.to(".menu + *",0.5,{
            delay:0.6,
            opacity:0.4,
            left:"-20%"
          });
          TweenMax.to('.cursor',1,{background:'white',delay:0.6,})
          TweenMax.to('.follower',1,{borderColor:'white',delay:0.6,})
          side_toggle = 0;
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .menu{
    &__icon, &__nav,&__back{
      position: fixed;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    &__icon{
      height: 4rem;
      width: 4rem;
      right: 4rem;
      z-index: 1001;
      cursor: pointer;
    }
    &__back{
      height: 100vh;
      width: 100vw;
      background: #6188ff;
      z-index: 999;
      transform: translateX(-100%);
    }
    &__nav{
      height: 100vh;
      width: 100vw;
      background: #FF6161;
      z-index: 1000;
      right: 0;
      transform: translateX(100%);

      @include middle;
      justify-content: flex-start;
      display: grid;
      grid-template-columns: 1fr 5fr;
      padding: 0 20rem;
      grid-gap: 2rem;
      &__list{
        height: 70%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        li{
          margin:1rem 0;
        }
        a{
          font-size: 6rem;
          color: #f9f9f9;
        }
        &__media{
          a{
            font-size: 4rem;
          }

        }
      }
    }
  }
   @include mq(sm){
     .menu{
       &__icon{
         height: 4rem;
         width: 4rem;
         right: 2rem;
         z-index: 1001;
       }
       &__nav{
         height: 100vh;
         width: 100vw;
         @include middle;
         &__list{
           height: 80%;
           padding: 0;
         }
       }
     }
   }
</style>
