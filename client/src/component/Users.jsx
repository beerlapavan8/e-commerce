import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserSub from './UserSub';

const Users = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{

        async function fetchadat()
        {
            
            try {
                const response = await axios.get("https://e-commerce-phok.onrender.com/getregistration")
                const str = response.data
                setUsers(str.valuess);
            } catch (error) {
                console.log(error);
            }
        }
        fetchadat();
    },[])
     //console.log(users[0])

     users.forEach((a)=>{
        console.log(a)
     })
     const removeItem = (id) => {
        setUsers(prevItems => prevItems.filter(item => item._id !== id));
      };
  return (
    <div >
     <div class="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">UserName</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Password</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
            </tr>
        </thead>
        <tbody class="bg-white">
            {users.map((a)=>{
                  //  console.log(a._id)
                return <UserSub
                name={a.username}
                email={a.email}
                password={a.password}
                userid={a._id} 
                removeItem={removeItem} 
                />
            })}
           
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default Users
