<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="blue-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name">
          <p class="feedback" v-if="feedback">{{ feedback }}</p>
          <button class="btn blue">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name }})
      } else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<style>

.welcome {
  max-width: 400px;
  margin-top: 30vh;
}

.welcome h2 {
  font-size: 2em;
}

.welcome button {
  margin: 30px auto;
}

.welcome input {
  text-align: center;
}

/* label focus color */
input[type=text]:focus + label {
    color: rgb(9, 164, 211) !important;
}

/* label underline focus color */
input[type=text]:focus {
    border-bottom: 1px solid rgb(9, 163, 210) !important;
    box-shadow: 0 1px 0 0 rgb(5, 158, 205)!important;
}

.card {
  border-radius: 20px !important;
}

.btn {
  border-radius: 20px !important;
}

.feedback {
  text-align: center;
  color: red;
  font-weight: bold;
}

</style>
