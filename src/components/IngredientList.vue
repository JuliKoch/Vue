<template>
    <div>
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
            <tbody v-for="(ingredient, index) in ingredients" :key="index">
                <tr>
                    <td>{{ingredient.name}}</td>
                    <!-- <td>{{ingredient.time}}</td>
                    <td>{{ingredient.calorie}}</td>
                    <td>{{ingredient.protein}}</td> -->
                    <td><a :href="'/ingredients/' + ingredient.id" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DataService from '../services/DataService'

export default {
    name: 'ingredients',
    data() {
        return {
            ingredients: []
        }
    },
    methods: {
        retrieveIngredients() {
           DataService.getAll()
                .then(response => {
                    this.ingredients = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.retrieveIngredients()
    }
}
</script>