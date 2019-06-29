<template lang="pug">
  section
    no-ssr
      full-page(ref="fullpage" :options="options" id="fullpage")
        .section
          h1 qqq
        .section
          h1 qqq
        .section
          h1 qqq
</template>

<script>
  export default {
    data() {
      return {
        options: {
          licenseKey: 'C369A22F-73704243-8980D98A-0B1A5553',
        }
      }
    }
  }
</script>
<style lang="scss">

</style>
