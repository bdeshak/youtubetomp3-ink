import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import axios from 'axios';

import { useDispatch, useSelector} from 'react-redux';


import CheckoutStep from './component/CheckoutStep';

import PaypalButton from './PaypalButton';

import {uOrderDetails} from '../action/orderAction';

//import logo from './logo.svg';

export default function UserOrderDetails (props){




const d = useSelector(state=> state.uOrDetails);

const {payment,shipping,cartItems,loading,error} = d;


let itemsPrice=0;

if(loading==false){
itemsPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
}

const shippingPrice = itemsPrice > 100 ? 0 : 10;
const texPrice = 0.15 * itemsPrice;
const totalPrice = itemsPrice + shippingPrice + texPrice;






const id = props.match.params.id;

const dispatch = useDispatch();

useEffect(()=>{
dispatch(uOrderDetails(id));
return ()=>{

};
},[])


alert(cartItems);




const placeOrderHandler = ()=>{
// create place order func
}


  return (
loading ? <div class="pLoading">loading</div>:
        error ? <div class="pLoading">{error}</div>:


    <div>
     <CheckoutStep step1 step2 step3 step4></CheckoutStep>

       <div class="place-order">
        <div class="place-order-info">
           <div>
        <h3>Shipping</h3>
        <div>
 {shipping.address},{shipping.city},{shipping.postalCode},{shipping.country}
    </div>
    </div>
    <div>
    <h3>Payment</h3>
    <div>
    Payment Method:  {payment.paymentMethod}
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
            <PaypalButton/>
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

