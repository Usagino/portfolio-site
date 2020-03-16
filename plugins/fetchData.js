import Vue from 'vue'

Vue.mixin({
  data(){
    return{
      worksList:[],
    }
  },
  async asyncData({app,params}) {
    try {
      const endpoint = 'https://frontart-tokyo.microcms.io/api/v1/works'
      const headerKey = { headers: {'X-API-KEY': '79b473a7-50ee-4d1a-af50-5298d6a778d8'} }
      const resWorksList = await app.$axios.$get(endpoint,headerKey )
      const resWorksContents = params.id != undefined? await app.$axios.$get(`${endpoint}/${params.id}`,headerKey):'is not'
      return{
        worksList:resWorksList,
        workContents:resWorksContents
      }
    } catch (e) {
      console.log(e);
    }
  },
})
