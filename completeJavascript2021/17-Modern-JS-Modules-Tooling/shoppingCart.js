// exporting module
console.log('exporting module');

export const shippingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
};

addToCart('samsung', 33);

const totalprice = 236;
const totalQuantity = 24;

export {totalprice, totalQuantity as tq};

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
};
