import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, fetchProducts } from '../store/productSlice';




const Products = () => {
  //dispatch the actions, actions goes to reducer and change the state 
  const dispatch=useDispatch();
  const {data:products, status}=useSelector((state)=>state.product)

  // const [products,setProducts]=useState([]);
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res=await fetch('https://fakestoreapi.com/products');
    //   const data=await res.json();
    //   console.log(data);
    //   setProducts(data);

    // }
    // fetchProducts();


     dispatch(fetchProducts())
  }, [])



  // handleAdd 
  function handleAdd(product){
    //product store to redux store
    dispatch(add(product))


  }

  if(status===STATUSES.LOADING){
    return <div class="lds-hourglass"></div>
  }
  if(status===STATUSES.ERROR){
    return <div>ERROR</div>
  }
  
  return (
    <div className='productsWrapper'>
    {
      products.map(product=>(
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>Rs. {product.price} /-</h5>
          <button onClick={()=>handleAdd(product)} className='btn'>Add</button>
        </div>
      ))
    }
    </div>
  )
}

export default Products