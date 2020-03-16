<template lang="pug">
  section.container
    .first.section(@mouseover="linkMouseover('LETS D⬇︎VE')" @mouseleave="linkMouseLeave")
      .first__wrap
        .first__wrap__logo
          myLogo
    .works.section
      .works__wrap(@mouseover="linkMouseover('GO MY WORKS PAGE')" @mouseleave="linkMouseLeave")
        nuxt-link.works__wrap--link(to="/works")
          img(src="/image/top/top_image.JPG")
      .works__back
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
      .works__back.works__back__black(:style="{height:aboutHeight+'vh'}")
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS
        p WORKS

    .about.section
      .about__wrap(@mouseover="linkMouseover('HELLO I AM YUKI')" @mouseleave="linkMouseLeave")
        nuxt-link.about__wrap__image(to="/about")
          GlitchMan
      .about__back
        p AB<span style="opacity:0;">O</span>UT
    AppFooter.section
    mouseStoker(ref="ms")
</template>

<script>
// library
import inView from 'in-view'
import {TweenMax} from 'gsap'

export default {
  data(){
    return{
      aboutHeight:100
    }
  },
  mounted(){
    let sh = window.screen.height;
    const aboutElOffsetTop = document.getElementsByClassName('about')[0].offsetTop - sh / 2;
    window.addEventListener("scroll", () => {
      let y = window.pageYOffset;
      let scrollY = y - sh
      let aboutPercentage = (y) / (sh*2) * 100
      this.aboutHeight = aboutPercentage < 100 ? aboutPercentage : 100
    })

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
        @include mq(sm){
          width: 70vw;
        }
      }
    }
  }
  .works{
    @include full_screen;
    @include middle;
    position: relative;
    &__wrap{
      width: 400px;
      height: 250px;
      @include middle;
      position: absolute;
      @include middle-absolute;
      z-index: 20;
      @include mq(sm){
        width: 200px;
        height: 100px;
      }
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        top: 0;bottom: 0;
        left: 0;right: 0;
        margin: auto;
        z-index: -1;
      }
    }
    &__back{
      overflow: hidden;
      position: absolute;
      z-index: -1;
      @include full_screen;
      @include middle;
      justify-content: space-between;
      p {
        display: block;
        text-align: center;
        font-size: 100px;
        writing-mode: vertical-rl;
        margin: 8px 0;
        @include strok_text;
      }
      &__black{
        p{
          color: $text_color1;
        }
      }
    }
  }
  .about{
    @include full_screen;
    @include middle;
    position: relative;
    &__wrap{
      height: fit-content;
      width: 400px;
      &__image{
        @include full_size;
        height:400px;
        width: 400px;
      }

    }
    &__back{
      @include full_size;
      position: absolute;
      z-index: -1;
      @include middle;
      p{
        writing-mode:vertical-rl;
        @include strok_text;
        font-size: 230px;
      }

    }
  }
</style>
