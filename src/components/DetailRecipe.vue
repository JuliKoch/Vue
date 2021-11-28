<template>
     <div> 

        <h1>{{products[0].recipe.name}}</h1>
        <h2>Список продуктов</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="(product, index) in products" :key="index">
                <tr>
                    <td>{{product.ingredient.name}}</td>
                    <td>{{product.quantity}}</td>
                    <td>{{product.unit.unit}}</td>
                </tr>
            </tbody>
        </table>
        <h2>Инструкция по приготовлению</h2>
         <p>{{products[0].recipe.description}}</p>
          <h2>Время приготовления</h2>
         <p>{{products[0].recipe.time}}</p>
    </div>
</template> 

<script>
import RecipeDataService from '../services/RecipeDataService'

export default {
    name: 'detail',
    data() {
        return {
            products: []
        }
    },
    methods: {
        retrieveProducts(id) {
           RecipeDataService.get(id)
                
                .then(response => {
                    console.log(response)
                    this.products = response.data
                })
                .catch(e => {
                    alert(e)
                })
        }
    },
    mounted() {
        console.log(this.$route.params)
        this.retrieveProducts(this.$route.params.id)
    }
}
</script>