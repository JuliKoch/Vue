<template>
    <div>
        <search :listOfSearch="recipes"> 
        <template #item="{item: filteredRecipes}"> 
        <table class="table">
            <thead>
                <tr>
                <th scope="col"> Name</th>
                <th scope="col">Time</th>
                <th scope="col">Calorie</th>
                <th scope="col">Protein</th> -->
                <!-- <th scope="col">fat</th> -->
                </tr>
            </thead>
            <tbody v-for="(recipe, index) in filteredRecipes" :key="index">
                <tr>
                    <td>{{recipe.name}}</td>
                    <td>{{recipe.time}}</td>
                    <td>{{recipe.calorie}}</td>
                    <td>{{recipe.protein}}</td>
                    <td><a :href="'/recipes/' + recipe.id_recipe" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
        </template>
        </search>
    </div>
</template>

<script>
import RecipeDataService from '../services/RecipeDataService'
import search from './search.vue'
import ingredients from '../mocks/Ingredient';

export default {
  components: { search },
    name: 'recipes',
    data() {
        return {
            recipes: ingredients
        }
    },
    methods: {
        retrieveRecipes() {
           RecipeDataService.getAll()
                .then(response => {
                    this.recipes = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        // this.retrieveRecipes()
    }
}
</script>