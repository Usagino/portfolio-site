<template lang="pug">
section
  cursorPointer
  .first
    .first__wrap
      .first__wrap__logo
        lottie(
          :options="lottieOptions"
          v-on:animCreated="handleAnimation")
    h1 test
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import Lottie from '@/components/Lottie'
import * as animationData from "~/assets/json/my_logo.json";
// library
import products from '@/assets/json/product.json'


export default {
  components: {
    cursorPointer,
    Lottie
  },
  data() {
    return {
      lottieOptions: {
        animationData: animationData
      },
      animationSpeed: 1,
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  },
}
</script>

<style lang="scss">
section{
  .first{
    @include full_screen;
    &__wrap{
      @include full_size;
      @include middle;
      &__logo{
        width: 40vw;
      }
    }
  }
}
</style>
