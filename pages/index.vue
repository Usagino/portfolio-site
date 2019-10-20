<template lang="pug">
  section
    .first.section
      .first__wrap(:style="{ transform: 'rotateX('+ first_rotate_x +'deg) ' }")
        .first__wrap__logo
          myLogo

    .works.section
      .works__wrap
        nuxt-link.works__wrap--title(to="/works") Works
        - for (var x = 0; x < 10; x++)
          .works__wrap--circle
    .about.section
      .about__wrap
        .about__wrap__image
          cube
        nuxt-link.about__wrap__title(to="/about") About me
    vueFooter.section
</template>

<script>
// components
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
import Lottie from '@/components/lottie/Lottie'
import myLogo from '@/components/lottie/myLogo'
import cube from '@/components/lottie/cube'
// library
import inView from 'in-view'
import { init } from 'ityped'
import {TweenMax} from 'gsap'

export default {
  components: {
    Lottie,
    sideMenu,
    myLogo,
    vueFooter,
    cube,
  },
  data () {
    return {
      first_rotate_x: 0,
      works_rotate_x:0,
      about_rotate_x: 0

    }
  },
  mounted(){
    window.onscroll = event =>{
      let scroll_move = window.pageYOffset
      let view_hight = window.parent.screen.height;
      let doc_hight = document.documentElement.scrollHeight
      let scroll_percent = scroll_move / doc_hight * -100
      this.first_rotate_x = scroll_percent
    }
  }
}
</script>

<style lang="scss" scoped>
  .section{
    perspective: 200px;
    *{
      font-family: futura-pt, sans-serif;
    }
  }
  .page{
    @include full_screen
  }
  .first{
    @include full_screen;
    &__wrap{
      @include full_size;
      @include middle;
      position: relative;
      border: 2px solid #e4e4e4;
      border-top: none;
      perspective: 200px;

      &__logo{
        width: 40vw;

      }
    }
  }
  .works{
    @include full_screen;
    @include middle;
    &__wrap{
      @include full_size;
      @include middle;
      position: relative;
      &--title{
        line-height: 72vh;
        display: block;
        font-size: 10rem;
        font-weight: bold;
        color: $text_color1;
        &:hover{
          opacity: 0.7;
        }
      }
      &--circle{
        content: "";
        @include middle-absolute;
        z-index: -1;
        transition: all .2s ease .1s;
        @keyframes rotate-anime{
          to{
            transform: rotate(0deg);
          }
          from{
            transform: rotate(360deg);
          }
        }
        @for $i from 1 through 10 {
          &:nth-of-type(#{$i}){
            border-radius: #{random(100)}% #{random(100)}% #{random(100)}% #{random(100)}%/ 30% #{random(100)}% #{random(100)}% 20% ;
            border: 1px solid hsl(random(254), 86%, 74%);
            animation: rotate-anime #{$i/4 + 10}s linear 0s forwards;
            animation-iteration-count: infinite;
            height: #{$i / 5 + 25}vw;
            width: #{$i / 5 + 25}vw;
          }
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
        &:hover{
          opacity: 0.7;
        }
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
         &--circle{
             height: 60vw;
             width: 60vw;
         }
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
             transform: scale(2);
           }
         }
         &__title{
           font-size: 5rem;

         }
       }
     }
   }
</style>
