import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import toast, { Toaster } from 'react-hot-toast';
import Cart from './Cart'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const Hello = () => {
  
  //const cookies = new Cookies(null, { path: '/' });
  const navigate = useNavigate();
  const val = localStorage.getItem("username");
  console.log(val)
  var count = 0;
  const [cartItems, setItems] = useState([]);
 // const [address,setAddress]=useState([]);
const[address,setAddress]=useState([]);
  useEffect(()=>{
    async function fetchdata()
    {
      //const user = localStorage.getItem("username");
      try {
        const resp = await axios.get(`http://localhost:5000/addressget/${val}`)
        const data =resp.data
       // console.log(data)
        setAddress(resp.data);
      } catch (error) {
        console.log(error)      
      }
    }
   fetchdata()
  },[])
  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(`http://localhost:5000/cartdetailsgetbyusername/${val}`);
        
        const valss = response.data;
        setItems(valss);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, []);

  cartItems.forEach((a) => {
    count += a.productprice
  })
  var total = count + 190;

  function Onclicking() {
    navigate("/product");
  }
  console.log(address.length)
  const notify = () => toast('✅ Add your address');
  function checkouting()
  {
    if(address.length<=0)
      {
        notify()
       
      }
      else
      {
        makePayment();
      }
  }

  

  const makePayment = async () => {
    const stripe = await loadStripe("pk_test_51PRTW4BhTY1CGwmEfKfLnLLh3xl06sDZqAjR9YEy8KmuIxMsHm7crhxjyQGdle9eJdlMiHvaHi967mwKxkTUUb0W00T218uTYA");

    const body = {
      products: cartItems
    }
    const headers = {
      "Content-Type": "application/json"
    }
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
    const resp = await axios.post("http://localhost:5000/orderpost", {
      cartItems
    })

    cartItems.forEach(async (a) => {
      console.log(a._id)
      const val = a._id
      const reps = await axios.delete(`http://localhost:5000/deletecartitems/${val}`)
    })
  }

  return (
    <div>
      <div className="max-w-5xl py-4 mx-auto font-sans bg-white max-md:max-w-xl">
        <h1 className="text-2xl font-bold text-center text-gray-800">Shopping Cart</h1>
        <div className='flex justify-end pt-5 pr-5'>
          <Link to="/displayaddress" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Address</Link>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <Cart />
          </div>

          <div className="p-4 bg-gray-100 rounded-sm h-max">
            <h3 className="pb-2 text-lg font-bold text-gray-800 border-b border-gray-300">Order Summary</h3>

            <ul className="mt-4 space-y-2 text-gray-800">
              <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">₹{count}</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">₹150</span></li>
              <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">₹40</span></li>
              <hr className="border-gray-300" />
              <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">₹{total}</span></li>
            </ul>

            <div className="mt-4 space-y-2">
              <button type="button" onClick={checkouting} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-sm">Checkout</button>
              <button type="button" onClick={Onclicking} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-sm">Continue Shopping</button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </div>
  )
}

export default Hello
