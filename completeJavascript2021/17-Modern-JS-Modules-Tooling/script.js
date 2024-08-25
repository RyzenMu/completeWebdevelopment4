// importing module

import { addToCart, shippingCost , cart, tq, totalprice as price} from "./shoppingCart.js";
import * as ShoppingCart from "./shoppingCart.js";
import add from './shoppingCart.js';

console.log('importing module');
console.log(shippingCost); //private variable
console.log(cart);
console.log(tq, price);

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalprice);
add('museli', 6);
console.log(cart);

// module pattern
const ShoppingCart2 = (function(){
    const cart =[];
    const shippingCost = 10;
    const totalprice = 237;
    const totalQuantity = 23;
    const addToCart = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to the cart`);
    };
    const orderStock = function(product, quantity) {
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to the cart`);
    };
    return {
        addToCart,
        cart,
        totalQuantity,
        totalprice,
    }
})();

ShoppingCart2.addToCart('pizza', 5);
console.log(ShoppingCart2);

// common js modules
//Export
// export.add2cart = function(product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to the cart`);
// }
// // import
// const { add2cart } = require('./shoppingCart.js');

import  cloneDeep  from "lodash-es";

const state = {
    cart : [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 4},
    ],
    user: {loggedIn: true},
}
const stateClone = Object.assign({}, state); // normal js
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateDeepClone, stateClone);

// parcel
// hot module replacement
if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey'
    constructor(name){
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}

const jonas = new Person('jonas');
console.log('jonas' ?? null);// nullish collaising operator


console.log(cart.find(el => el.quantity >= 2));

// transpiling and poly filling library
import 'core-js/stable';
import 'regenerator-runtime/runtime.js';