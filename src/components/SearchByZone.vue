<template>
  <div>
    <h2>Rechercher par zone</h2>
    <select class="form-control" v-model="selectedZone">
      <option value="">Choisissez une zone</option>
      <option v-for="zone in zones" :key="zone.strArea" :value="zone.strArea">{{ zone.strArea }}</option>
    </select>
    <button @click="searchByZone">Rechercher</button>
    <meal-list v-if="meals" :meals="meals"></meal-list>
    <div class="error" v-else>{{ errorMessage }}</div>
  </div>
</template>

<script>
import mealdbService from '@/services/mealdb'
import MealList from "@/components/MealList.vue";
export default {
  name: "SearchByZone",
  data() {
    return {
      zones: [],
      selectedZone: null,
      meals: [],
      errorMessage: null,
    }
  },
  async created() {
    this.zones = await mealdbService.getZones()
  },
  methods: {
    async searchByZone() {
      if (this.selectedZone === '') {
        this.errorMessage = 'Veuillez choisir une zone'
        this.meals = null
        return
      }
      this.meals = await mealdbService.getMealsByZone(this.selectedZone)
    }
  },
  components: {
    MealList
  }
}
</script>

<style scoped>

</style>