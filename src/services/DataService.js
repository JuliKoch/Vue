import http from '../http-common'

class DataService {
    getAll() {
        return http.get('/search')
    }

    get(id) {
        return http.get(`/search/${id}`)
    }

    // create(data) {
    //     return http.post('/customers', data)
    // }

    // update(id, data) {
    //     return http.put(`/customers/${id}`, data)
    // }

    // delete(id) {
    //     return http.delete(`/customers/${id}`)
    // }
}

export default new DataService()