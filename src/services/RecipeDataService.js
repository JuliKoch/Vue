import http from '../http-common'

class RecipeDataService {
    getAll() {
        return http.get('/recipes')
    }

    get(id) {
        return http.get(`/recipes/${id}`)
    }

    // create(data) {
    //     return http.post('/recipes', data)
    // }

    // update(id, data) {
    //     return http.put(`/customers/${id}`, data)
    // }

    // delete(id) {
    //     return http.delete(`/customers/${id}`)
    // }
}

export default new RecipeDataService()