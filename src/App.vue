<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/"  class="navbar-brand">Кулинарная книга</router-link>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link to="/ingredients" class="nav-link">Список ингредиентов</router-link>
            <router-link to="/recipes" class="nav-link">Список рецептов</router-link>
            <router-link to="/add" class="nav-link">Add New Customer</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import './index.css'
export default {
  name: 'App'
}
</script>
