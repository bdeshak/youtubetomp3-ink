import React, { Component,useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './HomeScreen.css';
import axios from 'axios';
//import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';


export default function Footer(){




  return (
        <aside class="sidebar">
         <h3>Shoping Categories</h3>
         <ul>

         <li> <a href="#">Mbile</a> </li>
         <li> <a href="#">Mbile</a> </li>
         
         </ul>
         <span class="close">X</span>
        </aside>
        
  );
}

