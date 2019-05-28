<template lang="pug">
  section
    cursorPointer
    h1 {{_id}}
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
