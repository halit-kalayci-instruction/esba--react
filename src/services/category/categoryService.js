import axios from "axios";
import { BASE_API_URL } from "../../enviroment";

export default class CategoryService {
    getAll() {
        return axios.get(BASE_API_URL + "/categories");
    }
    getById() { }
    add() { }
}