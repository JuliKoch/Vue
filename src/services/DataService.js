import http from '../http-common'

class DataService {
    getAll() {
        return http.get('/ingredients')
    }

    get(id) {
        return http.get(`/ingredients/${id}`)
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