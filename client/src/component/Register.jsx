import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [userVal,setVal]=useState({
        username:"",
        email:"",
        password:""
    })

    function Onchanging(e)
    {
        const{name,value}=e.target;

        setVal((prev)=>{
            return {...prev,[name]:value}
        })
    }
    
    async function  Onsubmit(e)
    {
        e.preventDefault();
        console.log(userVal);
        try {
            const response = await axios.post("https://e-commerce-phok.onrender.com/postregistration",{
                username:userVal.username,
                email:userVal.email,
                password:userVal.password
                
            })
            console.log(response.data);
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }
    //console.log(userVal)

  return (
    <div>
                <section class="flex flex-col items-center pt-6">
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Create an
                account
            </h1>
            <form class="space-y-4 md:space-y-6" onSubmit={Onsubmit} >
                <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                <input type="text" name="username" onChange={Onchanging} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                </div>
                <div>
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" name="email" onChange={Onchanging} id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
                </div>
                <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" onChange={Onchanging} id="password"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? 
                    <Link to="/login">
                    <a
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</a></Link>
                </p>
            </form>
            </div>
        </div>
</section>
    </div>
  )
}

export default Register
