import React, { useState } from "react";
import Home from "./Item.js";
import AddItem from "./AddItem.js";
import Cart from "./cart.js";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem=cart.find((cardItem)=>cardItem.id===item.id)
    if(existingItem){
     const updatedCart=cart.map((cartItem)=>cartItem.id===item.id ? {...cartItem,quantity:cartItem.quantity + 1}:cartItem)
     setCart(updatedCart);
    }
    else{
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);
      console.log("🚀 ~ file: App.js:21 ~ addToCart ~ item:", item)
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) => item.id === itemId? { ...item, quantity: Math.max(newQuantity, 1) }: item);
    setCart(updatedCart);
  };

  const addItem = (item) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
  };

  return (
    <Routes>
        <Route path="/" element={<Home items={items} addToCart={addToCart} />}></Route>
        <Route path="/AddItem" element={<AddItem addItem={addItem} items={items} />}></Route>
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>}></Route>
    </Routes>
  );
};

export default App;
