<template>
    <div>
        <search :listOfSearch="ingredients">
        <template #item="{item: filteredIngredients}">
        <table class="table">
            <thead>
                <tr>
                <th scope="col"> Name</th>
                <!-- <th scope="col">Time</th>
                <th scope="col">Calorie</th>
                <th scope="col">Protein</th> -->
                <!-- <th scope="col">fat</th> -->
                </tr>
            </thead>
            <tbody v-for="(ingredient, index) in filteredIngredients" :key="index">
                <tr>
                    <td>{{ingredient.name}}</td>
                    <!-- <td>{{ingredient.time}}</td>
                    <td>{{ingredient.calorie}}</td>
                    <td>{{ingredient.protein}}</td> -->
                    <td><a :href="'/ingredients/' + ingredient.id_recipe" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
        </template>
        </search>
    </div>
</template>

<script>
import DataService from '../services/DataService'
import search from './search.vue';

export default {
  components: { search },
    name: 'ingredients',
    data() {
        return {
            ingredients: ingredients,
            searchValue: ''
        }
    },
    methods: {
        async retrieveIngredients() {
           this.ingredients = await DataService.getAll()
        },
    },
    mounted() {
        this.retrieveIngredients()
    }
}
</script>