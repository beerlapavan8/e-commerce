import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import Cartitems from './Cartitems';
import CartCardSubFile from './CartCardSubFile';

const Cart = () => {
  const val = localStorage.getItem("username");
  const [cartItems, setItems] = useState([]);

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(`http://localhost:5000/cartdetailsgetbyusername/${val}`);
        const valss = response.data;
        setItems(valss);
      } catch (error) {
        console.error(error);
      }
    }
    getDetails();
  }, [val]);

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item._id !== id));
  };
  return (
    <div>
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((a) => (
          <CartCardSubFile
            key={a._id}
            name={a.productname}
            price={a.productprice}
            id={a.productid}
            image={a.image}
            productid={a._id}
            removeItem={removeItem} 
          />
        ))
      ) : (
        <p>No items in cart</p>
      )}
    </div>
  );
}

export default Cart;
