<template>
  <div class="back-circle">
    <div class="back-circle__wrap">
      <span class="back-circle__wrap--contents"></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.back-circle{
  position: fixed;
  top: 0;left: 0;
  z-index: -3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrap{
    width: 200px;
    height: 200px;
    &--contents{

      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      &:after, &:before{
        position: absolute;
        top: 0;left: 0;
        bottom: 0; right: 0;
        margin: auto;
        width: 100%;
        height: 100%;
        content: "";
        display: block;
      }
      &:after{
        background: #abf4ff;
        border-radius: 80% 30% 50% 30%/50%;
        z-index: -2;
        animation: rotate 10s linear 0s infinite forwards;
      }
      &:before{
        background: white;
        border-radius:30%/50% 80% 30% 50%;
        z-index: -1;
        width: 70%;
        height: 70%;
        animation: rotate_reverse 10s linear 0s infinite forwards;
      }
    }
  }

}
@keyframes rotate{
  to{
    transform: rotate(0deg);
  }
  from{
    transform: rotate(360deg);
  }
}
@keyframes rotate_reverse{
  to{
    transform: rotate(360deg);
  }
  from{
    transform: rotate(0deg);
  }
}

</style>
