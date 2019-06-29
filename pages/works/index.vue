<template lang="pug">
  section
    sideMenu
    no-ssr
      full-page(ref="fullpage" :options="options" id="fullpage")
        .work.section(
          v-for="(item,index) in items"
          :key="index"
          )
          .work__wrap
            .work__thumbnail
              .work__thumbnail__wrap
                img.work__thumbnail__image(:src="`/markdown/thumbnail/${item.thumbnail}`" decoding="async")
              img.work__thumbnail__shadow(:src="`/markdown/thumbnail/${item.thumbnail}`" decoding="async")
            nuxt-link.work__link(:to="`/works/${index}`")
              h1.work__link__text {{item.title}}
        vueFooter.section
</template>

<script>
  // components
  import cursorPointer from '@/components/cursorPointer'
  import sideMenu from '@/components/sideMenu'
  import vueFooter from '@/components/vueFooter'
  // library
  import works from '@/assets/works.json'
  import inView from 'in-view'
  import { TweenMax } from 'gsap'

  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter
    },
    data () {
      return {
        items: works,
        options: {
          licenseKey: 'C369A22F-73704243-8980D98A-0B1A5553',
          scrollBar: true,
          css3: true,
          afterLoad:(anchorLink, index)=>{
            let footer_el = document.querySelector('#footer')
            let section_el = document.querySelectorAll('.section')
            console.log(section_el.length);
            console.log(index.index);
            if (section_el.length -1 !== index.index) {
              let image_el = index.item.querySelector('.work__thumbnail__image')
              let link_el = index.item.querySelector('.work__link__text')
              TweenMax.to(image_el,0.3,{ y:'0%' })
              TweenMax.to(link_el,0.3,{
                  y:'0%',
                  delay:0.5})
            }
          },
          afterRender: ()=>{
            const el_thumbnail = document.querySelectorAll('.work')
            TweenMax.set('.work__thumbnail__image,.work__link__text',{
              y:'100%'})
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.work{
  @include full_screen;
  &__wrap{
    @include custom_size;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__thumbnail{
    height: 100%;
    width: 50vw;
    position: relative;
    &__wrap{
      @include full_size;
      overflow: hidden;
    }
    &__image{
      @include full_size;
      object-fit: cover;
    }
    &__shadow{
      position: absolute;
      z-index: -1;
      top: 6rem;
      left: 3rem;
      opacity: 0.8;
      filter: blur(3rem);
      @include full_size;
      object-fit: cover;
    }
  }
  &__link{
    margin-left: 6rem;
    width: calc(100% - 6rem - 50vw);
    overflow: hidden;
    &__text{

    }
  }
}

@include mq(sm){
  .work{
    &__wrap{
    }
    &__thumbnail{
      width: 100%;
      &__wrap{
      }
      &__image{
      }
      &__shadow{
      }
    }
    &__link{
      display: none;
      &__text{

      }
    }
  }
}
</style>
