import http from '../http-common'

class DataService {
    async getAll() {
        try {
            const ingredients = await http.get('/ingredients');
            return ingredients;
        } catch(err) {
            console.log(err);
        }
    }

    async get(id) {
        try {
            const ingredient = await http.get(`/ingredients/${id}`);
            return  ingredient
        } catch(err) {
            console.log(err)
        }
    }

    // create(data) {
    //     return http.post('/ingredients', data)
    // }

    // update(id, data) {
    //     return http.put(`/customers/${id}`, data)
    // }

    // delete(id) {
    //     return http.delete(`/customers/${id}`)
    // }
}

export default new DataService()