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
      .works__wrap__area-1.works__wrap__area
        img(src="image/top/works_1.png")
      .works__wrap__area-2.works__wrap__area
        img(src="image/top/works_2.png" )
      .works__wrap__area-3.works__wrap__area
        img(src="image/top/works_3.png" )
      .works__wrap__area-4.works__wrap__area
        img(src="image/top/works_4.png" )
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
      display: grid;
      grid-gap:4rem;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "area-1 area-1 area-2 area-2 area-2 area-2" "area-1 area-1 area-2 area-2 area-2 area-2" "area-1 area-1 area-2 area-2 area-2 area-2" "area-3 area-3 area-3 area-3 area-4 area-4" "area-3 area-3 area-3 area-3 area-4 area-4";

      position: relative;
      & > *{
        transition: all .3s ease 0s;
      }
      &:hover{
        & > .works__wrap__area-1{
          transform: translate(-10vw,-11vh);
        }
        & > .works__wrap__area-2{
          transform: translate(10vw,-11vh);
        }
        & > .works__wrap__area-3{
          transform: translate(-10vw,11vh);
        }
        & > .works__wrap__area-4{
          transform: translate(10vw,11vh);
        }
        & > .works__wrap--title{
          z-index: 1;
          opacity: 1;
        }

      }
      &--title{
        position: absolute;
        top: 0;bottom: 0;
        left: 0;right: 0;
        margin: auto;
        line-height: 72vh;
        text-align: center;
        display: block;
        font-size: 10rem;
        z-index: -1;
        color: $text_color1;
        opacity: 0;
        transition: all .3s ease .4s;
        font-weight: bold;
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
    @include full_screen;
    @include middle;
    &__wrap{
      @include full_screen;
      position: relative;

      @include middle;
      &__image{
        @include full_size;
        height: 40vh;
        width: 40vh;
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
