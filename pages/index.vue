<template lang="pug">
  section
    .first.section
      .first__wrap
        .first__wrap__logo
          myLogo
    .works.section
      .works__wrap
        .please_click
          p 👉
        nuxt-link.works__wrap--title(to="/works") Works
        img(src="/image/works.svg")
    .about.section
      .about__wrap
        .about__wrap__image
          cube
        .please_click
          p 👉
        nuxt-link.about__wrap__title(to="/about") About me
    AppFooter.section
</template>

<script>
// library
import inView from 'in-view'
import { init } from 'ityped'
import {TweenMax} from 'gsap'

export default {
  data () {
    return {
      first_rotate_x: 0,
      works_rotate_x:0,
      about_rotate_x: 0
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
        display: block;
        font-size: 10rem;
        font-weight: bold;
        color: $text_color1;
        &:hover{
          opacity: 0.7;
        }
      }
      img{
        position: absolute;
        width: 30vw;
        height: auto;
        top: 0;bottom: 0;
        left: 0;right: 0;
        margin: auto;
        z-index: -1;
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
  .please_click{
    height: 60px;
    width: 60px;
    @include middle;
    margin-right: 16px;
    overflow: hidden;
    p{
      font-size: 40px;
      animation: click_show 300ms infinite alternate ease-in-out;
    }
    @keyframes click_show{
      to{
        transform: scale(0.9);
      }
      from{
        transform: scale(1);
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
     .please_click{
       margin-right: 4px;
     }
   }
</style>
