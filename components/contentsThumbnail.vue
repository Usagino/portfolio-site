<template lang="pug">
  <section class="section">
  .contents
    .contents__wrap
      .contents__wrap__title-wrap
        h1.contents__wrap__title-wrap--title {{ title }}
      .contents__wrap__image-wrap
        nuxt-link(:to="`/contents/${index + 1}`")
          img.contents__wrap__image-wrap--image(
            :src="thumbnail_URL"
            v-inview:class="['image-fadein']"
            )
  </section>
</template>

<script>
import { TimelineLite,TweenMax,Expo } from 'gsap'
import inView from 'in-view'
import $ from 'jquery'

export default {
  props:{
    title: String,
    thumbnail_URL: String,
    index: Number,
  },

  mounted(){

  }

}
</script>

<style lang="scss" scoped>
section{
  height: 100vh;
  width: 100vw;
}
.contents{
  padding: 4rem;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrap{
    width: 60%;
    height: auto;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    &__title-wrap{
      position: relative;
      height: 100%;
      width: 100%;
      &--title{
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 10;
        transform: translateY(-50%);
      }
    }
    &__image-wrap{
      height: 100%;width: 100%;
      overflow: hidden;
      &--image{
        width: 100%;
        height: 400px;
        object-fit: cover;
        text-align: center;
        transform: translateY(110%);
      }
    }
  }
}
.image-fadein{
  animation: image-fadein 0.5s ease 0s forwards;
}
@keyframes image-fadein{
  from{
    transform: translateY(110%);
  }
  to{
    transform: translateY(0%)
  }
}
</style>
