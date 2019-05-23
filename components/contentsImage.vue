<template lang="pug">
  .contents-image
    .contents-image__wrap
      .contents-image__wrap__image-wrap
        nuxt-link(:to="`/contents/${index + 1}`")
          img.contents-image__wrap__image-wrap--image(
            :src="thumbnail_URL"
            v-inview:class="['image-fadein']"
            )
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
.contents-image{
  padding: 4rem;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1px solid #b4b4b4;
  &__wrap{
    width: 60%;
    height: auto;
    overflow: hidden;
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
        height: auto;
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
