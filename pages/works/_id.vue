<template lang="pug">
  section
    cursorPointer
    .first
      .first__wrap
        .first__wrap__title-box
          h1.first__wrap__title-box--title {{ items[$route.params.id].title }}
          p.first__wrap__title-box--date {{ items[$route.params.id].date }}
        img.first__wrap--image(:src="`/image/thumbnail/${items[$route.params.id].thumbnail}`")
    .article
      .article__wrap
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
  .first{
    &__wrap{
      @include full_screen;
      position: relative;
      &__title-box{
        position: absolute;
        height: 20%;
        width: 50vw;
        top: 0;bottom: 0;
        left: 0;right: 0;
        margin: auto;
        z-index: 2;
        display: flex;
        justify-content: space-between;
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
        filter: blur(0.3rem);
      }
    }
  }
</style>
