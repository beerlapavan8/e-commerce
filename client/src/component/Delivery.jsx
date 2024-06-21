import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
import DeliverySub from './DeliverySub';
const Delivery = () => {
    const[cartItems,setItems]=useState([]);
    const vall = localStorage.getItem("username");
  useEffect(()=>{
    async function getDetails()
    {
      try {
        //const response = await axios.get("http://localhost:5000/cartdetailsget");
         const response = await axios.get(`https://e-commerce-phok.onrender.com/orderdetailsbyusernmae/${vall}`);
        const valss = response.data;
        setItems(valss);
        //console.log(response.data.vals);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  },[]);
  console.log(cartItems)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  const month = months[d.getMonth()];
  const date =d.getDate()
  const year = d.getFullYear(); 
  const dateoforder = date +" "+month+" "+year
//   console.log(dateoforder)


const today = new Date(); 
const nextThreeDays = new Date(today. setDate(today. getDate() + 3));
 console. log(nextThreeDays);
  return (
    <div>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            {/* <h2 class="font-manrope font-bold text-4xl leading-10 text-black text-center">
                Payment Successful
            </h2> */}
            <p class="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">Thanks for making a purchase
                you can
                check our order summary from below</p>
            <div class="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                <div
                    class="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                    <div class="data">
                        {/* <p class="font-semibold text-base leading-7 text-black">Order Id: <span class="text-indigo-600 font-medium">#10234987</span></p> */}
                        <p class="font-semibold text-base leading-7 text-black mt-4">Order Payment : <span class="text-gray-400 font-medium"> {dateoforder}
                            </span></p>
                    </div>
                    {/* <button
                        class="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Track
                        Your Order</button> */}
                </div>
                <div class="w-full px-3 min-[400px]:px-6">
                   {cartItems.map((a)=>{
                    return <DeliverySub
                    status={a.status}
                    image={a.image}
                    name={a.productname}
                    price={a.productprice}
                    />
                   })}
                </div>  
                <div class="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                    <div class="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                        {/* <button
                            class="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                            <svg class="stroke-black transition-all duration-500 group-hover:stroke-indigo-600" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                            Cancel Order
                        </button>
                        <p class="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">Paid using Credit Card <span class="text-gray-500">ending with 8822</span></p> */}
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Delivery
