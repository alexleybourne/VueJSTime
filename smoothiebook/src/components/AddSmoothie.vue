<template>
    <div class="add-smoothie container">
        <h2 class="center-align blue-text">Add New Smoothie Recipe</h2>
        <form @submit.prevent="AddSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model='title'>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient:</label>
                <input class="blue-line" type="text" name="add-ingredient" @keydown.tab.prevent="AddIngredient" v-model="another">
            </div>
            <div v-for="(ingredient, index) in ingredients" :key="index">
                <label for="Ingredient">Ingredient:</label>
                <input type="text" name="Ingredient" v-model="ingredients[index]">
            </div>
            <div class="field center-align">
                <p class="red-text" v-if="feedback">{{ feedback }}</p>
                <button class="btn light-blue">Add Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '../firebase/init'
export default {
    name:"AddSmoothie",
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
        }
    },
    methods: {
        AddSmoothie() {
            console.log(this.title, this.ingredients)
            if(this.title) {
                // Creating Slug
                let newSlug = this.title.toLowerCase()
                newSlug = newSlug.replace(/[$*_+~.()'"!\:;@&^%#+]/g, '')
                newSlug = newSlug.replace(/ /g, '-')
                this.slug = newSlug

                let data = {
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                }

                console.log(data)

                db.collection('smoothies').add(data).then(() => {
                    this.$router.push({ name: 'Index'})
                }).catch(err => console.log(err))
                
                this.feedback = null
            } else {
                this.feedback = "You must enter a smoothie title"
            }
        },
        AddIngredient(){
            if(this.another){
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = "You must enter a value to add an ingredient"
            }
        }
    }
}
</script>

<style>

    /* label focus color */
    .field input[type=text]:focus + label {
        color: rgb(9, 164, 211) !important;
    }

    /* label underline focus color */
    .field input[type=text]:focus {
        border-bottom: 1px solid rgb(9, 163, 210) !important;
        box-shadow: 0 1px 0 0 rgb(5, 158, 205)!important;
    }

    .add-smoothie {
        margin-top: 60px;
        padding: 20px;
        max-width: 600px;
    }

    .add-smoothie .field {
        margin: 20px auto;
    }

    .add-smoothie h2 {
        font-size: 3em;
        margin: 10px auto 60px auto;

    }

    .red-text {
        color: rgb(255, 86, 86);
        font-weight: bold;
    }
    
</style>