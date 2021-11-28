<template>
    <div>
        <label for="search">Поиск: </label>
        <input id="search" type="text" v-model="name"/><br/>
        <label for="name">По названию</label>
        <input type="radio" id="name" name="searchType" value="name" v-model="typeSearch"/><br/>
        <label for="product">По ингредиентам</label>
        <input type="radio" id="product" name="searchType" value="product" v-model="typeSearch"/><br/>
        <button @click="getRecipesBySearch" type="button">Поиск</button>
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
            recipes: [],
            name: '',
            typeSearch: ''
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
        },
        getRecipesBySearch() {
            RecipeDataService.getName({name: this.name, typeSearch: this.typeSearch})
                .then(res => {
                    console.log(res);
                    this.recipes = res.data;
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