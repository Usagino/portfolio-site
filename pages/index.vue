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
      //- img.about__wrap__parallax.about__wrap__parallax--1(src="/image/top/polaroid_1.JPG" v-parallax="0.5")
      //- img.about__wrap__parallax.about__wrap__parallax--2(src="/image/top/polaroid_2.JPG" v-parallax="0.1")
      //- img.about__wrap__parallax.about__wrap__parallax--3(src="/image/top/polaroid_3.JPG" v-parallax="0.2")
      //- img.about__wrap__parallax.about__wrap__parallax--4(src="/image/top/polaroid_4.JPG" v-parallax="0.6")
      //- img.about__wrap__parallax.about__wrap__parallax--5(src="/image/top/polaroid_5.JPG" v-parallax="0.2")
      //- img.about__wrap__parallax.about__wrap__parallax--6(src="/image/top/polaroid_6.JPG" v-parallax="0.5")
      nuxt-link.about__wrap__title(to="/about") <span></span> me
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
import inView from 'in-view'
import { init } from 'ityped'

export default {
  components: {
    cursorPointer,
    Lottie,
    sideMenu,
    myLogo,
    vueFooter
  },
  mounted:()=>{
    const target = document.querySelector('.about__wrap__title span');

    inView('.about__wrap__title span')
    .once('enter', ()=>{
      init(target, {
        showCursor: false,
        strings: ['Touch','About'],
        loop:false,
        backDelay:  1000,
        startDelay: 200
      });
    })
  }
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
    @include middle;
    position: relative;
    // &__parallax{
    //   position: absolute;
    //   z-index: -1;
    //   opacity: 0.6;
    //   width: 250px;
    //   height: auto;
    //   filter: blur(3rem);
    //   &--1{
    //     left: 30%;
    //     bottom: 10%;
    //   }
    //   &--2{
    //     left: 60%;
    //     bottom: 60%;
    //   }
    //   &--3{
    //     left: 80%;
    //     bottom: 50%;
    //   }
    //   &--4{
    //     right: 30%;
    //     top: 10%;
    //   }
    //   &--5{
    //     right: 60%;
    //     top: 23%;
    //   }
    //   &--6{
    //     right: 80%;
    //     top: 20%;
    //   }
    // }
    &__title{
      font-size: 20rem;
      font-weight: bold;
      background-image: url('/image/top/my.gif');
      -webkit-background-clip: text;
      color: transparent;
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
     @include full_screen;
     @include middle;
     &__wrap{
       @include custom_size;
       @include middle;
       position: relative;
       &__title{
         font-size: 10rem;
         font-weight: bold;
         background-image: url('/image/top/my.gif');
         -webkit-background-clip: text;
         color: transparent;
         height: 240px;
       }
     }
   }
 }
</style>
