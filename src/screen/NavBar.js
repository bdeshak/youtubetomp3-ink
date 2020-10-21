import React, { Component,useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './HomeScreen.css';
import axios from 'axios';
//import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';


export default function NavBar(){

const userSignin = useSelector(state=> state.userSignin);


const {userInfo} = userSignin;


  return (
        
        <header class="header">
        <button class="humbar" onclick="openMenu()">&#9776;</button>
         <div class="brand">
          <a href="amazona.html">amazona</a>
         </div>
         <div class="header-link">
         <a href="cart.html">Cart</a>

<Link to="/AddProductScreen">Create Product</Link>

<Link to="/RegisterScreen">Register</Link>
{
userInfo ? 
         <Link to="/profileScreen">{userInfo.name}</Link>:
<Link to="/SigninScreen">Sign In</Link>

}
         </div>
        </header>
        
       
  );
}

