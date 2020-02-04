<template lang="pug">
  .FpNav
    p.FpNav__count {{index}}
    hr.FpNav__line
    p.FpNav__index {{base}}
</template>

<script>
export default {
  props:{
    index:{
      type:Number,
      default:0
    },
    base:{
      type:Number,
      default:0
    }
  }
}
</script>

<style lang="scss" scoped>
  .FpNav{
    position: fixed;
    bottom: 0;
    top: 0;
    z-index: 2;
    left: 4rem;
    // right: 0;
    margin: auto;
    height: 6rem;
    width: 4rem;
    @include middle
    flex-direction: column;
    &__count{
      align-self: flex-start;
    }
    &__index{
      align-self: flex-end;
    }
    &__line{
      height: 1px;
      width: 100%;
      background: #2a2a2a;
      content: "";
      transform: rotate(-45deg);
      border:0.5px solid #2a2a2a;
    }
  }
  @include mq(sm){
    .FpNav{
      position: fixed;
      z-index: 2;
      left: 0;
      right: 0;
      top: auto;
      bottom: 1rem;
      margin: auto;
      height: 6rem;
      width: 4rem;
      @include middle
      flex-direction: column;
      &__line{
        height: 2px;
        width: 100%;
        background: #2a2a2a;
        content: "";
      }
    }
  }
</style>
