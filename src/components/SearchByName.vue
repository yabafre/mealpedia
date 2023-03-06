<template>
  <div>
    <form @submit.prevent="search">
      <label for="searchTerm">Recherchez un plat:</label>
      <input type="text" id="searchTerm" v-model="searchTerm">
      <button>Rechercher</button>
    </form>
    <meal-list v-if="meals" :meals="meals"></meal-list>
    <div class="error" v-else>{{ errorMessage }}</div>
  </div>
</template>

<script>
import mealdbService from '@/services/mealdb'
import MealList from '@/components/MealList.vue'

export default {
  name: "SearchPage",
  data() {
    return {
      searchTerm: '',
      meals: null,
      errorMessage: null
    }
  },

  methods: {
    async search() {
      if (this.searchTerm === '') {
        this.errorMessage = 'Veuillez saisir un name'
        this.meals = null
        return
      }
      this.meals = await mealdbService.searchMeals(this.searchTerm)
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