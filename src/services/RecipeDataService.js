import http from '../http-common'

class RecipeDataService {
    async getAll() {
        try {
            const ingredients = await http.get('/recipes');
            return ingredients;
        } catch(err) {
            console.log(err);
        }
    }

    async get(id) {
        try {
            const ingredient = await http.get(`/recipes/${id}`);
            return  ingredient
        } catch(err) {
            console.log(err)
        }
    }

    async create(data) {
        try {
            const createdRecipe = await http.post('/recipes', data);
            return createdRecipe
        } catch(err) {
            console.log(err)
        } 
    }

    // update(id, data) {
    //     return http.put(`/customers/${id}`, data)
    // }

    // delete(id) {
    //     return http.delete(`/customers/${id}`)
    // }
}

export default new RecipeDataService()