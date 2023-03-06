<template>
  <div>
    <button @click="$router.go(-1)">Retour</button>
    <h2>{{ meal.strMeal }}</h2>
    <img :src="meal.strMealThumb" alt="">
    <p>{{ meal.strCategory }} - {{ meal.strArea }}</p>
    <h3>Ingrédients</h3>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient.name">{{ ingredient.name }} - {{ ingredient.measure }}</li>
    </ul>
      <p>{{ meal.strInstructions }}</p>
  </div>
</template>
<script>
import mealdbService from '@/services/mealdb'
export default {

  name: "MealDetails",
  data() {
    return {
      meal: null,
      ingredients: []
    }
  },
  async created() {
    const mealId = this.$route.params.id
    this.meal = await mealdbService.getMealById(mealId)
    this.ingredients = this.getIngredients(this.meal)
  },
  methods: {
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
  }
}
</script>

<style scoped>

</style>