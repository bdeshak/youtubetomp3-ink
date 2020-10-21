

import React, {useState} from 'react';

import {ORDER_SAVE_REQUEST,ORDER_SAVE_SUCCESS,ORDER_SAVE_FAIL,ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL, ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL, USERORDER_LIST_REQUEST, USERORDER_LIST_SUCCESS, USERORDER_LIST_FAIL, USERORDER_DETAIL_REQUEST, USERORDER_DETAIL_SUCCESS, USERORDER_DETAIL_FAIL} from '../constants/orderConstants';

import axios from 'axios';

import cookie from 'js-cookie';


const saveOrder = (order)=> async (dispatch)=>{

try{
dispatch({ type:ORDER_SAVE_REQUEST, payload: order});

const {data} = await axios.post("/api/order", order);

dispatch({ type:ORDER_SAVE_SUCCESS, payload: order});


}catch(error){
dispatch({ type:ORDER_SAVE_FAIL, payload: error.message});
}

}





{/* list order */}
const orderList = ()=> async (dispatch)=>{

try{
dispatch({ type:ORDER_LIST_REQUEST});

const {data} = await axios.get("/api/order");

dispatch({ type:ORDER_LIST_SUCCESS, payload:data});

}
catch(error){
dispatch({ type:ORDER_LIST_FAIL, payload: error.message});
}

}





{/* detail order */}
const orderDetails = (id)=> async (dispatch)=>{

try{

const {data} = await axios.get("/api/details/" + id);
alert(data.payment.paymentMethod);


dispatch({ type:ORDER_DETAIL_REQUEST,payload:id});
dispatch({ type:ORDER_DETAIL_SUCCESS, payload:data});

}
catch(error){
dispatch({ type:ORDER_DETAIL_FAIL, payload: error.message});
}

}




{/* delete order  */}
const OrderDelete=(id)=> async (dispatch, getState)=>{

try{
dispatch({ type:ORDER_DELETE_REQUEST, payload: id});

const {userSignin:{userInfo}} = getState();


const {data} = await axios.delete("/api/order/" + id, {
headers:{
"Authorization":"Bearer" + userInfo.token
}});

dispatch({ type:ORDER_DELETE_SUCCESS, payload: data, success: true});

}catch(error){
dispatch({ type:ORDER_DELETE_FAIL, payload: error.message});
}
}



{/*user list order */}
const userOrderList = (id)=> async (dispatch)=>{

try{
dispatch({ type:USERORDER_LIST_REQUEST,payload:id});

const {data} = await axios.get("/api/list/order/" + id);

dispatch({ type:USERORDER_LIST_SUCCESS, payload:data,success:true});

}
catch(error){
dispatch({ type:USERORDER_LIST_FAIL, payload: error.message});
}

}





{/*user order details */}
const uOrderDetails = (id)=> async (dispatch)=>{

try{
dispatch({ type:USERORDER_DETAIL_REQUEST,payload:id});

const {data} = await axios.get("/api/details/" + id);
alert(data.payment.paymentMethod);

dispatch({ type:USERORDER_DETAIL_SUCCESS, payload:data,success:true});

}
catch(error){
dispatch({ type:USERORDER_DETAIL_FAIL, payload: error.message});
}

}





export {saveOrder, orderList, orderDetails,OrderDelete, userOrderList, uOrderDetails}



