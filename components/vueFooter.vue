<template lang="pug">
  footer
    .footer
      .footer__wrap
        .footer__wrap__container
          nav.footer__wrap__container__sns

            ul.footer__wrap__container__sns__list
              li
                h2 SNS
              li
                a(href="https://twitter.com/_Frontart" target="_blank") Twitter
              li
                a(href="https://www.instagram.com/frontartgraph/" target="_blank") Instagram
              li
                a(href="https://dribbble.com/usaginoniku" target="_blank") Dribbble
          .footer__wrap__container__contact
            ul.footer__wrap__container__contact__list
              li
                h2 Contact
              li yuki.itoh@front-artgraph.com
              li Japan Tokyo
              li copylight 2019 yuki itoh
          .footer__wrap__container__image
            img.footer__wrap__container__image__logo(src="/image/my_logo.svg")
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
footer{
  @include full_screen;
  .footer{
    @include full_size;
    &__wrap{
      @include middle;
      @include full_size;
      &__container{
        @include custom_size;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "sns image" "contact image";
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
        @mixin list-style{
          @include middle;
          flex-direction: column;
          text-align: center;
          letter-spacing: 0.2rem;
          &__title{
            font-size: 3rem;
          }
          &__list{
            font-size: 2rem;
            & > *{
              padding: 0.7rem 0;
            }
          }
        }
        &__sns{
          grid-area: sns;
          -ms-grid-row: 1;
          -ms-grid-row-span: 1;
          -ms-grid-column: 1;
          -ms-grid-column-span: 1;
          background: #f8f8f8;
          @include list_style;
        }
        &__contact{
          grid-area: contact;
          -ms-grid-row: 2;
          -ms-grid-row-span: 1;
          -ms-grid-column: 1;
          -ms-grid-column-span: 1;
          background: #f0f0f0;
          @include list_style;
        }
        &__image{
          grid-area: image;
          -ms-grid-row: 1;
          -ms-grid-row-span: 2;
          -ms-grid-column: 2;
          -ms-grid-column-span: 1;
          background: #f6f6f6;
          @include middle;
          &__logo{
            width: 30%;
            height: auto;
          }
        }
      }
    }
  }
}
@include mq(sm){
  footer{
    *{
      font-size: 1.5rem !important;
    }
    @include full_screen;
    .footer{
      @include full_size;
      &__wrap{
        @include middle;
        @include full_size;
        &__container{
          @include custom_size;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: "sns image" "contact image";
          &__image{
            display: none;
          }
        }
      }
    }
  }
}
</style>
