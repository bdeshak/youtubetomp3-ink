


import {ORDER_SAVE_REQUEST, ORDER_SAVE_SUCCESS,ORDER_SAVE_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS,ORDER_LIST_FAIL,ORDER_DETAIL_REQUEST, ORDER_DETAIL_SUCCESS, ORDER_DETAIL_FAIL, ORDER_DELETE_REQUEST, ORDER_DELETE_SUCCESS, ORDER_DELETE_FAIL, USERORDER_LIST_REQUEST, USERORDER_LIST_SUCCESS, USERORDER_LIST_FAIL, USERORDER_DETAIL_REQUEST, USERORDER_DETAIL_SUCCESS, USERORDER_DETAIL_FAIL} from '../constants/orderConstants';


function orderSaveReducer(state={orders:[]},action){

switch(action.type){
case ORDER_SAVE_REQUEST:
return {loading:true, orders:[]};

case ORDER_SAVE_SUCCESS:
return {loading:false,success:true, orders:action.payload};

case ORDER_SAVE_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}
}



//order list
function orderListReducer(state={orders:[]},action){

switch(action.type){
case ORDER_LIST_REQUEST:
return {loading:true, orders:[]};

case ORDER_LIST_SUCCESS:
return {loading:false,orders:action.payload};

case ORDER_LIST_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}

}




//order detail
function orderDetailReducer(state={payment:{},shipping:{},cartItems:[]},action){

switch(action.type){
case ORDER_DETAIL_REQUEST:
return {loading:true};

case ORDER_DETAIL_SUCCESS:
return {loading:false,payment:action.payload.payment,shipping:action.payload.shipping,cartItems:action.payload.cartItems};


case ORDER_DETAIL_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}

}


//order delete
function ordertDeleteReducer(state={products:[]},action){

switch(action.type){
case ORDER_DELETE_REQUEST:
return {loading:true};

case ORDER_DELETE_SUCCESS:
return {loading:false,success:true, product:action.payload};

case ORDER_DELETE_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}
}



//order list
function userOrderListReducer(state={lists:[],payment:{},cartItem:[]},action){

switch(action.type){
case USERORDER_LIST_REQUEST:
return {loading:true};

case USERORDER_LIST_SUCCESS:



const item=action.payload;


return {loading:false,lists:action.payload,cartItem:item.map(ite=>{return ite.cartItems})};



 


case USERORDER_LIST_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}

}


//order detail
function userOrderDetailReducer(state={payment:{},shipping:{},cartIt:[]},action){

switch(action.type){
case USERORDER_DETAIL_REQUEST:
return {loading:true};

case USERORDER_DETAIL_SUCCESS:
return {loading:false,payment:action.payload.payment,shipping:action.payload.shipping,cartItems:action.payload.cartItems};


case USERORDER_DETAIL_FAIL:
return {loading:false,error:action.payload};

default:
return state;

}

}



export {orderSaveReducer, orderListReducer, orderDetailReducer, ordertDeleteReducer, userOrderListReducer, userOrderDetailReducer};

