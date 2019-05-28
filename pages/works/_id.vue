<template lang="pug">
  section
    cursorPointer
    .article
      .article__wrap
        h1.article__wrap--title {{ items[$route.params.id].title }}
    sideMenu
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

</style>
