<script setup>
import HomeProp from './components/HomeProp.vue'
import ListFonctionMode from "@/components/ListFonctionMode.vue";
import GifMeal from "@/components/icons/GifMeal.vue";
</script>

<template>
  <header>
    <list-fonction-mode />
    <div class="wrapper">
      <HomeProp :msg="msg" />
    </div>
  </header>
  <main>
    <section class="container">
    <GifMeal v-if="$route.path === '/'"></GifMeal>
      <router-view />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to my Vue.js App",
    }
  }
}
</script>

<style scoped>

</style>
