<template lang="pug">
  section
    sideMenu
    .container
      .container__not-found(v-if="error.statusCode === 404")
        h1.container__not-found--text 404
      <h1 v-else>エラーが発生しました</h1>
      <h2><nuxt-link to="/">Back to Home</nuxt-link></h2>
    AppFooter
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // エラーページ用のカスタムレイアウトを指定できます,
}
</script>
<style lang="scss" scoped>
  .container{
    @include full_screen;
    @include middle;
    flex-direction: column;
    &__not-found{
      &--text{
        font-size: 20vw;
      }

    }
  }
</style>
