<template>
  <div>

        <p class="hoge">
            高さ違ってくるので、スマホでやってね。
        </p>

        <div v-observe-visibility="visibilityChanged">見えているので、下のは true になる</div>

        <div class="piyo">
            {{isVisible}}
        </div>

        <div style="height: 1000px;">
            v-observe-visibility が 見えていないので、 下のは false になる
        </div>

        <div class="piyo">
            {{isVisible}}
        </div>

    </div>

</template>

<script>

    export default {


        data () {
            return {
                isVisible: false,
            }
        },
        methods: {
            visibilityChanged (isVisible, entry) {
                this.isVisible = isVisible;
                console.log(entry);
            },
        },
    };
</script>
<style media="screen">
  .hoge{
    height: 100vh;
  }
  .piyo{
    position: fixed;
    top: 0;
  }
</style>
