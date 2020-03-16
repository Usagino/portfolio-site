import vue from 'vue'

vue.mixin({
  methods:{
    linkMouseover(text){
      this.$refs.ms.linkMouseover(text)
    },
    linkMouseLeave(){
      this.$refs.ms.linkMouseLeave()
    }
  }
})
