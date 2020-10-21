import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import CheckoutStep from './component/CheckoutStep';



import {savePayment} from '../action/CartAction';

//import logo from './logo.svg';

export default function PaymentScreen(props){

const [paymentMethod, setPaymentMethod] = useState('');


const dispatch = useDispatch();


const submitHandler = (e)=>{
e.preventDefault();

dispatch(savePayment({paymentMethod}));

props.history.push("/PlaceOrderScreen");
}




  return (
 <div>
     <CheckoutStep step1 step2 step3></CheckoutStep>

  <div class="form">
        <form onSubmit={submitHandler}>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Payment</h3></li>
        

        <li>
<input value="Paypal" type="radio" name="paymentMetod" id="paymentMethod" onChange={(e)=> setPaymentMethod(e.target.value)}/>

        <label for="address">Paypal:</label>
        
        </li>

        <li>
        <button type="submit" class="button primary text-center">Continue</button>
        </li>
        
        </ul>
        </form>
    </div>
 </div>
  );
}

