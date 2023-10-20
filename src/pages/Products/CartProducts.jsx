import React from 'react'
import './Products.css'
import { Fragment } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { remove } from '../../Redux/cartSlice';

const CartProducts = () => {
    const cartitems=useSelector((state)=>state.cart);
    const dispatch =useDispatch();

    const handleRemove=(id)=>{
        dispatch(remove(id))
    }
  return (
    <Fragment>
    
    <br />
    <h2 style={{textAlign:"center"}}>Items added to cart</h2><br />
    <div className='cart-products'>
    {cartitems.map((item)=>(
        <div className='cart-products-inner'>
        <img src={item.image} alt="" width="150px" height="100px"/>
        <h4 style={{fontStyle:"italic"}}>{item.title}</h4><br />
        <h3 >{item.price}</h3><br />
        <button className='btn' style={{float:"left" }} onClick={()=>handleRemove(item.id)}>Remove</button><br />
        </div>
    ))}

    
    </div>
    
    </Fragment>
  )
}

export default CartProducts