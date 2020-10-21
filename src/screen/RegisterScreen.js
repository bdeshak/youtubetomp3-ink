import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {registerUser} from '../action/userAction';

//import logo from './logo.svg';

export default function RegisterScreen(props){

const userRegister = useSelector(state => state.userRegister);

const {loading, userInfo,error} = userRegister;

const [name, setName] = useState('');

const [email, setEmail] = useState('');


const [password, setPassword] = useState('');


const dispatch = useDispatch();

const redirect = props.location.search?props.location.search.split("=")[1]:"/";
useEffect(()=>{
if(userInfo){
props.history.push(redirect);
alert(7);
}

return ()=>{

};
},[userInfo])

const resubmitHandler = (e)=>{
e.preventDefault();

dispatch(registerUser(name,email, password));


}




  return (
    
 <div class="form">
        <form onSubmit={resubmitHandler}>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Register Your Account</h3></li>
        <li>
         {
          loading && <div>loading....</div>}
         { error && <div>{error}</div>
         }
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
        <button type="submit" class="button primary text-center">Register</button>
        </li>
        <li>
         Already Have An Account?
        </li>
        <li>
<button type="submit" class="button secondary">
        <Link class="text-center" to={redirect === "/" ? "SigninScreen" : "SigninScreen?redirect=" + redirect}> Sign In</Link></button>
        </li>
        </ul>
        
        </form>
    </div>
  );
}

