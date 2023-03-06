<template>
  <div>
    <h2>{{ meals.length }} {{ meals.length === 1 ? 'résultat' : 'résultats' }}</h2>
    <ul>
      <li v-for="meal in meals" :key="meal.idMeal">
        <router-link :to="{ name: 'meal', params: { id: meal.idMeal }}">
          <div>
            <img :src="meal.strMealThumb" alt="">
            <h3>{{ meal.strMeal }}</h3>
            <p>{{ meal.strCategory }} - {{ meal.strArea }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    meals: {
      type: Array,
      required: true
    }
  },
  name: "MealList"
}
</script>

<style scoped>

</style>