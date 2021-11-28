<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Название блюда</th>
                <th scope="col">Тип блюда</th>
                <th scope="col">Время приготовления</th>
                </tr>
            </thead>
            <tbody v-for="(recipe, index) in recipes" :key="index">
                <tr>
                    <td>{{recipe.name}}</td>
                    <td>{{recipe.typeDish}}</td>
                    <td>{{recipe.time}}</td>
                    <td><a :href="'/recipes/' + recipe.id" class="btn btn-primary">Детальнее</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import RecipeDataService from '../services/RecipeDataService'

export default {
    name: 'recipes',
    data() {
        return {
            recipes: []
        }
    },
    methods: {
        retrieveRecipes() {
           RecipeDataService.getAll()
                .then(response => {
                     console.log(response)
                    this.recipes = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        this.retrieveRecipes()
    }
}
</script>