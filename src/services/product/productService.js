// product entitysi için api callari yönetilecek..
// fetch
// axios

import axios from "axios";
import { BASE_API_URL } from "../../enviroment";
import instance from "../../utils/axios/api";


// boilerplate 
export default class ProductService {
    getAll() {
        return instance.get("/products")
    }

    getById(id) {
        return instance.get("/products/" + id);
    }

    getProductsByCategoryId(id) {
        return instance.get("/products?categoryId=" + id);
    }

    add() { }
    update() { }
    delete() { }
}