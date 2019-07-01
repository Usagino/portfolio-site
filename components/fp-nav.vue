<template lang="pug">
.fp-nav
  p.fp-nav__count
  .fp-nav__line
  p.fp-nav__index
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.fp-nav{
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
    height: 2px;
    width: 100%;
    background: #2a2a2a;
    content: "";
    transform: rotate(-45deg);
  }
}
@include mq(sm){
  .fp-nav{
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
