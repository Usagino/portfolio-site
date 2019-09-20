<template lang="pug">
section
  no-ssr
    fp_nav
    full-page( ref="fullpage" :options="options" id="fullpage")
      .first.section
        .first__wrap
          .first__wrap__logo
            myLogo
          mouseScrollAnime
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
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
import Lottie from '@/components/lottie/Lottie'
import myLogo from '@/components/lottie/myLogo'
import cube from '@/components/lottie/cube'
import fp_nav from '@/components/fp-nav'
import mouseScrollAnime from '@/components/lottie/mouseScrollAnime'
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
    cube,
    fp_nav,
    mouseScrollAnime
  },
  data () {
    return {
      options: {
        licenseKey: 'C369A22F-73704243-8980D98A-0B1A5553',
        css3: true,
        afterLoad:this.afterLoad,
        afterRender: this.afterRender
      }
    }
  },
  methods:{
    afterLoad(anchorLink, index){
      console.log(index.index);
      document.querySelector('.fp-nav__count').innerHTML = index.index + 1;
    },
    afterRender(){
      const section_length = document.querySelectorAll('.section').length
      document.querySelector('.fp-nav__index').innerHTML = section_length

      const about_el = document.querySelector('.about__wrap__title')
      about_el.addEventListener('mousemove',()=>{
        TweenMax.to('.about__wrap__image',0.2,{
          'scale':0.8
        })
      });
      about_el.addEventListener('mouseout',()=>{
        TweenMax.to('.about__wrap__image',0.2,{
          'scale':1
        })
      });
    }
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
      position: relative;
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
