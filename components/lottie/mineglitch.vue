<template lang="pug">
  lottie(
    :options="lottieOptions"
    v-on:animCreated="handleAnimation")
</template>

<script>
import Lottie from '@/components/lottie/Lottie'
import * as animationData from "~/assets/json/mineglitch.json";
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
