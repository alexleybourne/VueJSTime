<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <Navbar/>
    <Blogs/>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Blogs from './components/Blogs'

export default {
  name: 'app',
  components: {
    Navbar,
    Blogs
  },
  data () {
    return {
      title: 'My first Vue App!',
      
    }
  },
  methods: {
    
  }
}
</script>


<style >
  * {
    font-family: Arial, Helvetica, sans-serif;
    color: #444;
    text-align: center;
  }
</style>