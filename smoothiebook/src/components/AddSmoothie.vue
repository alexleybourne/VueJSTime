<template>
<div>
<Loader v-if="!loaded"/>
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
                <button class="btn light-blue btn-small btn-add" @click.prevent="AddIngredient" >Add</button>
            </div>
            <div v-for="(ingredient, index) in ingredients" :key="index" class="field">
                <label for="Ingredient">Ingredient:</label>
                <input type="text" name="Ingredient" v-model="ingredients[index]">
                <i class="material-icons delete" @click="DeleteIngredient(ingredient)">delete</i>
            </div>
            <div class="field center-align">
                <p class="red-text" v-if="feedback">{{ feedback }}</p>
                <button class="btn light-blue">Add Smoothie</button>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
import db from '../firebase/init'
import Loader from '../components/Loader'

export default {
    name:"AddSmoothie",
    data() {
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null,
            loaded: null
        }
    },
    components: {
        Loader
    },
    mounted(){
        this.loaded = true
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
        },
        DeleteIngredient(ingredientd){
            this.ingredients = this.ingredients.filter(ingredient => {
                return ingredient != ingredientd
            })
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
        position: relative;
    }

    .add-smoothie h2 {
        font-size: 3em;
        margin: 10px auto 60px auto;

    }

    .red-text {
        color: rgb(255, 86, 86);
        font-weight: bold;
    }

    .add-smoothie .delete {
        cursor: pointer;
        right: 6px;
        bottom: 16px;
        font-size: 1.4em;
        position: absolute;
        color: rgb(181, 181, 181);
    }

    .btn-add {
        position: absolute;
        right: 4px;
    }
    
</style>