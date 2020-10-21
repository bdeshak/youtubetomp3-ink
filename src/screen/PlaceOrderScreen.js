import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import axios from 'axios';

import { useDispatch, useSelector} from 'react-redux';


import CheckoutStep from './component/CheckoutStep';
import PaypalButton from './PaypalButton';


import {addToCart, removeFromCart, putOrder} from '../action/CartAction';


import {saveOrder} from '../action/orderAction';


//import logo from './logo.svg';

export default function PlaceOrderScreen(props){


const orderSave = useSelector(state => state.orderSave);

const {loading, success,error} = orderSave;

const userSignin = useSelector(state=> state.userSignin);

const {userInfo} = userSignin;




const cart = useSelector(state => state.cart);

const {cartItems, shipping, payment} = cart;

if(!shipping.address){
props.history.push("/ShippingScreen");
}else if(!payment.paymentMethod){
props.history.push("/PaymentScreen");
}



const itemsPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
const shippingPrice = itemsPrice > 100 ? 0 : 10;
const texPrice = 0.15 * itemsPrice;
const totalPrice = itemsPrice + shippingPrice + texPrice;

const dispatch = useDispatch();




useEffect(()=>{

},[])

const placeOrderHandler = (data)=>{
dispatch(saveOrder(data));
}


  return (
    <div>
     <CheckoutStep step1 step2 step3 step4></CheckoutStep>

       <div class="place-order">
        <div class="place-order-info">
           <div>
        <h3>Shipping</h3>
        <div>
    {cart.shipping.address},{cart.shipping.city},
    {cart.shipping.postalCode},{cart.shipping.country}
    </div>
    </div>
    <div>
    <h3>Payment</h3>
    <div>
    Payment Method:{cart.payment.paymentMethod}
    </div>
    </div>
    <div>
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
           <img src="p8.jpg" alt="product"/>
         </div>
           <div class="cart-name">
           <div>
           {item.name}
           </div>
           <div>
           Qty:{item.qty}
          
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
        </div>
    <div class="placeOrder-action">
        <ul>

           <li>
            {
          loading&& <div>loading....</div>}
         { error && <div>{error.msg}</div>
         }
           </li>


 <li>
            <PaypalButton data={{id:userInfo.id,date:10,total:totalPrice,paid:true,delivered:false,cartItems:cartItems,payment:payment,shipping:shipping}}/>
           </li>

           <li>
            <button class="button primary" onClick={()=>{placeOrderHandler({id:userInfo.id,date:10,total:totalPrice,paid:true,delivered:false,cartItems:cartItems,payment:payment,shipping:shipping})}}>Place Order</button>
           </li>
           <li>
             <h3>Order Summary</h3>
           </li>
           <li>
             <div>Items:</div>
             <div>${itemsPrice}</div>
           </li>
            <li>
             <div>Shipping:</div>
             <div>${shippingPrice}</div>
           </li>
            <li>
             <div>Tax:</div>
             <div>${texPrice}</div>
           </li>
           
            <li>
             <div>Order Total:</div>
             <div>${totalPrice}</div>
           </li>
           
           
        </ul>
    </div>
 </div>
</div>
  );
}

