// product entitysi için api callari yönetilecek..
// fetch
// axios

import axios from "axios";
import { BASE_API_URL } from "../../enviroment";


// boilerplate 
export default class ProductService {
    getAll() {
        return axios.get(BASE_API_URL + "/products");
    }

    getById(id) {
        return axios.get(BASE_API_URL + "/products/" + id);
    }

    add() { }
    update() { }
    delete() { }
}