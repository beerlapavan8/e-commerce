import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
const Collections = () => {
  const[collections,setCollections]=useState([]);
  useEffect(()=>{
    async function fetchadata(){
      try {
        const response = await axios.get("https://e-commerce-phok.onrender.com/productsget")
        const vals = response.data;
        setCollections(vals);
        // console.log(response.data);
      } catch (error) {
       console.log(error); 
      }
    }
    fetchadata();
  }
  ,[]);
    console.log(collections);
  return (
    <div className='grid grid-cols-4'>
      {collections.map((a)=>{
        
        return <Cards 
        name={a.productname}
        price={a.productprice}
        rating={a.rating}
        id={a.productid}
        image={a.image}
        />
      })}
    </div>
  )
}

export default Collections
