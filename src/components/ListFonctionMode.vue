<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" >Home</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/name" class="nav-link active" aria-current="page">By Name</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/random" class="nav-link" aria-current="page">Random</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ingredient" class="nav-link" aria-current="page">By Ingredient</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/category" class="nav-link" aria-current="page">By Category</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zone" class="nav-link" aria-current="page">By Zone</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "ListFonctionMode"
}
</script>

<style scoped>

</style>