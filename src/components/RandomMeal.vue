<template>
  <div>
    <h1>Plat aléatoire</h1>
    <button @click="search">Nouveau plat</button>
    <div v-if="meal">
      <h2>{{ meal.strMeal }}</h2>
      <img :src="meal.strMealThumb" alt="Image du plat">
      <p>{{ meal.strCategory }} - {{ meal.strArea }}</p>
      <h3>Ingrédients</h3>
      <ul>
        <li v-for="ingredient in ingredients" :key="ingredient.name">{{ ingredient.name }} - {{ ingredient.measure }}</li>
      </ul>
      <p>{{ meal.strInstructions }}</p>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>
<script>
import mealdbService from "@/services/mealdb";

export default {
  name: "RandomMeal",
  data() {
    return {
      meal: null,
      ingredients: []
    }
  },
  mounted() {
    this.search()
    console.log(this.meal)
  },
  methods: {
    async search() {
      this.meal = await mealdbService.searchRandomMeal()
      this.ingredients = this.getIngredients(this.meal)
    },
    getIngredients(meal) {
      const ingredients = []
      for (let i = 1; i <= 15; i++) {
        const ingredientName = meal['strIngredient' + i]
        const ingredientMeasure = meal['strMeasure' + i]
        if (ingredientName) {
          ingredients.push({
            name: ingredientName,
            measure: ingredientMeasure
          })
        } else {
          break
        }
      }
      return ingredients
    }
  },
}
</script>

<style scoped>

</style>