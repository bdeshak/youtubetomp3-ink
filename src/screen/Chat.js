import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import queryString from 'query-string';

import io from 'socket.io-client';



//import logo from './logo.svg';

let socket;

export default function Chat({location}){


const [name, setName] = useState('');

const [room, setRoom] = useState('');


const ENDPOINT = 'localhost:9000/';




useEffect(()=>{
const {name, room} = queryString.parse(location.search);

socket =io(ENDPOINT);

setName(name);
setRoom(room);

socket.emit('join', {name,room});
alert(socket);

return ()=>{

};
},[ENDPOINT,location.search])






  return (
    
 <div class="form">
        <form>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Sign In</h3></li>
        <li>
        
        </li>
        <li>
        <label for="name">Name:</label>
        <input type="name" name="name" id="name"/>
        </li>
        
        <li>
        <label for="room">Room:</label>
        <input type="room" name="room" id="room"/>
        </li>
        <li>

        <button type="submit" class="button primary text-center">SignIn</button>

        </li>
        
        
        </ul>
        
        </form>
    </div>
  );
}

