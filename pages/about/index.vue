<template lang="pug">
  section
    sideMenu
    .first
      .first__wrap
        .first__wrap__title-box
          h1.first__wrap__title-box--text YUKI ITOH
    .caption
      .caption__wrap
        aboutMe.caption__wrap__image
        .caption__wrap__text-box
          h1 About me
          p 日本工学院専門学校所属、デザイン専攻。
          p 画面の中のデザインだけではなく、使用者の将来までもをデザインできるデザイナーになりたいと考えている。趣味は写真とコーヒー。最近はモーショングラフィックスにはまっている。
          p 愛読書は伊藤計劃の「Harmony」と森博嗣の「すべてがFになる」
    .caption
      .caption__wrap
        .caption__wrap__text-box
          h1 Programming for the Design
          p IllustratorやPhotoshop、XDやFigma、これらはどれもデザインツールと呼ばれるものだ。個人ないし集団が何かを表現したいとき表現したいときに使うツールだ。
          p 私の場合はそれがプログラミングだった。高校生の頃からプログラミングにふれ、JavaScriptなど多々あるプログラミング言語を使って、何かを表現してきた。
          p プログラミングは必ずしも技術者だけのものではない、表現者の道具でもあるのだと私は考えている。
        codeDesign.caption__wrap__image
    vueFooter
</template>

<script>
  // components
  import cursorPointer from '@/components/cursorPointer'
  import sideMenu from '@/components/sideMenu'
  import vueFooter from '@/components/vueFooter'
  import codeDesign from '@/components/codeDesign'
  import aboutMe from '@/components/aboutMe'

  import { TweenMax } from 'gsap'
  import inView from 'in-view'
  import { init } from 'ityped'
  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter,
      codeDesign,
      aboutMe
    },
    mounted:()=>{
      // .first view animations
      TweenMax.to('.first__wrap__image-box img',0.6,{
        scale:1,
        delay:0.3
      })
      TweenMax.to('.first__wrap__image-box img',0.6,{
        opacity:0.6,
        delay:0.8
      })
      TweenMax.to('.first__wrap__title-box',1,{
        width:'100vw',
        delay:0.8
      })
    },
  }
</script>

<style lang="scss" scoped>
.first{
  &__wrap{
    @include full_screen;
    @include middle;
    position: relative;
    &__title-box{
      @include middle;
      position: absolute;
      top: 0;left: 0;
      bottom: 0; right: 0;
      margin: auto;
      height: 30vh;
      width: 0vw;
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
.about{
  &__wrap{
    @include full_screen;
    @include middle;
    position: relative;
    p{
      font-size: 2.5rem;
      @include text-center;
      line-height: 4rem;
      letter-spacing: 0.5rem;
      height: 200px
    }
    &__image{
      position: absolute;
      width: 250px;
      height: auto;
      bottom: 0;
      img{
        @include full_size;
      }
      &--1{
        opacity: 0,
      }
      &--2{
        opacity: 0;
        left: 10rem;
      }
      &--3{
        opacity: 0;
        right: 10rem;
      }
    }
  }
}
.caption{
  @include full_screen
  @include middle
  &__wrap{
    @include custom_size;
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
      position: relative;
      @include custom_size;
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
          font-size: 4rem
        }
        p{
          line-height: 3.5rem;
          letter-spacing: 2px
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
