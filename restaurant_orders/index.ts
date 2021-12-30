import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:

/**
 * Get price from price bracket.
 * 
 * @param bracket - Target price bracket.
 * @returns - Maximum price range as a number.
 */
const getMaxPrice=(bracket: PriceBracket): number =>{
  let price = 0;
	switch (bracket) {
		case PriceBracket.Low:
			price = 10.0;

		case PriceBracket.Medium:
			price = 20.0;

		case PriceBracket.High:
			price= 30.0;
			}
      return price;
}


/// Add your getOrders() function below:
const getOrders=(price: PriceBracket, orders:Order[][]): Order[][]=>{
	let filteredOrders:Order[][] = [];
	orders[0].filter((order: Order) => order.price <= getMaxPrice(price));

	orders.forEach((restaurant: Order[]) => {
		const res = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));
		filteredOrders.push(res);
	});

	return filteredOrders;
}

/// Add your printOrders() function below:
/**
 * Print restaurants and orders based on provided data.
 * 
 * @param restaurants - A collection of restaurants to look trough.
 * @param orders - Orders to pait with restaurants.
 */

const printOrders=(restaurants: Restaurant[], orders: Order[][])=>{
restaurants.forEach((restaurant: Restaurant, index: number) => {
		if (orders[index].length) {
			console.log(restaurant.name);
			orders[index].forEach((order: Order) => {
				console.log(`- ${order.name}: ${order.price}`);
			});
		}
	});
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(elligibleOrders)
printOrders(restaurants, elligibleOrders);
