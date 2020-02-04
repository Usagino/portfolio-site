<template lang="pug">
  section
    no-ssr
      .first
        h1 Works
        LetsDiving
      .work
        .work__item(
          v-for="article in articles"
          :key="article.id"
          )
          nuxt-link.work__thumbnail(:to="`/works/${article.id}`")
            .work__thumbnail__wrap
              img(:src="article.thumbnail.url")
              span.work__thumbnail__overay
              h2 {{ article.title }}
      VueFooter.section
</template>

<script>
  // library
  import inView from 'in-view'
  import { TweenMax } from 'gsap'
  import axios from 'axios'

  export default {
    data () {
      return {
        articles: null,
      }
    },
    methods:{
      fetchArticles() {
        axios
          .get("https://frontart-tokyo.microcms.io/api/v1/works", {
            headers: { "X-API-KEY": "79b473a7-50ee-4d1a-af50-5298d6a778d8" }
          })
          .then(res => {
            this.articles = res.data.contents;
          })
          .catch(err => {
            console.log(err);
          });
      },
      modifyDatetime(date) {
        const Ymd = date.split("T")[0];
        const His = date.split("T")[1].split(".")[0];
        return Ymd + " " + His;
      }
    },
    mounted() {
      this.fetchArticles();
    }
  }
</script>

<style lang="scss" scoped>


.first{
  @include full_screen;
  @include middle;
  h1{
    font-size: 20vh;
    display: inline-block;
  }
}
.work{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 100vh;
  column-gap: calc(40px + 8rem);
  margin: 0 calc(40px + 8rem);

  &__item{
    margin: calc(40px + 8rem) 0px;
    width: 100%;
    transition: all .6s ease .2s;
    position: relative;
    box-shadow: 4rem 4rem 4rem #a1a1a130;
    &:nth-child(3n - 1){
      transform: translateY(-48px);
    }
    &:nth-child(3n){
      transform: translateY(-96px);
    }

    &:hover{
      transform: scale(0.9);
      box-shadow: 3rem 3rem 4rem #a1a1a130;
    }
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
      &:hover > .work__thumbnail__overay{
        opacity: 1;
        transition: all .6s ease .2s;
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
        color: #ffffff;
      }
    }
    &__overay{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(rgba(0, 0, 0, 0), #00000060);

      opacity: 0;
      transition: all .6s ease .2s;
    }
  }
}


@include mq(sm){
  .first{
    h1{
      font-size: 10vh;
    }
  }
  .work{
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 30vh;
    column-gap: 30px;
    margin: 0 30px;

    &__item{
      margin: 30px 0px;
      width: 100%;
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
        &:hover > .work__thumbnail__overay{
          opacity: 1;
          transition: all .6s ease .2s;
        }
        img{
          height: 100%;
          width: 100%;
          object-fit: cover;

          transform: scale(1);
          transition: all .3s ease .2s;
        }
        h2{
          opacity: 1;
          position: absolute;
          bottom: 1rem;
          left: 2rem;
          z-index: 2;
          transition: all .3s ease-in .2s;
          color: #ffffff;
          font-size: 16px;
        }
      }
      &__overay{
        opacity: 0.5;
        background: linear-gradient(rgba(0, 0, 0, 0), #000000)
      }
    }
  }
}
</style>
