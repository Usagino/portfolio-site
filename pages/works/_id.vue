<template lang="pug">
  no-ssr
    .work
      .work__wrap
        .work__thumbnail
          img.work__thumbnail__image(:src="post_thumbnail")
        h1.work__title {{post_title}}
        .work__body(v-html="post_body")
      vueFooter.section
</template>

<script>
  import vueFooter from '@/components/vueFooter'

  import axios from "axios";
  export default {
    components: {
      vueFooter,
    },
    data () {
      return {
        id: this.$route.params.id,
        post: null,
        post_title:null,
        post_body:null,
        post_thumbnail:null
      }
    },
    methods:{
      fetchArticles_single_post() {
        axios.get(`https://frontart-tokyo.microcms.io/api/v1/works/${this.$route.params.id}`, {
            headers: { "X-API-KEY": "79b473a7-50ee-4d1a-af50-5298d6a778d8" }
          })
          .then(res => {
            console.log(res.data);
            this.post = res.data;
            this.post_title = res.data.title
            this.post_body = res.data.body
            this.post_thumbnail = res.data.thumbnail.url
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      this.fetchArticles_single_post();
    },

  }
</script>

<style lang="scss">
.work{
  &__wrap{
    margin:0 calc(40px + 8rem);
  }
  &__thumbnail{
    @include full_screen;
    width: 100%;
    @include middle;
    &__image{
      height: 70%;
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
      font-size: 18px;
      line-height: 36px;
      margin: 36px 0;
      img{
        display: block;
        border: 1px solid #f2f2f2;
        height: auto;
        max-width: 50%;

        margin:36px auto;
        text-align: center;
        border-radius: 16px;
      }
    }
  }
}
@include mq(sm){
  .work{
    &__wrap{
      margin:0 30px;
    }
    &__thumbnail{
      @include full_screen;
      width: 100%;
      @include middle;
      &__image{
        height: 70%;
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
