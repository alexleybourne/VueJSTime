

<template>
  <div class="index container">
    <div v-for="smoothie in smoothies" :key="smoothie.id" class="card">
      <div class="card-content">
        <h2 class="blue-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ingredient}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      smoothies: [
        {title: 'Hangover Helper', slug: 'hangover-helper', ingredients: ['bananas', 'coffee', 'redbull', 'kiwifruit', 'honey', 'secret ingredient X'], id: 1},
        {title: 'Super Sipper', slug: 'super-sipper', ingredients: ['mango', 'banana', 'milk', 'honey', 'yogurt', 'strawberries'], id: 2}
      ]
    }
  }
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

</style>
