import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import CheckoutStep from './component/CheckoutStep';



import {saveShipping} from '../action/CartAction';

//import logo from './logo.svg';

export default function ShippingScreen(props){

const [address, setAddress] = useState('');

const [city, setCity] = useState('');


const [postalCode, setPostalCode] = useState('');

const [country, setCountry] = useState('');


const dispatch = useDispatch();


const resubmitHandler = (e)=>{
e.preventDefault();

dispatch(saveShipping({address,city, postalCode, country}));

props.history.push("/PaymentScreen");
}




  return (
 <div>
     <CheckoutStep step1 step2></CheckoutStep>

  <div class="form">
        <form onSubmit={resubmitHandler}>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Shipping</h3></li>
        <li>
        
        </li>
<li>
        <label for="address">Address:</label>
        <input type="address" name="address" id="address" onChange={(e)=> setAddress(e.target.value)}/>
        </li>

        
<li>
        <label for="city">City:</label>
        <input type="city" name="city" id="city" onChange={(e)=> setCity(e.target.value)}/>
        </li>

<li>
        <label for="postalCode">Postal Code:</label>
        <input type="postalCode" name="postalCode" id="postalCode" onChange={(e)=> setPostalCode(e.target.value)}/>
        </li>

<li>
        <label for="country">Country:</label>
        <input type="country" name="country" id="country" onChange={(e)=> setCountry(e.target.value)}/>
        </li>



        <li>
        <button type="submit" class="button primary text-center">Contineue</button>
        </li>
        
        </ul>
        
        </form>
    </div>
 </div>
  );
}

