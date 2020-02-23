<template>
<div>
<Loader v-if="!loaded"/>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{ smoothie.title }} Smoothie</h2>
        <form @submit.prevent="EditSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model='smoothie.title'>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an Ingredient:</label>
                <input class="blue-line" type="text" name="add-ingredient" @keydown.tab.prevent="AddIngredient" v-model="another">
                <button class="btn light-blue btn-small btn-add" @click.prevent="AddIngredient" >Add</button>
            </div>
            <div v-for="(ingredient, index) in smoothie.ingredients" :key="index" class="field">
                <label for="Ingredient">Ingredient:</label>
                <input type="text" name="Ingredient" v-model="smoothie.ingredients[index]">
                <i class="material-icons delete" @click="DeleteIngredient(ingredient)">delete</i>
            </div>
            <div class="field center-align">
                <p class="red-text" v-if="feedback">{{ feedback }}</p>
                <button class="btn light-blue">Update Smoothie</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import db from '../firebase/init'
import Loader from '../components/Loader'

export default {
    name:"EditSmoothie",
    data() {
        return {
            smoothie: null,
            another: null,
            feedback: null,
            loaded: null
        }
    },
    components: {
        Loader
    },
    created(){
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
        ref.get().then(snapshot => {
            this.loaded = true
            snapshot.forEach(doc => {
                this.smoothie = doc.data()
                this.smoothie.id = doc.id
            })
        })
    }, 
    methods: {
        EditSmoothie() {
            console.log(this.title, this.ingredients)
            if(this.smoothie.title) {
                // Creating Slug
                let newSlug = this.smoothie.title.toLowerCase()
                newSlug = newSlug.replace(/[$*_+~.()'"!\:;@&^%#+]/g, '')
                newSlug = newSlug.replace(/ /g, '-')
                this.smoothie.slug = newSlug

                let data = {
                    title: this.smoothie.title,
                    ingredients: this.smoothie.ingredients,
                    slug: this.smoothie.slug
                }

                console.log(data)

                db.collection('smoothies').doc(this.smoothie.id).update(data).then(() => {
                    this.$router.push({ name: 'Index'})
                }).catch(err => console.log(err))
                
                this.feedback = null
            } else {
                this.feedback = "You must enter a smoothie title"
            }
        },
        AddIngredient(){
            if(this.another){
                this.smoothie.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = "You must enter a value to add an ingredient"
            }
        },
        DeleteIngredient(ingredientd){
            this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
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

    .edit-smoothie {
        margin-top: 60px;
        padding: 20px;
        max-width: 600px;
    }

    .edit-smoothie .field {
        margin: 20px auto;
        position: relative;
    }

    .edit-smoothie h2 {
        font-size: 3em;
        margin: 10px auto 60px auto;
        text-align: center;
        color: #1976D3;
    }

    .red-text {
        color: rgb(255, 86, 86);
        font-weight: bold;
    }

    .edit-smoothie .delete {
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