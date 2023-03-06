<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green" v-if="$route.path === '/'">Home</h1>
    <h1 class="green" v-else>{{ $route.name }}</h1>
    <p>{{ msg }} </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

p {
  font-size: 1.2rem;
}

.greetings h1,
.greetings p {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings p {
    text-align: left;
  }
}
</style>
