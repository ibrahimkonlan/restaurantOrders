"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
/**
 * Get price from price bracket.
 *
 * @param bracket - Target price bracket.
 * @returns - Maximum price range as a number.
 */
const getMaxPrice = (bracket) => {
    let price = 0;
    switch (bracket) {
        case orders_1.PriceBracket.Low:
            price = 10.0;
        case orders_1.PriceBracket.Medium:
            price = 20.0;
        case orders_1.PriceBracket.High:
            price = 30.0;
    }
    return price;
};
/// Add your getOrders() function below:
const getOrders = (price, orders) => {
    let filteredOrders = [];
    orders[0].filter((order) => order.price <= getMaxPrice(price));
    orders.forEach((restaurant) => {
        const res = restaurant.filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(res);
    });
    return filteredOrders;
};
/// Add your printOrders() function below:
/**
 * Print restaurants and orders based on provided data.
 *
 * @param restaurants - A collection of restaurants to look trough.
 * @param orders - Orders to pait with restaurants.
 */
const printOrders = (restaurants, orders) => {
    restaurants.forEach((restaurant, index) => {
        if (orders[index].length) {
            console.log(restaurant.name);
            orders[index].forEach((order) => {
                console.log(`- ${order.name}: ${order.price}`);
            });
        }
    });
};
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
// console.log(elligibleOrders)
printOrders(restaurants_1.restaurants, elligibleOrders);
