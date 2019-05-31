<template lang="pug">
  section
    cursorPointer
    sideMenu
    .works
      .works__wrap
        .works__wrap__contents(v-for="(item,index) in items")
          img.shadow(:src="`/markdown/thumbnail/${item.thumbnail}`" decoding="async")
          nuxt-link(:to="`/works/${index}`").works__wrap__contents__wrap
            img.works__wrap__contents__wrap--image(:src="`/markdown/thumbnail/${item.thumbnail}`" decoding="async")
            .works__wrap__contents__wrap__link
              h1 {{item.title}}
    vueFooter
</template>

<script>
  // components
  import cursorPointer from '@/components/cursorPointer'
  import sideMenu from '@/components/sideMenu'
  import vueFooter from '@/components/vueFooter'
  // library
  import works from '@/assets/json/works.json'
  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter
    },
    data () {
      return {
        items: works
      }
    }
  }
</script>

<style lang="scss" scoped>
@mixin Masonry($grid) {
  margin: 0 auto;
  column-count: $grid;
  column-gap: 7rem;
}
@mixin Masonry_child{
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}
.works{
  width: 100vw;
  margin: 10rem 0;
  &__wrap{
    @include custom_size;
    height: auto;
    margin: auto;
    @include Masonry(3)
    &__contents{
      @include Masonry_child
      width: auto;
      height: auto;
      content: "";
      margin-bottom: 7rem;

      position: relative;
      .shadow{
        filter: blur(2rem);
        height: auto
      }
      &__wrap{
        @include full_size;
        &:hover{
          & > img{
            filter: blur(0.2rem);
          }
          & > * > h1{
            opacity: 1;
          }
        }
        &--image{
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: all .3s ease .2s;
          padding-bottom: 10rem;
        }
        &__link{

          h1{
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform : translate(-50%,-50%);
            transform : translate(-50%,-50%);
            transform-origin: center center;
            width: 100px;
            text-align: center;
            transition: all .3s ease .2s;
            color: $text_color1;
            font-size: 3rem;
            opacity: 0;
          }
        }
      }
    }
  }
}

@include mq(sm){
  .works{
    &__wrap{
      @include Masonry(1)
    }
  }
}
</style>
