<template lang="pug">
  .image
    lottie.image__anime(
      :options="lottieOptions"
      v-on:animCreated="handleAnimation")
    p scroll
</template>

<script>
import Lottie from '@/components/lottie/Lottie'
import * as animationData from "~/assets/json/mouseScroll.json";
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

<style lang="scss" scoped>
.image{
  margin: auto;
  width: 4rem;
  position: absolute;
  bottom: 2rem;
  left: 0;right: 0;
  opacity: 0;
  animation: show 1s ease forwards 5s;
}
@keyframes show{
  0%{
    opacity: 0;
  }
  5%{
    opacity: 1;
  }
  10%{
    opacity: 0;
  }
  15%{
    opacity: 1;
  }
  20%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
