import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './addProductScreen.css';


import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {userOrderList} from '../action/orderAction';
//import logo from './logo.svg';

export default function Profile(props){

const userSignin = useSelector(state=> state.userSignin);

const {userInfo} = userSignin;

if(!userInfo){

props.history.push("/");
}


const orderList = useSelector(state=> state.lists);

const {lists,payment,cartItem,loading,error} = orderList;





const [name, setName] = useState('');

const [email, setEmail] = useState('');


const [password, setPassword] = useState('');



const dispatch = useDispatch();


useEffect(()=>{
dispatch(userOrderList(userInfo.id));

return ()=>{

};
},[])


const submitHandler = ()=>{

}



const detailsHandler = (product)=>{

//dispatch(userOrderDetails(product._id));
}

const deleteHandler = (product)=>{

//dispatch(deleteProduct(product._id));
}
alert(cartItem);


  return (
       
    <div class="profile-page">
        <div class="profile">
           <div class="form">

        <form onSubmit={submitHandler}>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Register Your Account</h3></li>
        <li>
       
        </li>
<li>
        <label for="name">Name:</label>
        <input type="name" name="name" id="name" onChange={(e)=> setName(e.target.value)}/>
        </li>

        <li>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
        </li>
        
        <li>
        <label for="email">Password:</label>
        <input type="Password" name="Password" id="Password" onChange={(e)=> setPassword(e.target.value)}/>
        </li>

        <li>
        <button type="submit" class="button primary text-center">Update</button>
        </li>
        <li>
         Already Have An Account?
        </li>
        <li>
<button type="submit" class="button secondary">LogOut
        </button>
        </li>
        </ul>
        
        </form>
    </div>
        </div>
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

lists.map(order=>
     <tr key={order._id}>
     <td>{order._id}</td>
     <td>{order.userId}</td>
     {cartItem.map(i=>{alert(i.imag)})}
     <td>{order.total}</td>
     <td>{order.paid}</td>
     <td>{order.delivered}</td>
     
     <td>
     <Link to={"/UserOrderDetails/"+ order._id }>
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

