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
html{
  background: #f6f6f6;
}
body{
  margin: 0px;
}
</style>
