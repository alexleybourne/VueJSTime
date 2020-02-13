<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <Navbar/>
  </div>
</template>

<script>

import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      title: 'My first Vue App!'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #444;
    text-align: center;
  }
</style>