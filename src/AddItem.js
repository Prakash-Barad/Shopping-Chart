import React, { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./AddItem.css"
import Navbar from "./navbar.js"

const AddItem = ({ addItem,items }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    if (name && price) {
      addItem({ id:items.length+1 , name, price: parseFloat(price) });
      setName('');
      setPrice('');
    }
  };
  console.log(items)

  const success = () => toast.success("Item added!",{position:"bottom-right"});
  const error = () => toast.error("Fail to add!",{position:"bottom-right"});

  const handleButtonClick = () => {
    if(name.trim()==="" || price.trim()===""){
    error()
    }
    else{
      success();
      handleAddItem();
    }
  };
  return (
    <>
      <Navbar/>
      <div className='content'>
      <div className='AddItem'>
      <div className='newItem'>
      <h2 className='title'>Add Item</h2>
      <label>Model: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      <br />
      <label>Price: </label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required/>
      <br />
      <button onClick={handleButtonClick}>Add Item</button>
      </div>
      </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default AddItem;
