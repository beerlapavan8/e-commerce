import React from 'react'
import OdersSub from './OdersSub'
import { useEffect,useState } from 'react';
import axios from 'axios';
const Orders = () => {
  const[users,setUsers]=useState([]);
  useEffect(()=>{

      async function fetchadat()
      {
          
          try {
              const response = await axios.get("http://localhost:5000/orderget")
              const str = response.data
              setUsers(str);
              // console.log(str)
          } catch (error) {
              console.log(error);
          }
      }
      fetchadat();
  },[])
  //console.log(users)
  const removeItem = (id) => {
    setUsers(prevItems => prevItems.filter(item => item._id !== id));
  };
  return (
    <div className='container mx-auto'>
    <div className='flex justify-end mb-4'>
      
    </div>
    <div className="mx-4 overflow-hidden rounded-lg shadow-lg md:mx-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">Productid</th>
            <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">Productname</th>
            <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">rating</th>
            <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">productprice</th>
            <th className="w-1/4 px-6 py-4 font-bold text-left text-gray-600 uppercase">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
        {Array.isArray(users) &&users.map((a)=>{
                // console.log(a._id)
              return <OdersSub
              idofbutton={a._id}
              name={a.username}
          productname={a.productname}
          status={a.status}
          productprice={a.productprice} 
          removeItem={removeItem} 
              />
          })}
        
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Orders
