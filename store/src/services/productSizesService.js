import http from "./httpService";
import config from "../config.json";


const apiEndpoint = config.apiUrl + "/productSizes?product_id=";


export function getProductSizes(productId) {
    return http.get(apiEndpoint + productId);
}