// import React from 'react'
import Cart from './Cart'
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const CartCard = () => {

    const[cartItems,setItems]=useState([]);
    useEffect(()=>{
      async function getDetails()
      {
        try {
          const response = await axios.get("http://localhost:5000/cartdetailsget");
          const valss = response.data.vals;
          setItems(valss);
          //console.log(response.data.vals);
        } catch (error) {
          console.log(error);
        }
      }
      getDetails();
    },[]);
    console.log(cartItems[0].productname);

    

  return (
    <div>
            <div class="flex flex-col justify-center items-center min-h-screen">
            <div class="bg-gray-100 rounded-lg shadow-lg p-6">
                <h1 class="text-2xl font-bold mb-6">Shopping Cart</h1>
                
                <Cart/>
                <hr class="my-4"/>
                <div class="flex justify-between items-center">
                    <span class="font-bold">Subtotal:</span>
                    <span class="font-bold">$19.99</span>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <span>Taxes:</span>
                    <span>$1.00</span>
                </div>
                <hr class="my-4"/>
                <div class="flex justify-between items-center">
                    <span class="font-bold">Total:</span>
                    <span class="font-bold">$20.99</span>
                </div>
                <div class="flex justify-center mt-6">
                    <button   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard
