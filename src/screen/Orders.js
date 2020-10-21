import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './addProductScreen.css';


import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {orderList, OrderDelete} from '../action/orderAction';

//import logo from './logo.svg';

export default function Orders(props){

const userSignin = useSelector(state=> state.userSignin);

const {userInfo} = userSignin;

if(!userInfo){

props.history.push("/");
}



//order list
const listOrder = useSelector(state=> state.orderLists);

const {orders,loading,error} = listOrder;


//order delete
const deleteOrder = useSelector(state => state.orderDelete);

const {loading:loadingDelete, success:successDelete,error:errorDelete} = deleteOrder;



const dispatch = useDispatch();


useEffect(()=>{
dispatch(orderList());
return ()=>{

};
},[successDelete])





const submitHandler = (e)=>{
e.preventDefault();



}

const detailsHandler = (product)=>{

//dispatch(deleteProduct(product._id));
}

const deleteHandler = (id)=>{
dispatch(OrderDelete(id));

}



  return (
    <div class="profile-page">
        
        <div class="user-orders">
          <div class="product-list">
     <table class="table">
     <thead>
      <tr>
       <th>ID</th>
       <th>USER-ID</th>
       <th>DATE</th>
       <th>TOTAL</th>
       <th>PAID</th>
       <th>DELIVERED</th>
       <th>ACTION</th>
      </tr>
     </thead>
     <tbody>
{
loading ? <div class="pLoading">loading</div>:
        error ? <div class="pLoading">{error}</div>:

orders.map(order=>
     <tr key={order._id}>
     <td>{order._id}</td>
     <td>{order.userId}</td>
     <td>{order.paymentMethod}</td>
     <td>{order.total}</td>
     <td>{order.paid}</td>
     <td>{order.delivered}</td>
     
     <td>
     <Link to={"/OrderDetails/"+ order._id }>
<button class="edit-product button primary">Details</button></Link>
<button class="delete-product button secondary" onClick={()=>{deleteHandler(order._id)}}>Delete</button>

</td>
     </tr>
)
}
    </tbody>
   </table>
  </div>
 </div>
</div>

  );
}

