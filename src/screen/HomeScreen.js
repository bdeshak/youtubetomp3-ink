import React, { Component,useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './HomeScreen.css';
import axios from 'axios';
//import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';

import {listproducts} from '../action/productAction';
//import {Fetch} from 'react-request';
/*
import fs from 'fs';
import xml2js from 'xml2js';
import builder from 'xmlbuilder';
import request from 'request';
import cheerio from 'cheerio';
*/

export default function HomeScreen(){


const productList = useSelector(state=> state.productList);

const {products,loading,error} = productList;

const dispatch = useDispatch();


useEffect(()=>{
dispatch(listproducts());
return ()=>{

};
},[])

let url = 'https://www.tutorialrepublic.com/html-tutorial/';




  return (
    loading ? <div class="pLoading"><img src="./assets/images/loading.gif"/></div>:
        error ? <div class="pLoading">{error}</div>:
         
<div class="content">
        <ul class="products">
{

     products.map( product=>
         <li key={product._id}>
          <div class="product">
            <Link to={"/ProductScreen/" + product._id}>
           <img class="product-image" src={product.image}/></Link>
           <div class="product-name"> <Link to={"/ProductScreen/" + product._id}>{product.name}</Link></div>
           <div class="product-brand">{product.brand}</div>
           <div class="price">${product.price}</div>
           <div class="product-rating">{product.numReview} Start ({product.rating} Reviews)</div>
          </div>
         </li>
)
}
        </ul>
    </div>


        
  );
}

