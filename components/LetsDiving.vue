<template lang="pug">
.down-anime
  p ☟ Let`s diving !
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.down-anime{
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  margin: auto;
  display: inline-block;
  width: 300px;
  padding: 12px;
  text-align: center;
  opacity: 0;
  animation: show 1s ease 2s forwards;
  border-radius: 100px;
  cursor: pointer;

}
@keyframes show{
  from{
    opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
