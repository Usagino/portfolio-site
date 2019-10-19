<template lang="pug">
  section
    .first.section
      .first__wrap(:style="{ transform: 'rotateX('+ first_rotate_x +'deg) ' }")
        .first__wrap__logo
          myLogo

    .works.section
      .works__wrap
        nuxt-link.works__wrap--title(to="/works") Works
        span.works__wrap--circle
          span.works__wrap--circle--inner
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
      border: 1px solid #e4e4e4;
      background: #fcfcfc;
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
        &:hover + .works__wrap--circle{
          border-radius: 100% 90% 100% 100%/90% 100% 100% 100%;
          height: 42vw;
          width: 42vw;
          background: #90acf4;
        }
        &:hover + .works__wrap--circle > .works__wrap--circle--inner{
          border-radius: 40% 30% 20% 80%/20% 30% 50% ;
          height: 7vw;
          width: 7vw;
        }
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
        transition: all .2s ease .1s;

        @keyframes rotate-anime{
          to{
            transform: rotate(0deg);
          }
          from{
            transform: rotate(360deg);
          }
        }
        &--inner{
          transition: all .2s ease .1s;
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
        &:hover + div{
          height: 70%;
          width: 70%;
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
