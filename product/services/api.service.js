import http from 'utils/http-common'

class ApiService {
    setToken(token) {
        http.defaults.headers.Authorization = `Bearer ${token}`
    }
    query(resource, params) {
        return http.get(resource, params)
    }

    get(resource, slug = '') {
        return http.get(`${resource}/${slug}`)
    }

    post(resource, params) {
        return http.post(`${resource}`, params)
    }

    put(resource, params) {
        return http.put(`${resource}`, params)
    }

    patch(resource, params) {
        return http.patch(`${resource}`, params)
    }

    delete(resource) {
        return http.delete(resource)
    }
}

export default new ApiService()