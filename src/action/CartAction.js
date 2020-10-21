


import { ADD_TO_CART, REMOVE_FROM_CART, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT} from '../constants/CartConstants';

import axios from 'axios';

import cookie from 'js-cookie';




const addToCart = (productId, qty)=> async (dispatch, getState)=>{

try{

const {data} = await axios.get("/api/products/" + productId);

dispatch({ type:ADD_TO_CART, payload: {
product: data._id,

name: data.name,

image: data.image,

price: data.price,

countInStock: data.countInStock,

qty

}});

const {cart:{cartItems}} = getState();
cookie.set("cartItems", JSON.stringify(cartItems));

}catch(error){

}

}

const removeFromCart = (pId)=> (dispatch, getState)=>{
dispatch({ type:REMOVE_FROM_CART, payload:pId});
alert(pId);

const {cart:{cartItems}} = getState();
cookie.set("cartItems", JSON.stringify(cartItems));
}


const saveShipping = (data)=> (dispatch)=>{

dispatch({ type:CART_SAVE_SHIPPING, payload:data});

}

const savePayment = (data)=> (dispatch)=>{

dispatch({ type:CART_SAVE_PAYMENT, payload:data});

}





export {addToCart, removeFromCart, saveShipping, savePayment}



