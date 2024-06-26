import axios from 'axios'
import React from 'react'

const UserSub = (props) => {
   
   //console.log(val)
    async function Onclicking(e)
    {
      const val =props.userid
      console.log(val)
      try {
        const response = await axios.delete(`https://e-commerce-phok.onrender.com/registrationdelete/${val}`)
        console.log(response.data)
        props.removeItem(val);
      } catch (error) {
        console.log(error)
      }
      
    }
  return (
   
       <tr>
                <td class="py-4 px-6 border-b border-gray-200">{props.name}</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">{props.email}</td>
                <td class="py-4 px-6 border-b border-gray-200">{props.password}</td>
                <td class="py-4 px-6 border-b border-gray-200">
                   <button onClick={Onclicking}  className='p-2 bg-red-600 rounded'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
                     </td>
            </tr>
    
  )
}

export default UserSub
