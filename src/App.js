import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import NavBar from './screen/NavBar';
import SideBar from './screen/SideBar';
import Footer from './screen/Footer';


import { Link } from "react-router-dom";
import cookie from 'js-cookie';
import axios from 'axios';
//import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';


import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';

import AddProductScreen from './screen/AddProductScreen';

import ShippingScreen from './screen/ShippingScreen';

import PaymentScreen from './screen/PaymentScreen';

import PlaceOrderScreen from './screen/PlaceOrderScreen';

import Profile from './screen/Profile';

import Orders from './screen/Orders';

import OrderDetails from './screen/OrderDetails';


import UserOrderDetails from './screen/UserOrderDetails';

import Join from './screen/Join';

import Chat from './screen/Chat';

export default function App(props){

const userSignin = useSelector(state=> state.userSignin);

const {userInfo} = userSignin;
//alert(userInfo.isAdmin);

const logOut = ()=>{
cookie.remove("userInfo");
props.history.push("/");
}


console.log(98765);

const openMenu = ()=>{
document.querySelector(".sidebar").style.transform='translateX(0)';
}

const closeMenu = ()=>{
document.querySelector(".sidebar").style.transform='translateX(-25rem)';
}



const uOpenMenu = ()=>{
document.querySelector(".user-menu").style.transform='translateX(0)';
}

const uCloseMenu = ()=>{
document.querySelector(".user-menu").style.transform='translateX(25rem)';
}

console.log(9999999999999999);


  return (
<BrowserRouter>
<div class="grid-container">
        <header class="header">
         <div class="brand">
          <button class="humbar" onClick={openMenu}>&#9776;</button>
          <Link to="/">es</Link>
         </div>
         <div class="header-link">
         <a href="cart.html">Cart</a>


{
userInfo ? 
         <button onClick={uOpenMenu} class="button primary">{userInfo.name}</button>:
<Link to="/SigninScreen">Sign In</Link>

}
         </div>
        </header>
        <aside class="sidebar">
         <h3>Shoping Categories</h3>
         <ul>

         <li> <a href="#">Mbile</a> </li>
         <li> <a href="#">Mbile</a> </li>
         
         </ul>
         <span class="close" onClick={closeMenu}>X</span>
        </aside>


<nav class="user-menu">
<div class="uImg">
        <img src=""/>
    </div>
         <h2>Good Evning!</h2>
         <ul>
<li> <Link to="/Profile">Profile</Link> </li>
         <li> <Link to="/AddProductScreen">Create Product</Link> </li>

<li> <Link to="/OrderDetails">Order Details</Link> </li>

<li> <Link to="/OrderDetails">Orders</Link> </li>


         <li> <a href="#">Mbile</a> </li>
         
         </ul>
         <span class="uClose" onClick={uCloseMenu}>Back</span>
<div class="btn">
        <button class="button secondary" onClick={logOut}>LogOut</button>
    </div>
        </nav>
        <main class="main">
          <switch>
<Route exact path="/" component={HomeScreen} />

<Route path="/ProductScreen/:id" component={ProductScreen} />

<Route path="/CartScreen/:id?" component={CartScreen} />

<Route path="/SigninScreen" component={SigninScreen} />

<Route path="/RegisterScreen" component={RegisterScreen} />

<Route path="/AddProductScreen" component={AddProductScreen} />

<Route path="/ShippingScreen" component={ShippingScreen} />

<Route path="/PaymentScreen" component={PaymentScreen} />

<Route path="/PlaceOrderScreen" component={PlaceOrderScreen} />

<Route path="/Profile" component={Profile} />

<Route path="/Orders" component={Orders} />

<Route path="/OrderDetails/:id" component={OrderDetails} />

<Route path="/UserOrderDetails/:id" component={UserOrderDetails} />

<Route path="/Join" component={Join} />

<Route path="/Chat" component={Chat} />








      </switch>
        </main>
        <footer class="footer">
        All right reserved
        </footer>
    </div>
</BrowserRouter>
  );
}
