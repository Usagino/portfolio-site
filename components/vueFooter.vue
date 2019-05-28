<template lang="pug">
  footer
    .footer
      .footer__wrap
        .footer__wrap__container
          nav.footer__wrap__container__sns
            h2.footer__wrap__container__sns__title SNS
            ul.footer__wrap__container__sns__list
              li Twitter
              li Instagram
              li Wantedly
              li Dribbble
          .footer__wrap__container__contact
            h2.footer__wrap__container__contact__title Contact
            ul.footer__wrap__container__contact__list
              li yuki.itoh@front-artgraph.com
              li Japan Tokyo
              li copylight 2019 yuki itoh
          .footer__wrap__container__image
            img.footer__wrap__container__image__logo(src="image/my_logo.svg")
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
          background: #f8f8f8;
          @include list_style;
        }
        &__contact{
          grid-area: contact;
          background: #f0f0f0;
          @include list_style;
        }
        &__image{
          grid-area: image;
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
</style>
