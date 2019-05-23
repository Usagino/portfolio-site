<template lang="pug">
section
  cursorPointer
  sideMenu
  .first
    .first__wrap
      .first__wrap__logo
        myLogo
    h1 test
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import Lottie from '@/components/Lottie'
import myLogo from '@/components/myLogo'
// library
import * as animationData from "~/assets/json/my_logo.json";


export default {
  components: {
    cursorPointer,
    Lottie,
    sideMenu,
    myLogo
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
