import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {signinUser} from '../action/userAction';

//import logo from './logo.svg';

export default function SigninScreen(props){

const userSignin = useSelector(state => state.userSignin);

const {loading, userInfo,error} = userSignin;



const [email, setEmail] = useState('');


const [password, setPassword] = useState('');




const dispatch = useDispatch();

const redirect = props.location.search?props.location.search.split("=")[1]:"/";
useEffect(()=>{
if(userInfo){
props.history.push(redirect);
}

return ()=>{

};
},[userInfo])

const submitHandler = (e)=>{
e.preventDefault();

dispatch(signinUser(email, password));


}




  return (
    
 <div class="form">
        <form onSubmit={submitHandler}>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Sign In</h3></li>
        <li>
         {
          loading && <div>loading....</div>}
         { error && <div>{error}</div>
         }
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
        <button type="submit" class="button primary text-center">SignIn</button>
        </li>
        <li>
         new to amazona?
        </li>
        <li>
        <button type="submit" class="button secondary">
        <Link class="text-center" to={redirect === "/" ? "RegisterScreen" : "RegisterScreen?redirect=" + redirect}>Create Your Amazona Account</Link>
          </button>
        </li>
        </ul>
        
        </form>
    </div>
  );
}

