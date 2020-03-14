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
            <div class="field center">
                <button class="btn blue">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data(){
        return{
            username: null,
            email: null,
            password: null,
        }
    },
    methods: {
        signup() {
            
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