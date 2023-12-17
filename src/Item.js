import React from 'react';
import Navbar from './navbar';
import "./item.css"
import { ToastContainer,toast } from 'react-toastify';
const Home = ({ items, addToCart }) => {
  
  const notify=()=>toast("Added to cart",{
    position:"bottom-right"
  });
  
  const handleItem=(item)=>{
    notify();
    addToCart(item);
  }
  return (
    <>
      <Navbar/>
      <div className='content'>
      <h2 className='title'>Best Mobile Shop</h2>
      <div className='List'>
        {items.map(item => (
          <div className='Mobile' key={item.id}>
            <h2>Model:{item.name} </h2> 
            <h3>Price: ₹{item.price}</h3>
            <button onClick={() => handleItem(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Home;
