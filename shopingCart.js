//Exporting module
console.log('Exporting module');

// Blocking code
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

/*
const Cost = 10;
const cart = [];

    export const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${product},${quantity} added to cart`);
    }

const totalPrice = 250;
const totalQuantity = 10

export { totalPrice, totalQuantity as tq }
*/

// Default export

export default function (product, quantity) {
    console.log(`${product},${quantity} added to cart`);
}