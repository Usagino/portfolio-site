<template lang="pug">
section
  sideMenu
  .first
    .first__wrap
      .first__wrap__logo
        myLogo
  .works
    .works__wrap
      nuxt-link.works__wrap--title(to="/works") Works
      span.works__wrap--circle
        span.works__wrap--circle--inner
  .about
    .about__wrap
      .about__wrap__image
        cube
      nuxt-link.about__wrap__title(to="/about") About me
  vueFooter
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
import Lottie from '@/components/lottie/Lottie'
import myLogo from '@/components/lottie/myLogo'
import cube from '@/components/lottie/cube'
// library
import * as animationData from "~/assets/json/my_logo.json";
import inView from 'in-view'
import { init } from 'ityped'
import {TweenMax} from 'gsap'

export default {
  components: {
    cursorPointer,
    Lottie,
    sideMenu,
    myLogo,
    vueFooter,
    cube
  },
}
</script>

<style lang="scss" scoped>
  .page{
    @include full_screen
  }
  .first{
    @include full_screen;
    &__wrap{
      @include full_size;
      @include middle;
      &__logo{
        width: 40vw;
      }
    }
  }
  .works{
    @include full_screen;
    @include middle;
    &__wrap{
      @include custom_size;
      @include middle;
      position: relative;
      &--title{
        line-height: 72vh;
        display: block;
        font-size: 10rem;
        font-weight: bold;
        color: $text_color1;
      }
      &--circle{
        content: "";
        height: 40vw;
        width: 40vw;
        background: #84bff6;
        @include middle-absolute;
        z-index: -1;
        animation: rotate-anime 10s linear 0s forwards;
        animation-iteration-count: infinite;
        border-radius: 40% 40% 50% 40%/30% 50% 50% ;

        @keyframes rotate-anime{
          to{
            transform: rotate(0deg);
          }
          from{
            transform: rotate(360deg);
          }
        }
        &--inner{
          height: 10vw;
          width: 10vw;
          background: #ffffff;
          @include middle-absolute;
          z-index: -1;
          border-radius: 40% 80% 50% 80%/30% 50% 50% ;
          animation: rotate-anime 10s linear 0s forwards;
          animation-iteration-count: infinite;
        }
      }
    }
  }
  .about{
    @include full_screen;
    @include middle;
    &__wrap{
      @include full_screen;
      position: relative;

      @include middle;
      &__image{
        @include full_size;
        height: 30vh;
        width: 30vh;
        object-fit: cover;
        position: absolute;
        top: 0;left: 0;
        bottom: 0; right: 0;
        margin: auto;
        z-index: -1;
        opacity: 0.8;
        & > *{
          transform: scale(4);
        }
      }
      &__title{
        white-space: nowrap;
        font-size: 10rem;
        font-weight: bold;
      }
    }
  }
   @include mq(sm) {
     .first{
       @include full_screen;
       &__wrap{
         @include full_size;
         @include middle;
         &__logo{
           width: 80vw;
         }
       }
     }
     .works{
       &__wrap{
         &--title{
           font-size: 5rem;

         }
         &__area{
           @include full_size;
           img{
             @include full_size;
             object-fit: cover;
           }
         }
         &__area-1{
           grid-area: area-1;
           transition: transform .4s ease 0s;
         }
         &__area-2{
           grid-area: area-2;
           transition: transform .4s ease .4s;
         }
         &__area-3{
           grid-area: area-3;
           transition: transform .4s ease .1s;
         }
         &__area-4{
           grid-area: area-4;
           transition: transform .4s ease .2s;
         }
       }
     }
     .about{
       &__wrap{
         &__image{
           position: absolute;
           top: 0;left: 0;
           bottom: 0; right: 0;
           margin: auto;
           z-index: -1;
           opacity: 0.5;
           & > *{
             transform: scale(4);
           }
         }
         &__title{
           font-size: 5rem;

         }
       }
     }
   }
</style>
