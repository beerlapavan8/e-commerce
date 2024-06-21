import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
const OdersSub = (props) => {
  async function deletion(e)
  {
    try {
      const val =e.currentTarget.value;
      const response = await axios.delete(`https://e-commerce-phok.onrender.com/deleteorder/${val}`)
      console.log(response);
      props.removeItem(val);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    
       <tr>
              <td className="px-6 py-4 border-b border-gray-200">{props.name}</td>
              <td className="px-6 py-4 truncate border-b border-gray-200">{props.productname}</td>
              <td className="px-6 py-4 border-b border-gray-200">{props.productprice}</td>
              <td className="px-6 py-4 border-b border-gray-200 text-emerald-600">{props.status}</td>
              <td className="px-6 py-4 border-b border-gray-200">
                <button className='p-2 m-1 bg-red-600 rounded' name="button1"  value={props.idofbutton} onClick={deletion}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  
                </button>
                <Link  to={`/updateorders/${props.idofbutton}`}>
                <button className='p-2 m-1 bg-red-600 rounded'>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>

                 
                </button>
                </Link>
              </td>
            </tr>
    
  )
}

export default OdersSub
