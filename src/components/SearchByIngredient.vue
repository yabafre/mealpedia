<template>
  <div>
    <form @submit.prevent="search">
      <label for="searchTerm">Recherche par ingredients:</label>
      <select id="searchTerm" v-model="searchTerm">
        <option value="">Choisissez un ingredient</option>
        <option v-for="ingredient in ingredients" :key="ingredient" :value="ingredient.strIngredient">{{ ingredient.strIngredient }}</option>
      </select>
      <button>Rechercher</button>
    </form>
    <meal-list v-if="meals" :meals="meals"></meal-list>
    <div class="error" v-else>{{ errorMessage }}</div>
  </div>
</template>

<script>
import mealdbService from '@/services/mealdb'
import MealList from "@/components/MealList.vue";
export default {
  name: "SearchByIngredient",
  data() {
    return {
      ingredients: [],
      meals: null,
      searchTerm: '',
      errorMessage: null,
    }
  },
  async created() {
    this.ingredients = await mealdbService.getIngredients()
  },
  methods: {
    async search() {
      if (this.searchTerm === '') {
        this.errorMessage = 'Veuillez choisir un ingredient'
        this.meals = null
        return
      }
      this.meals = await mealdbService.getMealsByIngredient(this.searchTerm)
    }
  },
  components: {
    MealList
  }
}
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
</style>