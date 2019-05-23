<template lang="pug">
header
  .header
    .header__menu
      nuxt-link.header__menu--link(to="/") SHOP
      nuxt-link.header__menu--link(to="/about") ABOUT
    img.header--logo(src="image/logo.svg")
    .header__icons
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  height: $header_size;
  width: 100vw;
  .header{
    @include full_size
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    & > *{
      margin: auto;
    }
    &__menu{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 40%;
      &--link{
        @include subTitle_font;
        color: $text_color1;
        position: relative;
        mix-blend-mode: difference;
      }
      &--link:after{
        content:"";
        position: absolute;
        bottom: 0;
        left: 0; right: 0;
        height: 2rem;
        width: 100%;
        background: $material_color;
        z-index: -1;
        transform: scaleX(0);
        transform-origin: center left;
        transition: all 300ms ease .1s;
      }
      &--link:hover::after{
        transform: scaleX(1);
      }
    }
    &--logo{
      width: 6rem;
      height: auto;
    }
  }
  h1{
    @include subTitle_font
  }
}

</style>
