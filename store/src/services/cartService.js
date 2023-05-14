import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/carts/";

export async function getCart(userId) {
    return await http.get(apiEndpoint + `?user_id=${userId}`);
}

export async function addProductToCart(cart, item) {
    const updatedCart = { ...cart };
    updatedCart.items.push(item);
    updatedCart.total_cost = calculateTotalCost(updatedCart.items);
    await http.put(apiEndpoint + cart.id, updatedCart);
}

export async function updateProductInCart(cart, item) {
    const newCart = { ...cart };
    const index = newCart.items.findIndex((i) => i.product_id === item.product_id);

    let existingQuantity = Number(newCart.items[index].quantity);
    let additonalQuantity = Number(item.quantity);
    newCart.items[index].quantity = existingQuantity + additonalQuantity;
    newCart.total_cost = calculateTotalCost(newCart.items);
    await http.put(apiEndpoint + cart.id, newCart);
}

export async function deleteProductFromCart(updatedCart) {
    updatedCart.total_cost = calculateTotalCost(updatedCart.items);
    await http.put(apiEndpoint + updatedCart.id, updatedCart);
}  

export function calculateTotalCost(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let quantity = Number(item.quantity);
        let price = Number(item.price);
        total += quantity * price;
    }
    return total;
}