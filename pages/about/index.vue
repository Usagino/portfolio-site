<template lang="pug">
  section
    sideMenu
    fp_nav
    no-ssr
      full-page( ref="fullpage" :options="options" id="fullpage")
        .first.section
          .first__wrap
            .first__wrap__title-box
              h1.first__wrap__title-box--text YUKI ITOH
        .caption.section
          .caption__wrap
            aboutMe.caption__wrap__image
            .caption__wrap__text-box
              h1 About me
              p 日本工学院専門学校所属、デザイン専攻。
              p 画面の中のデザインだけではなく、使用者の将来までもをデザインできるデザイナーになりたいと考えている。趣味は写真とコーヒー。最近はモーショングラフィックスにはまっている。
              p 愛読書は伊藤計劃の「Harmony」と森博嗣の「すべてがFになる」
        .caption.section
          .caption__wrap
            .caption__wrap__text-box
              h1 Programming for the Design
              p IllustratorやPhotoshop、XDやFigma、これらはどれもデザインツールと呼ばれるものだ。個人ないし集団が何かを表現したいとき表現したいときに使うツールだ。
              p 私の場合はそれがプログラミングだった。高校生の頃からプログラミングにふれ、JavaScriptなど多々あるプログラミング言語を使って、何かを表現してきた。
              p プログラミングは必ずしも技術者だけのものではない、表現者の道具でもあるのだと私は考えている。
            codeDesign.caption__wrap__image
        vueFooter.section
</template>

<script>
  // components
  import cursorPointer from '@/components/cursorPointer'
  import sideMenu from '@/components/sideMenu'
  import vueFooter from '@/components/vueFooter'
  import codeDesign from '@/components/lottie/codeDesign'
  import aboutMe from '@/components/lottie/aboutMe'
  import fp_nav from '@/components/fp-nav'

  import { TweenMax } from 'gsap'
  import inView from 'in-view'
  import { init } from 'ityped'
  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter,
      codeDesign,
      aboutMe,
      fp_nav
    },
    data(){
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
        document.querySelector('.fp-nav__count').innerHTML = index.index + 1;
      },
      afterRender(){
        const section_length = document.querySelectorAll('.section').length
        document.querySelector('.fp-nav__index').innerHTML = section_length

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
      }
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

.caption{
  @include full_screen
  @include middle
  &__wrap{
    padding: 10rem;
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
