import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/recipes',
            //alias: '/ingredients',
            name: 'recipes',
            component: () => import('./components/RecipeList')
        },
        {
            path: '/recipes/:id',
            name: 'detail',
            component: () => import('./components/DetailRecipe')
        },
        {
            path: '/recipes/name',
            name: 'searchName',
            component:() => import('./components/SearchName')
        }
        // {
        //     path: '/add',
        //     name: 'add-recipe',
        //     component: () => import('./components/AddCustomer')
        // }
    ]
})