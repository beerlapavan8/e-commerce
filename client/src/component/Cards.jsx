
import React from 'react'
// import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Cards = (props) => {
    const stval = localStorage.getItem("username");
    const stval1= localStorage.getItem("userid");
    const notify = () => toast('✅ item added to the cart');
    async function addToCard(e)
    {
        console.log(e.target.value)
        console.log(props);
       
        try {
            const response = await axios.post("https://e-commerce-phok.onrender.com/cartdetailspost",{
                productid:props.id,
                productname:props.name,
                productprice:props.price,
                username:stval,
                userid:stval1,
                image:props.image
            })
            console.log(response.data);
        } catch (error) {
         console.log(error);   
        }
        notify();
    }
  return (
    <div>
            <div class="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl hover:scale-[0.9]">
        <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img class="object-cover" src={props.image} alt="product image" />
            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
        </a>
        <div class="mt-4 px-5 pb-5">
            <a href="#">
            <h5 class="text-xl tracking-tight text-slate-900">{props.name}</h5>
            </a>
            <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
                <span class="text-3xl font-bold text-slate-900">₹{props.price}</span>
                <span class="text-sm text-slate-900 line-through">₹699</span>
            </p>
            <div class="flex items-center">
                <p className='pt-1 pb-1 pl-2 pr-2 text-lg font-medium bg-yellow-200 rounded'>Rating:- {props.rating}</p>
                {/* <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">Rating {props.rating}</span> */}
            </div>
            </div>
            <button onClick={addToCard} value={props.id} class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart</button>
        </div>
        </div>
        <Toaster position="top-right" />
    </div>
  )
}

export default Cards;
