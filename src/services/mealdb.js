export default {
    async searchMeals(query) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        return data.meals || []
    },
    async searchRandomMeal() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await response.json()
        return data.meals[0] || []
    },
    async getMealById(id) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        return data.meals ? data.meals[0] : null
    },
    async getCategories() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
        const data = await response.json()
        return data.meals || []
    },
    async getMealsByCategory(category) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const data = await response.json()
        return data.meals || []
    },
    async getIngredients() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const data = await response.json()
        return data.meals || []
    },
    async getMealsByIngredient(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        const data = await response.json()
        return data.meals || []
    },
    async getZones() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        const data = await response.json()
        return data.meals || []
    },
    async getMealsByZone(zone) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${zone}`)
        const data = await response.json()
        return data.meals || []
    }
}
