<template>
    <div>
        <h1>HELLO</h1>
    </div>
</template>

<script>
import RecipeDataService from '../services/RecipeDataService'

export default {
    name: 'searchName',
    data() {
        return {
            recipes: []
        }
    },
    methods: {
        retrieveRecipes(name) {
           RecipeDataService.getName(name)
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
        this.retrieveRecipes(this.$route.query.name)
    }
}
</script>