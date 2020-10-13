import axios from 'axios';
import { ApiEndpoint } from '../Utils/Endpoint';

export default class ApiClient {
    async getService(serviceUrl) {
        return axios.get(ApiEndpoint() + `${serviceUrl}`).then(response => response.data);
    }

    async getByService(serviceUrl, param) {
        return axios.get(ApiEndpoint() + `${serviceUrl}/${param}`).then(response => response.data);
    }

    async postService(serviceUrl, payload) {
        axios.post(ApiEndpoint() + `${serviceUrl}` , payload);
    }

    async putService(serviceUrl, payload) {
        axios.put(ApiEndpoint() + `${serviceUrl}` , payload);
    }

    async deleteService(serviceUrl, payload) {
        axios.delete(ApiEndpoint() + `${serviceUrl}` , payload);
    }
}