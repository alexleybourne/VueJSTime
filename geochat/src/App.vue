<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      <router-view/>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/layouts/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}

</script>

<style>

</style>
