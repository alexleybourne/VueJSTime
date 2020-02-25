<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <p v-if="feedback" class="feedback">{{ feedback }}</p>
            <label for="new-message"> New Message </label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'NewMessage',
    props: ['name'],
    data(){
        return{
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage(){
            if(this.newMessage){
                db.collection('messages').add({
                    name: this.name ,
                    content: this.newMessage ,
                    timestamp: Date.now()
                }).catch( err => {
                    console.log(err)
                })
            } else {
                this.feedback = "you must enter a message to send one."
                console.log(process.env.VUE_APP_FIREBASEKEYTWO)
            }
        }
    }
}
</script>

<style>

</style>