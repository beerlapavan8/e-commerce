import React, { useEffect, useState } from 'react'
import Address from './Address'
import axios from 'axios'
import { Link } from 'react-router-dom'
const AddressDisplay = () => {
 const[address,setAddress]=useState([]);
  useEffect(()=>{
    async function fetchdata()
    {
      const user = localStorage.getItem("username");
      try {
        const resp = await axios.get(`http://localhost:5000/addressget/${user}`)
        const data =resp.data
       // console.log(data)
        setAddress(resp.data);
      } catch (error) {
        console.log(error)      
      }
    }
   fetchdata()
  },[])
  //console.log(address);
  return (
    <div>
      {address.length>0 ?<div className="flex items-center min-h-screen">
      <div className="w-full">
        <h2 className="mb-10 text-2xl font-bold text-center text-blue-400 uppercase">Address</h2>
        <div className="relative p-10 mx-auto bg-white rounded-lg shadow md:w-3/4 lg:w-1/2">
          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Full name</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].fullname}</p>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Mobile Number</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].mobilenumber}</p>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">PinCode</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].pincode}</p>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">Address & Landmark</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].landmark}</p>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">City</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].city}</p>
          </div>

          <div className="mb-5">
            <label className="block mb-2 font-bold text-gray-600">State</label>
            <p className="w-full p-3 border border-gray-300 rounded shadow">{address[0].state}</p>
          </div>

          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Link to={`/updateaddress/${address[0]._id}`}>
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>:<Address/>}

    </div>
  )
}

export default AddressDisplay
