<template lang="pug">
  section

    cursorPointer
    .first
      .first__wrap
        .first__wrap__title-box
          h1.first__wrap__title-box--title {{ items[$route.params.id].title }}
          p.first__wrap__title-box--date {{ items[$route.params.id].date }}
        img.first__wrap--image(:src="`/markdown/thumbnail/${items[$route.params.id].thumbnail}`" decoding="async")
    .article
      .article__wrap
        div.article__wrap__text(v-html="$md.render(require(`@/static/markdown/${items[$route.params.id].fileName}`).default)")

    sideMenu
    vueFooter
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
// library
import works from '@/assets/json/works.json'
import { TweenMax } from 'gsap';

export default {
  components: {
    cursorPointer,
    sideMenu,
    vueFooter
  },
  data () {
    return {
      hello:"hello",
      items: works,
    }
  },
  mounted:()=>{
    console.log("hi");
    let target = document.querySelectorAll('.article__wrap__text section p')

  }
}
</script>

<style lang="scss" scoped>

  .first{
    &__wrap{
      @include full_screen;
      position: relative;
      &::before{
        /* 透過した黒を上から重ねるイメージ */
        background-color: rgba(0,0,0,0.2);
        /* 自由に位置指定 */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: ' ';
        z-index: 2
      }
      &__title-box{
        position: absolute;
        height: 20%;
        width: 50vw;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        &--title{
          font-size: 10rem;
          align-self:flex-start
        }
        &--date{
          font-size: 4rem;
          align-self:flex-end;
        }
      }
      &--image{
        @include full_screen;
        object-fit: cover;
      }
    }
  }
  .article{
    &__wrap{
      padding-top: 20rem;
      height: auto;
      margin: auto;
      &__text{
        /deep/ section{
          width: 100vw;
          p{
            padding: 0 30rem;
            margin: 3rem 0;
            line-height: 3rem;
            letter-spacing: 0.2rem;
            font-size: 2rem;

            img{
              width: 60%;
              margin: auto;
              display:block;
              margin: 25vh;
              box-shadow: 2rem 2rem 4rem #e6e6e660;
            }
            a{
              color: #717171 !important;
            }
          }
        }
        img{
          width: 100% !important;
        }
      }
    }
  }


  @include mq(sm){
    .first{
      &__wrap{
        @include full_screen;
        position: relative;
        &__title-box{
          position: absolute;
          height: 20%;
          width: 50vw;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          align-items: center;
          &--title{
            font-size: 5rem;
            align-self:auto;
          }
          &--date{
            font-size: 3rem;
            align-self:auto;
          }
        }
      }
    }
    .article{
      &__wrap{
        padding-top: 2rem;
        @include custom_size;
        height: auto;
        margin: auto;
        &__text{
          /deep/ section{
            width: auto;
            p{
              margin: 3rem 0;
              line-height: 2.2rem;
              letter-spacing: 0.2rem;
              font-size: 1.5rem;
              padding: 0 10%;
              img{
                width: 100%;
                margin: 25vh auto;
              }
            }
          }
        }
      }
    }
  }
</style>
