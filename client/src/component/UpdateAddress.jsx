import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const UpdateAddress = () => {
    const navigate = useNavigate();
    const userss = localStorage.getItem("username")
    const[values,setValues]=useState({
        fullname:"",
        mobilenumber:0,
        pincode:0,
        landmark:"",
        city:"",
        state:"",
        username:`${userss}`
    })
    function onchange(e)
    {
        const{name,value}=e.target

        setValues((prev)=>{
            return{...prev,[name]:value}
        })
    }
    
    const {id} = useParams();
    //console.log(id)
    const[address,setAddress]=useState([]);
  useEffect(()=>{
    async function fetchdata()
    {
      //const user = localStorage.getItem("username");
      try {
        const resp = await axios.get(`https://e-commerce-phok.onrender.com/addressgetbyid/${id}`)
        const data =resp.data
       // console.log(data)
       setAddress(data)
        setValues(resp.data);
      } catch (error) {
        console.log(error)      
      }
    }
   fetchdata()
  },[])
  async function submitting(e)
    {
        e.preventDefault()
        try {
            const response = await axios.put(`https://e-commerce-phok.onrender.com/addresspost/${id}`,values)
            console.log(`update values${values}`)
        } catch (error) {
            console.log(error);            
        }
        // console.log(values)
        navigate("/displayaddress")
    }
  //console.log(address)
  return (
    <div>
      <div class=" min-h-screen flex items-center">
  <div class="w-full">
      <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Address</h2>
      <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
          <form onSubmit={submitting}>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">Full name</label>
                  <input type="text" id="name" name="fullname" value={values.fullname}  onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>

              <div class="mb-5">
                  <label for="twitter" class="block mb-2 font-bold text-gray-600">Mobile Number</label>
                  <input type="text" id="twitter" name="mobilenumber" value={values.mobilenumber}  onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                  {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
              </div>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">PinCode</label>
                  <input type="text" id="name" name="pincode"  value={values.pincode} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">Address & Landmark</label>
                  <input type="text" id="name" name="landmark"  value={values.landmark} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">City</label>
                  <input type="text" id="name" name="city" value={values.city} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>
              <div class="mb-5">
                  <label for="name" class="block mb-2 font-bold text-gray-600">State</label>
                  <input type="text" id="name" name="state" value={values.state} onChange={onchange} class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
              </div>
              <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
          </form>
      </div>
  </div>
</div>
    </div>
  )
}

export default UpdateAddress
