import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/ingredients',
            //alias: '/ingredients',
            name: 'ingredients',
            component: () => import('./components/IngredientList')
        },
        {
            path: '/recipes',
            //alias: '/ingredients',
            name: 'recipes',
            component: () => import('./components/RecipeList')
        }
        // {
        //     path: '/recipe/:id',
        //     name: 'edit-recipe',
        //     component: () => import('./components/EditCustomer')
        // },
        // {
        //     path: '/add',
        //     name: 'add-recipe',
        //     component: () => import('./components/AddCustomer')
        // }
    ]
})