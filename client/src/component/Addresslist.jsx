import React from 'react'


import { useState,useEffect } from 'react';
import axios from 'axios';
import AddressSub from './AddressSub';
const Addresslist = () => {
  const[users,setUsers]=useState([]);
    useEffect(()=>{

        async function fetchadat()
        {
            
            try {
                const response = await axios.get("https://e-commerce-phok.onrender.com/addressallget")
                const str = response.data
                setUsers(str);
                // console.log(str)
            } catch (error) {
                console.log(error);
            }
        }
        fetchadat();
    },[])
    console.log(users);
  return (
    <div className='container mx-auto'>
      <div className='flex justify-end mb-4'>
        {/* <button  className='px-4 py-2 text-white bg-blue-500 rounded'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
</svg>
</button> */}
      </div>
      <div className="mx-4 overflow-hidden rounded-lg shadow-lg md:mx-10">
        <table className="w-full table-fixed">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">fullname</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">mobilenumber</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">pincode</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">landmark</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">city</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">state</th>
              {/* <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">Action</th> */}
            </tr>
          </thead>
          <tbody className="bg-white">
          {Array.isArray(users) &&users.map((a)=>{
                  // console.log(a._id)
                return <AddressSub
                //idofbutton={a._id}
                fullname={a.fullname}
            mobilenumber={a.mobilenumber}
            pincode={a.pincode}
            landmark={a.landmark}
              city={a.city}
              state={a.state}
                />
            })}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Addresslist
