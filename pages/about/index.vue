<template lang="pug">
  section
    cursorPointer
    sideMenu
    .first
      .first__wrap
        .first__wrap__title-box
          h1.first__wrap__title-box--text YUKI ITOH
        .first__wrap__image-box
          img(src="/image/about/about_page.jpg" decoding="async")
          img.shadow(src="/image/about/about_page.jpg" decoding="async")
    .about
      .about__wrap
        p
        .about__wrap__image.about__wrap__image--1
          img(src="/image/about/about_1.png" decoding="async")
          img.shadow(src="/image/about/about_1.png" decoding="async")
        .about__wrap__image.about__wrap__image--2
          img(src="/image/about/about_2.png")
          img.shadow(src="/image/about/about_2.png" decoding="async")
        .about__wrap__image.about__wrap__image--3
          img(src="/image/about/about_3.png")
          img.shadow(src="/image/about/about_3.png" decoding="async")
    .caption
      .caption__wrap
        .caption__wrap__text-box
          h1 Programming for the Design
          p IllustratorやPhotoshop、XDやFigma、どれもデザインツールと呼ばれるものだ。個人ないし群衆が何かを表現したいとき表現するための道具である。
          p 私の場合はそれがプログラミングだった。高校生の頃からプログラミングにふれ、JavaScriptなど多々あるプログラミング言語を使って、何かを表現してきた。
          p プログラミングは必ずしも技術者だけのものではない、表現者の道具なのだ。
        codeDesign(v-parallax="0.2").caption__wrap__image
    vueFooter
</template>

<script>
  // components
  import cursorPointer from '@/components/cursorPointer'
  import sideMenu from '@/components/sideMenu'
  import vueFooter from '@/components/vueFooter'
  import codeDesign from '@/components/codeDesign'

  import { TweenMax } from 'gsap'
  import inView from 'in-view'
  import { init } from 'ityped'
  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter,
      codeDesign
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
      // .about view animations
      const target = document.querySelector('.about__wrap p');


      inView('.about__wrap p')
      .once('enter', ()=>{
        init(target, {
          showCursor: false,
          strings: ['日本工学院専門学校所属、デザイン専攻。高校の頃は工業高校だったので紙のレポートに数十行あるプログラムを手書きで書いてレポートを提出する文化に憤りを感じつつもなんやかんや卒業。プログラミングは独学で勉強しつつデザインを学ぶ。趣味はものを作ることとコーヒーと写真。','それが私です'],
          loop:false,
          typeSpeed:  60,
          backSpeed: 10,
          placeholder: false,
          backDelay:  1000,
          startDelay: 1000,
        });
        TweenMax.to('.about__wrap__image--1',1,{
          y:'-10vh',
          opacity:1,
          delay:13
        })
        TweenMax.to('.about__wrap__image--2',1,{
          y:'-20vh',
          opacity:1,
          delay:12
        })
        TweenMax.to('.about__wrap__image--3',1,{
          y:'-15vh',
          opacity:1,
          delay:12.5
        })
      });
      // other
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
  .about{
    &__wrap{
      position: relative;
      height: 480px;
      p{
        @include text_center;
        height: auto;
        font-size: 1.5rem;
      }
      &__image{
        // display: none;
        display: block;
        width: 25%;
        img{
          height: auto;
        }
        &--1{
          opacity: 0,
        }
        &--2{
          opacity: 0;
          left: 2rem;
        }
        &--3{
          opacity: 0;
          right: 2rem;
        }
      }
    }
  }
  .caption{
    @include full_screen
    @include middle
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
