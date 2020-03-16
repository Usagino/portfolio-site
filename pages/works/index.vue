<template lang="pug">
  section
    mouseStoker(ref="ms")
    .first
      h1 WORKS
    swiper.work(:options="swiperOption")
      swiper-slide.work__item(
        v-for="article in this.worksList.contents"
        :key="article.id"
        )
        .work__item__cover
        .work__item__wrap(@mouseover="linkMouseover(article.title)" @mouseleave="linkMouseLeave")
          nuxt-link.work__thumbnail(:to="`/works/${article.id}`" :style="{backgroundImage:'url('+article.thumbnail.url+')'}")
</template>

<script>
  // library
  import { TweenMax } from 'gsap'

  export default {
    mounted(){
      console.log(this.deviceType);
    },
    data() {
      return {
        deviceType:this.$ua.deviceType(),
        swiperOption: {
          loop: true,
          direction: 'vertical',
          speed: 500,
          mousewheel: true,
          watchSlidesVisibility: true,
          on:{
            transitionEnd:()=>{
              TweenMax.to('.swiper-slide-visible > .work__item__cover',0.3,{scaleX:0})
              TweenMax.to('.swiper-slide-visible .work__thumbnail',0.3,{delay:0.1,boxShadow:'rgba(184, 184, 184, 0.6) 8px 8px 40px 4px'})
            }
          }
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
.first{
  position: fixed;
  top: 0;bottom: 0;
  left: 4rem;
  margin: auto;
  height: 100vh;
  width: fit-content;
  @include middle;
  @include mq(sm){
    bottom: auto;
    top: 4rem;
    height: fit-content
  }
  h1{
    font-size: 24px;
    writing-mode: vertical-lr;
    display: inline-block;
    transform: rotate(180deg);
    margin: 0px;
    @include mq(sm){
      font-size: 40px;
      writing-mode: horizontal-tb;
      transform: rotate(0deg);
    }
  }
}
.work{
  @include full_screen;
  &__item{

    @include full_screen;
    position: relative;
    @include middle;
    @include mq(sm){
      margin: auto;
    }
    &__cover{
      position: absolute;
      height: 400px;
      width: 600px;
      @include mq(sm){
        height: 200px;
        width: 300px;
      }
      background: white;
      content: "";
      transform-origin: left;
    }
  }
  &__thumbnail{
    height: 400px;
    width: 600px;
    @include mq(sm){
      height: 200px;
      width: 300px;
    }
    display: block;
  }

}

.swiper-wrapper{transition-timing-function:cubic-bezier(0.000, 0.000, 0.580, 1.000) !important; }
</style>
