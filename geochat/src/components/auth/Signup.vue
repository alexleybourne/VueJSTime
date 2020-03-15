<template>
    <div class="signup container">
        <form @submit.prevent="signup" class="card-panel">
            <h2 class="center blue-text">Signup</h2>
            <div class="field">
                <label for="username">Username:</label>
                <input type="text" name="username" v-model="username">
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <p v-if="feedback" class="red-text center">{{ feedback }}</p>
            <div class="field center">
                <button class="btn blue">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'Signup',
    data(){
        return{
            username: null,
            email: null,
            password: null,
            feedback: null,
            slug: null,
        }
    },
    methods: {
        signup() {
            if (this.username) {
                // Creating Slug
                let newSlug = this.username.toLowerCase()
                newSlug = newSlug.replace(/[$*_+~.()'"!\:;@&^%#+]/g, '')
                newSlug = newSlug.replace(/ /g, '-')
                this.slug = newSlug
                
                let ref = db.collection('user').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists){
                        this.feedback = "That Username is taken."
                    } else {
                        this.feedback = "That Username is available."
                    }
                })

                console.log(this.slug)

            } else {
                this.feedback = "You must enter a Username"
            }
        }
    }
}
</script>

<style>
    .signup {
        max-width: 500px;
        margin-top: 60px;
    }
    .signup h2 {
        font-size: 2.4em;
    }
    .signup .field {
        margin-bottom: 20px;
    }

    .field button {
        border-radius: 50px;
    }

</style>