import React, { Component, useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import './addProductScreen.css';


import axios from 'axios';

import {useSelector, dispatch, useDispatch} from 'react-redux';

import {saveProduct, deleteProduct, listproducts} from '../action/productAction';

//import logo from './logo.svg';

export default function AddProductScreen(props){

const productSave = useSelector(state => state.productSave);

const {loading:loadingSave, success:successSave,error:errorSave} = productSave;



const productDelete = useSelector(state => state.deleteProduc);

const {loading:loadingDelete, success:successDelete,error:errorDelete} = productDelete;


const productList = useSelector(state=> state.productList);

const {products,loading,error} = productList;


const [modelVisible, setModelVisible] = useState(false);

const [id, setId] = useState('');

const [name, setName] = useState('');

const [price, setPrice] = useState('');

const [image, setImage] = useState('');

const [description, setDescription] = useState('');

const [category, setCategory] = useState('');

const [brand, setBrand] = useState('');

const [countInStock, setInStock] = useState('');

const [rating, setRating] = useState('');

const [numReview, setReview] = useState('');

const dispatch = useDispatch();


useEffect(()=>{
if(successSave){
setModelVisible(false);
}
dispatch(listproducts());
return ()=>{

};
},[successSave, successDelete])


const openModel = (product)=>{
setModelVisible(true);
setId(product._id);
setName(product.name);
setPrice(product.price);
setImage(product.image);
setDescription(product.description);
setCategory(product.category);
setBrand(product.brand);
setInStock(product.countInStock);
setRating(product.rating);
setReview(product.numReview);

}



const submitHandler = (e)=>{
e.preventDefault();

dispatch(saveProduct({_id:id,name, price, image, description, category, brand, countInStock, rating, numReview}));


}


const deleteHandler = (product)=>{

dispatch(deleteProduct(product._id));
}



  return (
    

<div class="contect content-margined">
    <div class="product-header">
        <h3>Products</h3>
        <button class="create-product secondary" onClick={()=>{openModel({})}}>Create Product</button>
    </div>
{ modelVisible &&

<div class="form">
        <form onSubmit={submitHandler}>
        
        <ul class="form-container">
        <li> <h3>Create Product</h3></li>
        <li>
         {
          loadingSave && <div>loading....</div>}
         { errorSave && <div>{errorSave.msg}</div>
         }
        </li>
        <li>
        <label for="name">Name:</label>
        <input type="name" value={name} name="name" id="name" onChange={(e)=> setName(e.target.value)}/>
        </li>


<li>
        <label for="price">Price:</label>
        <input type="price" value={price} name="price" id="price" onChange={(e)=> setPrice(e.target.value)}/>
        </li>


<li>
        <label for="image">Image:</label>
        <input type="text" value={image} name="image" id="image" onChange={(e)=> setImage(e.target.value)}/>
        </li>


<li>
        <label for="description">Description:</label>
        <textarea value={description} name="description" id="description" onChange={(e)=> setDescription(e.target.value)}/>
        </li>


<li>
        <label for="category">Category:</label>
        <input type="category" value={category} name="category" id="category" onChange={(e)=> setCategory(e.target.value)}/>
        </li>

<li>
        <label for="brand">Brand:</label>
        <input type="brand" value={brand} name="brand" id="brand" onChange={(e)=> setBrand(e.target.value)}/>
        </li>

<li>
        <label for="inStock">InStock:</label>
        <input type="inStock" value={countInStock} name="inStock" id="inStock" onChange={(e)=> setInStock(e.target.value)}/>
        </li>


<li>
        <label for="rating">Rating:</label>
        <input type="rating" value={rating} name="rating" id="rating" onChange={(e)=> setRating(e.target.value)}/>
        </li>


<li>
        <label for="review">Review:</label>
        <input type="review" value={numReview} name="review" id="review" onChange={(e)=> setReview(e.target.value)}/>
        </li>
        
        
        <li>
        <button type="submit" class="button primary">{ id ? "Update" : "Create" }</button>
        </li>


<li>
        <button type="button" class="button secondary" onClick={()=>{setModelVisible(false)}}>Back</button>
        </li>

        </ul>
        
        </form>
    </div>
}
    <div class="product-list">
     <table class="table">
     <thead>
      <tr>
       <th>ID</th>
       <th>NAME</th>
       <th>PRICE</th>
       <th>IMAGE</th>
       <th>DESCRIPTION</th>
       <th>CATEGORY</th>
       <th>BRAND</th>
       <th>INSTOCK</th>
       <th>RATING</th>
       <th>REVIEW</th>
       <th>ACTION</th>
      </tr>
     </thead>
     <tbody>
{
loading ? <div class="pLoading">loading</div>:
        error ? <div class="pLoading">{error}</div>:

products.map(product=>
     <tr key={product.id}>
     <td>{product._id}</td>
     <td>{product.name}</td>
     <td>{product.price}</td>
     <td><img src={product.name}/></td>
     <td>{product.description}</td>
     <td>{product.category}</td>
     <td>{product.brand}</td>
     <td>{product.countInStock}</td>
     <td>{product.rating}</td>
     <td>{product.numReview}</td>
     <td>
<button class="edit-product button primary" onClick={()=>{openModel(product)}}>Edit</button>
<button class="delete-product button secondary" onClick={()=>{deleteHandler(product)}}>Delete</button>

</td>
     </tr>
)
}
     </tbody>
     </table>
    </div>
</div>
  );
}

