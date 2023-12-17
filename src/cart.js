import { useEffect } from "react";
import Navbar from "./navbar";
import Swal from "sweetalert2";
import "./cart.css";
const Cart = ({ cart, setCart, removeFromCart, updateQuantity }) => {
  const handleRemove = (item) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText:"No"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Removed form cart", "", "success");
        removeFromCart(item);
      }
    });
  };

  const notify = () => {
    Swal.fire("Thank You", "Your order will be deliverd soon", "success");
  };

  const handleBuy = () => {
    notify();
    setCart([]);
  };

  useEffect(() => {
    console.log("🚀 ~ file: cart.js:19 ~ useEffect ~ useEffect:", cart);
  }, [handleBuy, removeFromCart]);

  return (
    <>
      <Navbar />
      <div className="content">
        <h2 className="title , carttitle">Cart</h2>
        {cart.length > 0 ? (
          <>
            <button className="buy" onClick={handleBuy}>
              Buy
            </button>
            <div className="List">
              {cart.map((item) => (
                <div className="Mobile" key={item.id}>
                  <h2>{item.name}</h2>
                  <button
                    className="quantity"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  > -</button>
                  <h3 className="quantity"> {item.quantity} </h3>
                  <button
                    className="quantity"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>+
                  </button>
                  <h3>Price: ₹{item.price * item.quantity}</h3>
                  <button
                    className="button"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <marquee>Cart is Empty</marquee>
        )}
      </div>
    </>
  );
};

export default Cart;
