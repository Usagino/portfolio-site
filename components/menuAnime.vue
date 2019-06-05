<template lang="pug">
  lottie(
    :options="lottieOptions"
    v-on:animCreated="handleAnimation")
</template>

<script>
import Lottie from '@/components/Lottie'
import * as animationData from "~/assets/json/menuAnime.json";
export default {
  components:{
    Lottie
  },
  data() {
    return {
      lottieOptions: {
        animationData: animationData,
        loop:true
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

<style lang="css" scoped>
</style>
