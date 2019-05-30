<template lang="pug">
  section
    cursorPointer
    sideMenu
    .works
      .works__wrap
        .works__wrap__contents(v-for="(item,index) in items")
          img.shadow(:src="`/image/thumbnail/${item.thumbnail}`")
          nuxt-link(:to="`/works/${index}`").works__wrap__contents__wrap
            img.works__wrap__contents__wrap--image(:src="`/image/thumbnail/${item.thumbnail}`")
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
.works{
  width: 100vw;
  margin-top: 10rem;
  &__wrap{
    @include custom_size;
    height: auto;
    margin: auto;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    -webkit-column-count: 3;
    -moz-column-count:3;
    column-count: 3;

    -webkit-column-gap: 4rem;
    -moz-column-gap: 4rem;
    column-gap: 4rem;

    grid-gap: 6rem;

    &__contents{
      break-inside: avoid-column;
	    margin-bottom: 6rem;
      width: auto;
      height: auto;
      content: "";

      position: relative;
      .shadow{
        filter: blur(2rem);
      }
      &__wrap{
        @include full_size;

        &:hover{
          & > img{
            filter: blur(1rem);
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
      -webkit-column-count: 1;
      -moz-column-count:1;
      column-count: 1;
    }
  }
}
</style>
