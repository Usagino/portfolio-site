<template lang="pug">
  section
    sideMenu
    no-ssr
      fp_nav
      full-page( ref="fullpage" :options="options" id="fullpage")
        .work.section(
          v-for="(item,index) in items"
          :key="index"
          )
          .work__wrap
            nuxt-link.work__thumbnail(:to="`/works/${index}`")
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
  import fp_nav from '@/components/fp-nav'
  // library
  import works from '@/assets/works.json'
  import inView from 'in-view'
  import { TweenMax } from 'gsap'

  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter,
      fp_nav
    },
    props:{
      indexLength :Number
    },
    data () {
      return {
        index: 0,
        items: works,
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
        console.log(index.index);
        document.querySelector('.fp-nav__count').innerHTML = index.index + 1;
        let footer_el = document.querySelector('#footer')
        let section_el = document.querySelectorAll('.section')

        if (section_el.length -1 !== index.index) {
          let image_el = index.item.querySelector('.work__thumbnail__image')
          let link_el = index.item.querySelector('.work__link__text')
          let shadow_el = index.item.querySelector('.work__thumbnail__shadow')
          let a_tag_el = index.item.querySelector('.work__link')
          let a_two_el = index.item.querySelector('.work__thumbnail')
          TweenMax.to(image_el,0.3,{ y:'0%' })
          TweenMax.to(link_el,0.3,{
              y:'0%',
              delay:0.5})
          TweenMax.to(shadow_el,1,{
            scale:1,delay:0.2
          })
          a_tag_el.addEventListener('mouseover',()=>{
            TweenMax.to(shadow_el,2,{
              scale:1.4
            })
          })
          a_tag_el.addEventListener('mouseout',()=>{
            TweenMax.to(shadow_el,2,{
              scale:1
            })
          })

          a_two_el.addEventListener('mouseover',()=>{
            TweenMax.to(shadow_el,2,{
              scale:1.4
            })
          })
          a_two_el.addEventListener('mouseout',()=>{
            TweenMax.to(shadow_el,2,{
              scale:1
            })
          })
        }
      },
      afterRender(){
        const el_thumbnail = document.querySelectorAll('.work')
        const section_length = document.querySelectorAll('.section').length
        console.log(section_length);
        TweenMax.set('.work__thumbnail__image,.work__link__text',{y:'110%'})
        TweenMax.set('.work__thumbnail__shadow',{scale:0})
        document.querySelector('.fp-nav__index').innerHTML = section_length
      }
    },
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
      position: relative;
    }
    &__thumbnail{
      width: 100%;
      &__wrap{
      }
      &__image{

      }
      &__shadow{
        top: 1rem;
        left: 0rem;
        filter: blur(1rem);
      }
    }
    &__link{
      width: auto;
      position: absolute;
      margin: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 10rem;
      padding: 1rem;
      // background:linear-gradient(#ffffff00, #323232aa);
      display: flex;
      align-items: flex-end;
      &__text{
        font-size: 3rem;
        color: #ededed;

      }
    }
  }
}
</style>
