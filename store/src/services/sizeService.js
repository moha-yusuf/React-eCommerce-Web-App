import http from "./httpService";
import config from "../config.json";


const apiEndpoint = config.apiUrl + "/sizes";


export function getSize(sizeId) {
    return http.get(apiEndpoint + "/" + sizeId);
}