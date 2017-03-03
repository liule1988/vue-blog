<template>
  <div class="hello">
    <my-header></my-header>
    <router-view>
    </router-view>
  </div>
</template>

<script>
  import header from "./header.vue"
  import $ from "jquery"
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        input: '',
        num:2.4

      }
    },
    components: {
      'my-header': header
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
