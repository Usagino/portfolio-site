<template lang="pug">
  section
    cursorPointer
    sideMenu
    .works
      .works__wrap
        .works__wrap__contents(v-for="(item,index) in items")

    vueFooter
</template>

<script>
// components
import cursorPointer from '@/components/cursorPointer'
import sideMenu from '@/components/sideMenu'
import vueFooter from '@/components/vueFooter'
// library
import works from '@/assets/json/works.json'
export default {
  components: {
    cursorPointer,
    sideMenu,
    vueFooter
  },
  data () {
    return {
      items: works
    }
  }
}
</script>

<style lang="scss" scoped>
.works{
  width: 100vw;
  margin-top: 4rem;
  &__wrap{
    width: 100%;
    padding: 0 10rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;

    &__contents{
      width: auto;
      height: 200px;
      content: "";
      background: red;
    }
  }
}
</style>
