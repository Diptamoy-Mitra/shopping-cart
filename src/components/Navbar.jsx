import React from 'react'
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  //subscribe the data,when cange automatically show the result
  const items=useSelector(function(state){
    return state.cart
  })    
  return (
    <div style={{display:'flex', alignItems:'space-between'}}>
      <span className='logo'>REDUX STORE</span>
      <div>
        <Link className='navLink' to='/'>Home</Link>
        <Link className='navLink' to='/cart'>Cart</Link>
        <span className='cartCount'>Cart items: {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar