import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/search',
            // alias: '/customers',
            name: 'search',
            component: () => import('./components/RecipeList')
        },
        // {
        //     path: '/search/:id',
        //     name: 'edit-customer',
        //     component: () => import('./components/EditCustomer')
        // },
        // {
        //     path: '/add',
        //     name: 'add-customer',
        //     component: () => import('./components/AddCustomer')
        // }
    ]
})