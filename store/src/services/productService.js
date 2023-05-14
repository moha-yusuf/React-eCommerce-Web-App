import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/products";

export function getProducts() {
    return http.get(apiEndpoint);
}

export function getProduct(productId) {
    return http.get(`${apiEndpoint}/${productId}`);
}