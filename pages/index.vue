<template lang="pug">
section
  cursorPointer
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
        img(src="image/top/works_2.png")
      .works__wrap__area-3.works__wrap__area
        img(src="image/top/works_3.png")
      .works__wrap__area-4.works__wrap__area
        img(src="image/top/works_4.png")
  .about
    .about__wrap
      .about__wrap__image
        img(src="/image/top/my.png")
        img.shadow(src="/image/top/my.png")
      .about__wrap__title
        nuxt-link(to="/about") About him

  vueFooter
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
import Lottie from '@/components/Lottie'
import myLogo from '@/components/myLogo'
// library
import * as animationData from "~/assets/json/my_logo.json";


export default {
  components: {
    cursorPointer,
    Lottie,
    sideMenu,
    myLogo,
    vueFooter
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
    @include custom_size;
    position: relative;

    &__image{
      @include full_size;
      img{
        height: 100%;
        width: auto;
      }
    }
    &__title{
      display: inline-block;
      position: absolute;
      top: 0;bottom: 0;
      right: 0; left: 0;
      margin: auto;
      a{
        color: $text_color1;
        font-size: 10rem;
        display: inline-block;
        line-height: 72vh;
        position: absolute;
        right: 0;
      }
    }

  }
}
 @include mq(sm) {
   .about{
     &__wrap{
       &__image{
         @include middle;
         img{
           height: auto ;
           width: 100%;
         }
       }
       &__title{
         a{
           font-size: 5rem;
           line-height: normal;
           bottom: 0;
           left: 0;
           margin: auto;
           position: absolute;

         }
       }

     }
   }
 }
</style>
