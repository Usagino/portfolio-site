<template lang="pug">
  <section class="container">
    vueHeader
    <div class="main">
      .main__wrap
        nav.main__wrap__nav
          ul.main__wrap__nav__list
            li wireless
            li earphone
            li headphone
            li prayer
        .main__wrap__products
          .product(v-for="(item,index) in items")
            nuxt-link(:to="`/product/${index}`")
              .product__thumbnail
                img.product__thumbnail__image(:src="`image/earphone/${item.productName}.png`")
              .product__text
                h1.product__text--title {{item.productName}}
                p.product__text--price ￥{{item.price}}
    </div>
  </section>
</template>

<script>
// components
import AppLogo from '~/components/AppLogo.vue'
import vueHeader from '~/components/vueHeader'
import topProduct from '~/components/topProduct'
import loadingAnime from '~/components/loadingAnime.vue'
// library
import products from '@/assets/json/product.json'


export default {
  components: {
    AppLogo,
    vueHeader,
    topProduct,
    loadingAnime
  },

  methods: {
    flexLastAdd: () =>{
      console.log("This is flexLastAdd function");
      let elProductBox = document.querySelector('.main__wrap__products');
      let elProduct = document.querySelector('.main__wrap__products > *:last-child ');
      let ProductBoxWidth = elProductBox.clientWidth
      let ProductWidth = elProduct.clientWidth
      let ProductPieces = Math.floor(ProductBoxWidth / ProductWidth)
      let productLength = document.querySelectorAll('.main__wrap__products > *').length
      let surPlus = ProductPieces - (productLength % ProductPieces)
      for (var i = 0; i < surPlus; i++) {
        let elEmpty = document.createElement('span');
        elProductBox.append(elEmpty)
      }
    }
  },
  mounted(){
    const data = require('~/assets/json/product.json')
    console.log(data);

    this.flexLastAdd();
    window.onresize = () => {
      this.flexLastAdd();
    };
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
  },
  data () {
    return {
      msg: 'hello world',
      items:products
    }
  },
}
</script>

<style lang="scss">
html{
  font-size: 4px;
}
body{
  @include Text_font;
}
.container{
  opacity: 0;
}
$gap:3rem;

.main{
  margin-top: $header_size;
  &__wrap{
    width: 72vw;
    margin: auto;
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: calc(1.61803 * #{$gap});
    &__nav{
      &__list{
        position: fixed;

        li{
          @include subTitle_font;
          padding-bottom: 3rem;
        }
      }
    }
    &__products{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;

      span{
        content: "";
        width: 250px;
      }
    }
  }
}

.product{
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 3rem;

  &__thumbnail{
    background: #F4F4F4;
    @include middle;
    width: 100%;
    height: 250px;
    &__image{
      width: 200px;
      height: auto;
    }
  }
  &__text{
    margin-top: 1.5rem;
    &--title{
      @include Text_font;
      color: $text_color1;
    }
    &--price{
      @include Text_font;
      color: $text_color1;
      text-align: right;
      opacity: 0.7;
    }
  }
}

</style>
