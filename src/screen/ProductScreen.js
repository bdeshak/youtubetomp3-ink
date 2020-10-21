import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {detailProduct} from '../action/productAction';

//import logo from './logo.svg';

export default function ProductScreen(props){

const [qty,setQty] = useState(1);





const productDetail = useSelector(state=> state.productDetail);

const {product,loading,error} = productDetail;

const dispatch = useDispatch();


useEffect(()=>{
dispatch(detailProduct(props.match.params.id));
return ()=>{

};
},[])

const handleAddToCart = ()=>{
props.history.push("/CartScreen/" + props.match.params.id + "?qty=" + qty);
}



  return (
    
loading ? <div class="pLoading">loading</div>:
        error ? <div class="pLoading">{error}</div>:
   
<div>
        <div class="back-to-result">
        <Link to="/HomeScreen">Bact to result</Link>
        </div>
        <div class="details">
        <div class="details-image">
        <img src="assets/images/products/p8.jpg"/>
{product.image}
        </div>
        <div class="details-info">
        <ul>
         <li>
          <h4>{product.name}</h4>
         </li>
         <li>
         {product.rating} ({product.numReview} Review)
         </li>
         <li>
       Price: <b>${product.price}</b>
         </li>
         <li>
         Description:
         <div>{product.description}</div>
         </li>
        </ul>
        </div>
        
        <div class="details-action">
        <ul>
        <li>
        price: {product.price}
        </li>
        <li>
        Status: 
{
product.countInStock > 0 ? "InStock" : "Out Of Stock"
}
        </li>
        <li>
        Qty:
        <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>

{[...Array(product.countInStock).keys()].map(x=> <option value={x+1}>{x+1}</option>)}
            </select>
        </li>
        <li>
       {
product.countInStock > 0 &&
           <button class="button primary" onClick={handleAddToCart}>Ad To Cart</button>
}
        </li>
        </ul>
        </div>
        </div>
    </div>
  );
}

