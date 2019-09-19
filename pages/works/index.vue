<template lang="pug">
  section
    sideMenu
    no-ssr
      fp_nav
      full-page( ref="fullpage" :options="options" id="fullpage")
        .first.section
          .first__wrap
            h1 Works

        .work.section(
          v-for="(item,index) in itmesDivision()"
          :key="index"
          )

          .work__box
            .work__item(v-for="(works,index_child) in item" :key="index_child")
              nuxt-link.work__thumbnail(:to="`/works/${index * 2 + index_child}`")
                .work__thumbnail__wrap
                  img(:src="`/markdown/thumbnail/${works.thumbnail}`" decoding="async")
                  h2 {{works.title}}
                // img.work__shadow(:src="`/markdown/thumbnail/${works.thumbnail}`" decoding="async")
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
  import axios from 'axios'

  export default {
    components: {
      cursorPointer,
      sideMenu,
      vueFooter,
      fp_nav
    },
    data () {
      return {
        index: 0,
        items: works,
        options: {
          licenseKey: 'C369A22F-73704243-8980D98A-0B1A5553',
          css3: true,
          afterLoad:this.afterLoad,
          afterRender: this.afterRender,
        }
      }
    },

    methods:{
      afterLoad(anchorLink, index){
        // console.log(index.index);
        document.querySelector('.fp-nav__count').innerHTML = index.index + 1;
        return index.index + 1;
      },
      afterRender(){
        const section_length = document.querySelectorAll('.section').length
        document.querySelector('.fp-nav__index').innerHTML = section_length
        return section_length
      },
      itmesDivision(){
        const items_len = this.items.length;
        const cnt = 2;
        let works_arr = [];
        for(let i = 0; i < Math.ceil(items_len / cnt); i++){
          let j = i * cnt;
          let p = this.items.slice(j, j + cnt);
          works_arr.push(p)
        }
        return works_arr
      },
    }
  }
</script>

<style lang="scss" scoped>
.first{
  @include full_size;
  &__wrap{
    @include full_size;
    @include middle;
  }
  h1{
    font-size: 20vh;
    display: inline-block;
  }
}
.work{
  &__box{
    margin:0 calc(8rem + 40px);
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__item{
    width: 45%;
    transition: all .6s ease .2s;
    position: relative;
    box-shadow: 4rem 4rem 4rem #a1a1a130;
  }
  &__thumbnail{
    height: 100%;
    width: 100%;

    &__wrap{
      overflow: hidden;
      height: 100%;
      width: 100%;
      position: relative;
      &:hover > img{
        transform: scale(1.1);
      }
      &:hover > h2{
        opacity: 1;
        bottom: 1rem;
      }
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;

        transform: scale(1);
        transition: all .3s ease .2s;
      }
      h2{
        opacity: 0;
        position: absolute;
        bottom: -1rem;
        left: 2rem;
        z-index: 2;
        transition: all .3s ease-in .2s;
      }
    }

  }
  &__shadow{
    position: absolute;
    bottom: -4rem;
    left: 4rem;
    z-index: -2;
    opacity: 0.4;
    filter: blur(1rem);
  }
}


@include mq(sm){
  .first{
    h1{
      font-size: 10vh;
    }
  }
  .work{
    &__box{
      margin:0 40px;
      height: 65vh;
      flex-direction: column;
    }
    &__item{
      width: 100%;
      height: 45%;
    }
    &__thumbnail{
      h2{
        display: none;
      }
    }
    &__shadow{
      bottom: -2rem;
      left: 2rem;
      opacity: 0.4;
      filter: blur(1rem);
    }
  }
}
</style>
