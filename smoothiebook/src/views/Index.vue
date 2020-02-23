

<template>
<div>
  <Loader v-if="!loaded"/>
  <div class="index container">
    <div v-for="smoothie in smoothies" :key="smoothie.id" class="card">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)" >delete</i>
        <h2 class="blue-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ingredient}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating halfway-fab blue btn-position">
        <router-link :to="{ name: 'EditSmoothie', params: {smoothie_slug: smoothie.slug}}" >
          <i class="material-icons edit edit-icon">edit</i>
        </router-link>
      </span>
    </div>
  </div>
  </div>
</template>

<script>

import db from '@/firebase/init'
import Loader from '../components/Loader'

export default {
  name: 'Index',
  data() {
    return {
      smoothies: [],
      loaded: null
    }
  },
  components: {
    Loader
  },
  created(){
    //fetch data from firestore
    db.collection('smoothies').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.loaded = true
        let smoothie = doc.data()
        smoothie.id = doc.id
        this.smoothies.push(smoothie)
      })
    })
  },
  methods: {
    deleteSmoothie(id){
      db.collection('smoothies').doc(id).delete()
      .then(() => {
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
      })
    }
  },
}
</script>

<style>

.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}

.delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
  transition-duration: 0.4s;
}

.delete:hover {
  color: rgb(255, 93, 93);
  font-size: 1.6em;
}

.btn-position {
  bottom: 8px !important;
  right: 8px !important;
  transition-duration: 0.4s;
}

.edit-icon {
  position: relative;
  font-size: 1em;
  left: 8px;
  transition-duration: 0.4s;
}

.edit-icon:hover {
  font-size: 2.2em;
  transform: rotate(-50deg);
  left: 4px;
}

</style>
