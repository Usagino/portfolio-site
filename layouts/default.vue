<template>
  <div>
    <sideMenu />
    <nuxt/>
  </div>
</template>
<script>
import sideMenu from '@/components/sideMenu'

export default {
  components: {
    sideMenu,
  }
}

</script>
<style lang="scss">
@import '@/assets/style/_reset.scss';
body{
  margin: 0px;
}
</style>
