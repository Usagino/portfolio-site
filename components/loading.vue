<template lang="pug">
  <div class="loading-page" v-if="loading">
    <loadingAnime/>
  </div>
</template>

<script>
import loadingAnime from '~/components/loadingAnime.vue'

import {TweenMax} from 'gsap'
export default {
  components:{
    loadingAnime,
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
      TweenMax.set('.container',{opacity:0})
    },
    finish () {
      this.loading = false
      // TweenMax.set('.container',{display:'inline'})
      TweenMax.to('.container',1,{opacity:1,delay:0.5})
    },
    increase(num) {
      TweenMax.to('.loading-page--logo',3.0,{opacity:0})
    }
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    height: 200px !important;
    width: auto;
  }
}
</style>
