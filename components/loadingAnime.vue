<template lang="pug">
  lottie(
    :options="lottieOptions"
    v-on:animCreated="handleAnimation")
</template>

<script>
import * as animationData from "~/assets/json/loading.json";

export default {
  data() {
    return {
      lottieOptions: {
        animationData: animationData,
        loop: true,
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

<style lang="scss" scoped>
.logo{
    height: 90px;
    width: auto;
}

</style>
