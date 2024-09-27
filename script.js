

//Importing module
// import {addToCart , totalPrice as price ,tq} from './shopingCart.js'
// console.log('Importing module');
// addToCart("bread", 5)
// console.log(price,tq);

import * as ShoppingCart from './shopingCart.js'
// ShoppingCart.addToCart('bread', 5)

import add from './shopingCart.js'
add('egg', 5)

// // Top level await
// console.log("START")
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// // console.log(data);
// console.log("END")


// Real world use
const getPost = async function(p) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {title : data.at(-1).title , text: data.at(-1).body}
}

const lastPost = getPost();

// Not very clean
// const lastPost2 = lastPost.then(post => console.log(post))

// The clean way: Top level await
// const lastPost2 = await lastPost;
// console.log(lastPost2);

import deepclone from './node_modules/lodash-es/cloneDeep.js'

// array method,promises,etc
import 'core-js/stable'
// polifilling async function
import 'regenerator-runtime/runtime'
