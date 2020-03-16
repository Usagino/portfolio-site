<template lang="pug">
  section
      .first(@mouseover="linkMouseover('LETS SCROLL')" @mouseleave="linkMouseLeave")
        h1 Works
      .work
        .work__item(
          v-for="article in this.worksList.contents"
          :key="article.id"
          )
          .work__item__wrap(@mouseover="linkMouseover(article.title)" @mouseleave="linkMouseLeave")
            nuxt-link.work__thumbnail(:to="`/works/${article.id}`" :style="{backgroundImage:'url('+article.thumbnail.url+')'}")

      mouseStoker(ref="ms")
      AppFooter.section
</template>

<script>
  // library
  import inView from 'in-view'
  import { TweenMax } from 'gsap'

  export default {
  }
</script>

<style lang="scss" scoped>
.first{
  @include full_screen;
  @include middle;
  @include mq(sm){
    height: 70vh;
  }
  h1{
    font-size: 20vh;
    display: inline-block;
    @include mq(sm){
      font-size: 40px;
    }
  }
}
.work{
  &__item{
    @include full_screen;
    height: 70vh;
    @include middle;
    @include mq(sm){
      height: fit-content;
      width: 340px;
      overflow: hidden;
      margin: auto;
      margin-bottom: 40px;
    }
  }
  &__thumbnail{
    box-shadow: 20px 20px 20px rgb(166, 167, 167);
    height: 400px;
    width: 600px;
    display: block;
  }
}

</style>
