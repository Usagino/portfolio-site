<template lang="pug">
  .work
    .work__thumbnail(:style="{backgroundImage:'url('+this.workContents.thumbnail.url+')'}")
      h1.work__title {{this.workContents.title}}
    .work__wrap
      .work__body(v-html="this.workContents.body")
    AppFooter.section
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
.work{
  &__wrap{
    max-width: 1080px;
    margin:0 auto;
  }
  &__thumbnail{
    @include full_screen;
    width: 100%;
    @include middle;
    background-attachment: fixed;

    position: relative;

    &:before{
      content: '';
      position: absolute;
      @include full_screen;
      top: 0;left: 0;
      background:rgba(0, 0, 0, 0.4);
    }

  }
  &__title{
    font-size: 32px;
    color: white;

    z-index: 10;
  }
  &__body{
    margin: auto;
    box-sizing: border-box;
    p,span{
      font-size: 18px;
      line-height: 36px;
      margin: 36px 0;
      a{
        padding: 8px 24px;
        border: 1px solid #c9c9c9;
        border-radius: 16px;
        &:before{
          content: "☞ "
        }
        &:hover{
          opacity: 0.6;
        }
      }
      img{
        display: block;
        border: 1px solid #f2f2f2;
        height: auto;
        width: 100%;
        text-align: center;
      }
    }
  }
}
@include mq(sm){
  .work{
    &__wrap{
      max-width: 340px;
    }
    &__thumbnail{
      @include full_screen;
      width: 100%;
      @include middle;
      &__image{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    &__title{
      font-size: 32px;
      margin-bottom: 18px;
    }
    &__body{
      p,span{
        font-size: 16px;
        line-height: 30px;
        margin: 36px 0;
        img{
          border: 1px solid #f2f2f2;
          height: auto;
          max-width: 100% !important;
          margin: 36px 0;
        }
      }
    }
  }
}
</style>
