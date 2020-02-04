<template lang="pug">
  section
    no-ssr
      .first.section
        LetsDiving
        .first__wrap
          .first__wrap__title-box
            h1.first__wrap__title-box--text YUKI ITOH
      .caption.section
        .caption__wrap
          aboutMe.caption__wrap__image
          .caption__wrap__text-box
            h1(v-html="get_about.about_title_1")
            p.caption__text(v-html="get_about.about_text_1")
      .caption.section
        .caption__wrap
          .caption__wrap__text-box
            h1(v-html="get_about.about_title_2")
            p.caption__text(v-html="get_about.about_text_2")
          codeDesign.caption__wrap__image
      .caption.section
        .caption__wrap
          mineGlitch.caption__wrap__image
          .caption__wrap__text-box
            h1(v-html="get_about.about_title_3")
            p.caption__text(v-html="get_about.about_text_3")
      AppFooter.section
</template>

<script>
  import { TweenMax } from 'gsap'
  import axios from "axios";
  export default {
    data(){
      return {
        get_about:Object
      }
    },

    methods:{
      fetchAbout() {
        axios.get('https://frontart-tokyo.microcms.io/api/v1/about', {
            headers: { "X-API-KEY": "79b473a7-50ee-4d1a-af50-5298d6a778d8" }
          })
          .then(res => {
            this.get_about = res.data
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted(){
      this.fetchAbout();
    }
  }
</script>

<style lang="scss" scoped>
.section{
  max-width: 1440px;
  margin: auto;
}
.first{
  &__wrap{
    @include full_screen;
    width: auto;
    @include middle;
    position: relative;
    &__title-box{
      @include middle;
      position: absolute;
      top: 0;left: 0;
      bottom: 0; right: 0;
      margin: auto;
      height: 30vh;
      width: 100vw;
      overflow: hidden;
      &--text{
        @include text_center;
        z-index: 2;
        font-size: 10vw;
        letter-spacing: 30px;
        white-space: nowrap;
      }
    }

    &__image-box{
      width: 30vw;
      height: auto;
      position: relative;
      img{
        transform: scale(0);
        @include full_size;
        opacity: 0.8;
      }
    }
  }
}
.caption{
  width: 100vw;
  @include middle
  &__wrap{
    padding: 12rem $outside_space;
    @include full_size;
    display: flex;
    justify-content: center;
    align-items: center;
    &__text-box{
      height: 100%;
      width: 60%;
      @include middle;
      flex-direction: column;
      align-items: flex-start;
      h1{
        padding-bottom: 5rem;
        font-size: 7rem
      }
      p{
        line-height: 3.5rem;
        letter-spacing: 2px
      }
    }
    &__image{
      width: 30% !important;
    }
  }
}
@include mq(sm){
  .first{
    &__wrap{
      &__title-box{
        &--text{
              letter-spacing: 8px;
        }
      }

      &__image-box{
        img{
        }
      }
    }
  }
  .caption{
    @include full_screen
    @include middle
    margin: 10rem 0;
    &__wrap{
      padding: 3rem 5rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &__text-box{
        height: 100%;
        width: 100%;
        @include middle;
        flex-direction: column;
        align-items: flex-start;
        h1{
          padding-bottom: 2rem;
          font-size: 3rem
        }
        p{
          line-height: 3rem;
          letter-spacing: 2px;
          font-size: 1.5rem;
        }
      }
      &__image{
        position: absolute;
        top: 0;bottom: 0;
        left: 0;right: 0;
        margin: auto;
        z-index: -1;
        width: 80% !important;
        opacity: 0.4;
      }
    }
  }
}
</style>
