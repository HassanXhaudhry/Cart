import React, { Fragment, useEffect, useState } from 'react'
import Navbar from "../../components/navbar/Navbar";
import './Products.css';
import ClipLoader from 'react-spinners/ClipLoader'
import {add} from '../../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts]= useState([]);
  const [loading , setLoading]= useState(false)
  const dispatch=useDispatch();

  useEffect(()=>{
    const fetchProduct=async()=>{
      const res = await fetch ('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProduct();
  },[])

   
   useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
       setLoading(false)
     }, 1500)
   }, [])

const handleAdd=(product)=>{
  dispatch(add(product));
}
const items=useSelector((state)=>state.cart);

  return (
    <Fragment>
    <Navbar />
    
    <div style={{display:'flex',  justifyContent:'center', width:'100%', marginTop:'40vh', position:'absolute'}}>
      <ClipLoader color={'black'} loading={loading} size={50} />
      </div> 
    <div className='cart-items-btn'>
   <Link to={"/cartProducts"}> <button className='cart-items'>Cart items:{items.length} </button></Link>
    </div>
    <div className='products-wrapper'>
    {
      products.map((product)=>(
        <div className='card' key={product.id}>
        <img src={product.image} alt="img" width="250px" height="200px"/>
        <h4 style={{fontStyle:"italic"}}>{product.title}</h4><br />
        <h3 style={{textAlign:"center"}}>{product.price}</h3>
        <button className='btn'  onClick={()=>handleAdd(product)}>Add to cart</button>
        </div>
      ))
    }

    </div>
    </Fragment>
  )
}

export default Products