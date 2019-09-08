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
              //p {{works.title}}
              nuxt-link.work__thumbnail(:to="`/works/${index * 2 + index_child}`")
                img(:src="`/markdown/thumbnail/${works.thumbnail}`" decoding="async")
                h2 {{works.title}}
              img.work__shadow(:src="`/markdown/thumbnail/${works.thumbnail}`" decoding="async")
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

          afterRender: this.afterRender,
        }
      }
    },
    // async asyncData ({ params }) {
    //   let { data } = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=ykmzprBhxIgeyx2EJO00xMRZcrspmD2LwvThc2zvztcfn70I-aDutJMragDjbltjp6CB6kDzEybu2t3HsEODtYttLhuVSIBmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCijglmWlxAmF13opfkr7Kunlc5NaKK-uUgvVWdy6J2_PV1KDXweF4KGaJfRhoZeWqV-rV9yhQ38&lib=M3OFKgHajIZP3__lgiCKQyHrg4_LTEsPs')
    //   console.log({data});
    // },
    methods:{
      afterLoad(anchorLink, index){
        console.log(index.index);
        document.querySelector('.fp-nav__count').innerHTML = index.index + 1;
      },
      afterRender(){
        const section_length = document.querySelectorAll('.section').length
        document.querySelector('.fp-nav__index').innerHTML = section_length
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
      // test(e){
      //   console.log(e.path[2]);
      //   TweenMax.to(e.path[2],0.5,{'opacity':'.8'})
      // },
      // test2(e){
      //   console.log(e.path[0]);
      //   TweenMax.to(e.path[0],0.5,{'opacity':'1'})
      // }
    },
    mounted(){
      console.log(this.itmesDivision());
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
  }
  &__thumbnail{
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
    position: relative;
    @include middle;
    &:hover > img{
      transform: scale(3)
    }
    &:hover > h2{
      transform: translateY(-6rem);
    }
    img{
      height: 100%;
      transform: scale(2);
      transition: all .6s ease .2s;
    }
    h2{
      position: absolute;
      bottom: -4rem;
      left: 2rem;
      z-index: 2;
      transition: all .6s ease .2s;
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
// .work{
//   @include full_screen;
//   &__wrap{
//     @include custom_size;
//     margin: auto;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   &__thumbnail{
//     height: 100%;
//     width: 50vw;
//     position: relative;
//     &__wrap{
//       @include full_size;
//       overflow: hidden;
//     }
//     &__image{
//       @include full_size;
//       object-fit: cover;
//     }
//     &__shadow{
//       position: absolute;
//       z-index: -1;
//       top: 6rem;
//       left: 3rem;
//       opacity: 0.8;
//       filter: blur(3rem);
//       @include full_size;
//       object-fit: cover;
//     }
//   }
//   &__link{
//     margin-left: 6rem;
//     width: calc(100% - 6rem - 50vw);
//     overflow: hidden;
//     &__text{
//
//     }
//   }
// }

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
