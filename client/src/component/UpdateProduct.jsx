import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const UpdateProduct = () => {
    const navigate = useNavigate();
    const[values,setValues]=useState({
        productid:"",
        productname:"",
        rating:0,
        productprice:0,
        image:""
      })
    const {id}=useParams()
    useEffect(()=>{
        const fetchdata = async()=>{
            try {
                const response=await axios.get(`https://e-commerce-phok.onrender.com/productgetone/${id}`)
                setValues(response.data)
                //console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    },[id])
    //console.log(values);
    async function submitting(e)
    {
        e.preventDefault();
        try {
            const reponse = await axios.put(`https://e-commerce-phok.onrender.com/productupdate/${id}`,values)
            console.log(reponse.data)
        } catch (error) {
            console.log(error)
        }
        navigate("/productlist")
    }
    function onchange (e) {
        const{name,value}=e.target;
        setValues((prev)=>{
            return{...prev,[name]:value}
        })
    }
  return (
    <div>
      <div class=" min-h-screen flex items-center">
    <div class="w-full">
        <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Update the product</h2>
        <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={submitting}>
                <div class="mb-5">
                    <label for="name" class="block mb-2 font-bold text-gray-600">Product id</label>
                    <input type="text" id="name" name="productid" value={values.productid}  onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>

                <div class="mb-5">
                    <label for="twitter" class="block mb-2 font-bold text-gray-600">Product Name</label>
                    <input type="text" id="twitter" name="productname" value={values.productname}  onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                    {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 font-bold text-gray-600">Rating</label>
                    <input type="text" id="name" name="rating"  value={values.rating} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 font-bold text-gray-600">Product Price</label>
                    <input type="text" id="name" name="productprice"  value={values.productprice} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 font-bold text-gray-600">Product image</label>
                    <input type="text" id="name" name="image" value={values.image} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                </div>

                <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
            </form>
        </div>
    </div>
</div>
    </div>
  )
}

export default UpdateProduct
