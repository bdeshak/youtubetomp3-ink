import {createStore,combineReducers,applyMiddleware,compose} from 'redux';

import thunk from 'redux-thunk';

import cookie from 'js-cookie';
import {productListReducer, productDetailReducer, productSaveReducer, productDeleteReducer} from '../reducer/productReducer';


import {CartReducer} from '../reducer/CartReducer';

import { orderSaveReducer, orderListReducer, orderDetailReducer,ordertDeleteReducer, userOrderListReducer,userOrderDetailReducer} from '../reducer/orderReducer';



import {userSigninReducer,userRegisterReducer} from '../reducer/userSigninReducer';


const userInfo = cookie.getJSON("userInfo") || null;

const cartItems = cookie.getJSON("cartItems") || [];

const initialState = {cart:{cartItems},userSignin:{userInfo}};

const reducer = combineReducers({
productList:productListReducer,
orderLists:orderListReducer,
productSave:productSaveReducer,
productDetail:productDetailReducer,
cart:CartReducer,
userSignin:userRegisterReducer,
userRegister:userSigninReducer,
deleteProduc:productDeleteReducer,
orderSave:productSaveReducer,
orderDetail:orderDetailReducer,
orderDelete:ordertDeleteReducer,
lists:userOrderListReducer,
uOrDetails:userOrderDetailReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE__ || compose;

const store = createStore(reducer, initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;