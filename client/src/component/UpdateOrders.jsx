import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const UpdateOrders = () => {
    const navigate = useNavigate();
    const[values,setValues]=useState({
        productid:"",
        productname:"",
        rating:0,
        productprice:0,
        image:"",
        status:"",
        username:"",
        userid:""
      })
    const {id}=useParams()
    useEffect(()=>{
        const fetchdata = async()=>{
            try {
                const response=await axios.get(`https://e-commerce-phok.onrender.com/ordergetbyid/${id}`)
                setValues(response.data)
                //console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchdata();
    },[id])
    async function submitting(e)
    {
        e.preventDefault();
        try {
            const reponse = await axios.put(`https://e-commerce-phok.onrender.com/ordersupdate/${id}`,values)
            console.log(reponse.data)
        } catch (error) {
            console.log(error)
        }
        navigate("/orders")
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
      <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Update the status</h2>
      <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={submitting}>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">Product status</label>
                  <input type="text" id="name" name="status" value={values.status} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>

              <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
      </div>
  </div>
</div>
  </div>
  )
}

export default UpdateOrders
