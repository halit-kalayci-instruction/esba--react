import axios from "axios";
import { BASE_API_URL } from "../../enviroment";
import instance from "../../utils/axios/api";

export default class CategoryService {
    getAll() {
        return instance.get("/categories");
    }
    getById(id) {
        return instance.get("/categories/" + id);
    }
    add(category) {
        return instance.post("/categories", category);
    }
    update(category) {
        return instance.put("/categories/" + category.id, category);
    }
}