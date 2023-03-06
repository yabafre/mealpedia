<template>
  <div>
    <h2>Rechercher par catégorie</h2>
    <form @submit.prevent="searchByCategory">
      <label for="selectedCategory">Choisissez une catégorie:</label>
      <select id="selectedCategory" v-model="selectedCategory">
        <option value="">Choisissez une catégorie</option>
        <option v-for="category in categories" :key="category" :value="category.strCategory">{{ category.strCategory }}</option>
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
  name: "SearchByCategory",
  data() {
    return {
      categories: [],
      selectedCategory: null,
      meals: [],
      errorMessage: null,
    }
  },
  async created() {
    this.categories = await mealdbService.getCategories()
  },
  methods: {
    async searchByCategory() {
      if (this.selectedCategory === '') {
        this.errorMessage = 'Veuillez choisir une catégorie'
        this.meals = null
        return
      }
      this.meals = await mealdbService.getMealsByCategory(this.selectedCategory)
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