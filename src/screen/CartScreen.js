import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import axios from 'axios';

import { useDispatch, useSelector} from 'react-redux';

import {addToCart, removeFromCart} from '../action/CartAction';

//import logo from './logo.svg';

export default function ProductScreen(props){



const cart = useSelector(state => state.cart);

const {cartItems} = cart;

const productId = props.match.params.id;

const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;

const dispatch = useDispatch();




const removeItem = (pId)=>{
dispatch(removeFromCart(pId));
};

useEffect(()=>{
if(productId){
dispatch(addToCart(productId, qty));
}

},[])

const checkoutHandler = ()=>{
props.history.push("/SigninScreen?redirect=ShippingScreen");
}



  return (
    
    <div className="Ap">
       <div class="cart">
        <div class="cart-list">
           <ul class="cart-list-container">
           <li>
           <h3>Shopping Cart</h3>
           <div>price</div>
           </li>
           {
           cartItems.length === 0 ? <div>
           Cart is Empty
           </div>
           :
           cartItems.map(item=>
           
           <li>
         <div class="cart-image">
           <img src={item.image} alt="product"/>
         </div>
           <div class="cart-name">
           <div>
           {item.name}
           </div>
           <div>
           Qty:
           <select value={item.qty}>
        <option>1</option>
<option>2</option>
<option>3</option>
        </select>
        <button class="remove-item" onClick={()=>removeItem(item._id)}> <i class="fa fa-remove">x</i></button>
           </div>
           </div>
           <div class="cart-price">
           ${item.price}
           </div>
           </li>
           
           )
           }
           </ul>
        </div>
    <div class="cart-action">
       <h3>
        SubTotal : {cartItems.reduce((a,c)=> a+c.qty,0)}

:
{cartItems.reduce((a,c)=> a+c.price * c.qty,0)}
        </h3>
        <button class="button primary" disable={cartItems.length === 0} onClick={checkoutHandler}>Procceed To Checkout</button>
    </div>
 </div>
</div>
  );
}

