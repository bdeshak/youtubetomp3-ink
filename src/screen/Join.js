import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import data from './Data';

import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';


//import logo from './logo.svg';

export default function Join(props){



const [name, setName] = useState('');


const [room, setRoom] = useState('');




const dispatch = useDispatch();


useEffect(()=>{


return ()=>{

};
},[])






  return (
    
 <div class="form">
        <form>
        
        <ul class="form-container">
        <li> <h3 class="text-center">Sign In</h3></li>
        <li>
        
        </li>
        <li>
        <label for="name">Name:</label>
        <input type="name" name="name" id="name" onChange={(e)=> setName(e.target.value)}/>
        </li>
        
        <li>
        <label for="room">Room:</label>
        <input type="room" name="room" id="room" onChange={(e)=> setRoom(e.target.value)}/>
        </li>
        <li>
<Link onClick={event=>(!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
        <button type="submit" class="button primary text-center">SignIn</button>
</Link>
        </li>
        
        
        </ul>
        
        </form>
    </div>
  );
}

