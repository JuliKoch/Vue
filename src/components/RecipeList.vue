<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col"> Name</th>
                <th scope="col">Time</th>
                <th scope="col">Calorie</th>
                <th scope="col">Protein</th>
                <!-- <th scope="col">fat</th> -->
                </tr>
            </thead>
            <tbody v-for="(recipe, index) in recipes" :key="index">
                <tr>
                    <td>{{recipe.name}}</td>
                    <td>{{recipe.time}}</td>
                    <td>{{recipe.calorie}}</td>
                    <td>{{recipe.protein}}</td>
                    <td><a :href="'/seacrh/' + recipe.id" class="btn btn-primary">Edit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomerDataService from '../services/DataService'

export default {
    name: 'recipes',
    data() {
        return {
            recipes: []
        }
    },
    methods: {
        retrieveCustomers() {
           DataService.getAll()
                .then(response => {
                    this.recipes = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.retrieveCustomers()
    }
}
</script>