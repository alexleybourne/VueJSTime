<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <Navbar/>
    <AllFriends :friends = "friends"/>
    <OnlineFriends :friends = "friends"/>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'

export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      title: 'My first Vue App!',
      friends: [
                {name: 'Jeff', online: true},
                {name: 'Jim', online: false},
                {name: 'Jemma', online: false},
                {name: 'Jye', online: true},
                {name: 'Jeb', online: true}
            ]
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