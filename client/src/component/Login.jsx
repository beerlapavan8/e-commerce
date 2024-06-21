// import React, { useState } from 'react'
// import axios from 'axios' 
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Cookies from 'universal-cookie';
// const Login = () => {
//   const cookies = new Cookies(null, { path: '/' });
//   const navigate = useNavigate();
//     const [loginval,setLogin]=useState({
//         username:"",
//         password:""
//     })
//     function Onchanging(e)
//     {
        
//         const {name,value}=e.target;
//         setLogin((prev)=>{
//             return {...prev,[name]:value}
//         })
//     }

//    async function Onsubmitting(e)
//     {
//         e.preventDefault();
//         console.log(loginval);
//         try {
//           const response = await axios.get(`http://localhost:5000/getlogin1/${loginval.username}`)
//           const storedvalss = response.data;
//           // console.log(storedvalss.username)
//          // console.log(storedvalss.isAdmin);
//           if(storedvalss.username === loginval.username && storedvalss.password === loginval.password  && storedvalss.isAdmin === false)
//             {
                
//                 if(localStorage.getItem("username") &&localStorage.getItem("userid") && localStorage.getItem("isadmin"))
//                   {
//                     localStorage.setItem("username",`${storedvalss.username}`)
//                    localStorage.setItem("userid",`${storedvalss._id}`)
//                    localStorage.setItem("isadmin",`${storedvalss.isAdmin}`)
//                      //Cookies.set('username', storedvalss.username);
                    
//                      cookies.set('username', `${storedvalss.username}`);
//                      console.log(cookies.get('username')); 
//                   }
//                   else
//                   {
//                     localStorage.setItem("username",`${storedvalss.username}`)
//                     localStorage.setItem("userid",`${storedvalss._id}`)
//                     localStorage.setItem("isadmin",`${storedvalss.isAdmin}`)
//                     //Cookies.set('username', storedvalss.username);
//                      cookies.set('username', `${storedvalss.username}`);
//                      console.log(cookies.get('username')); 
//                   }
//                 // if(cookies.get("username") && cookies.get("userid")&& cookies.get("isadmin"))
//                 //   {
//                 //     cookies.set("username",`${storedvalss.username}`)
//                 //     cookies.set("userid",`${storedvalss._id}`)
//                 //     cookies.set("isadmin",`${storedvalss.isAdmin}`)
//                 //     console.log(cookies.get('username')); 
//                 //     console.log(cookies.get('userid')); 
//                 //     console.log(cookies.get('isadmin')); 
//                 //   }
//                 //   else
//                 //   {
//                 //     cookies.set("username",`${storedvalss.username}`)
//                 //     cookies.set("userid",`${storedvalss._id}`)
//                 //     cookies.set("isadmin",`${storedvalss.isAdmin}`)
//                 //     console.log(cookies.get('username')); 
//                 //     console.log(cookies.get('userid')); 
//                 //     console.log(cookies.get('isadmin'));
//                 //   }
//                 navigate('/')
//             }
//             else if(storedvalss.username === loginval.username && storedvalss.password === loginval.password  && storedvalss.isAdmin === true)
//               {
//                 if(localStorage.getItem("username") &&localStorage.getItem("userid") && localStorage.getItem("isadmin"))
//                   {
//                     localStorage.setItem("username",`${storedvalss.username}`)
//                    localStorage.setItem("userid",`${storedvalss._id}`)
//                    localStorage.setItem("isadmin",`${storedvalss.isAdmin}`)
//                      //Cookies.set('username', storedvalss.username);
                    
//                      cookies.set('username', `${storedvalss.username}`);
//                      console.log(cookies.get('username')); 
//                   }
//                   else
//                   {
//                     localStorage.setItem("username",`${storedvalss.username}`)
//                     localStorage.setItem("userid",`${storedvalss._id}`)
//                     localStorage.setItem("isadmin",`${storedvalss.isAdmin}`)
//                     //Cookies.set('username', storedvalss.username);
//                      cookies.set('username', `${storedvalss.username}`);
//                      console.log(cookies.get('username')); 
//                   }
//                 // if(cookies.get("username") && cookies.get("userid")&& cookies.get("isadmin"))
//                 //   {
//                 //     cookies.set("username",`${storedvalss.username}`)
//                 //     cookies.set("userid",`${storedvalss._id}`)
//                 //     cookies.set("isadmin",`${storedvalss.isAdmin}`)
//                 //     console.log(cookies.get('username')); 
//                 //     console.log(cookies.get('userid')); 
//                 //     console.log(cookies.get('isadmin'));
//                 //   }
//                 //   else
//                 //   {
//                 //     cookies.set("username",`${storedvalss.username}`)
//                 //     cookies.set("userid",`${storedvalss._id}`)
//                 //     cookies.set("isadmin",`${storedvalss.isAdmin}`)
//                 //     console.log(cookies.get('username')); 
//                 //     console.log(cookies.get('userid')); 
//                 //     console.log(cookies.get('isadmin'));
//                 //   }
//                   navigate('/')
//               }


//         } catch (error) {
//           console.log(error);
//         }
//     }
//   return (
//     <div>
//                     <section class="flex flex-col items-center pt-6">
//         <div
//             class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login
//             </h1>
//             <form class="space-y-4 md:space-y-6" onSubmit={Onsubmitting} >
//                 <div>
//                 <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
//                 <input type="text" name="username" onChange={Onchanging} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required=""/>
//                 </div>
               
//                 <div>
//                 <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <input type="password" name="password" onChange={Onchanging} id="password"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                 </div>
//                 <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
//                 <p class="text-sm font-light text-gray-500 dark:text-gray-400">Create an account? 
//                   <Link to="/register">
//                   <a
//                     class="font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin">Sign in here</a></Link>
//                 </p>
//             </form>
//             </div>
//         </div>
// </section>
//     </div>
//   )
// }

// export default Login


// src/Login.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
//import { AuthContext } from './AuthContext';
import { AuthContext } from '../AuthContext';

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { setIsAdmin, setIsLoggedIn } = useContext(AuthContext);

  const [loginval, setLogin] = useState({
    username: '',
    password: ''
  });

  const Onchanging = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const Onsubmitting = async (e) => {
    e.preventDefault();
    console.log(loginval);

    try {
      const response = await axios.get(`https://e-commerce-phok.onrender.com/getlogin1/${loginval.username}`);
      const storedvalss = response.data;

      if (storedvalss.username === loginval.username && storedvalss.password === loginval.password) {
        localStorage.setItem('username', storedvalss.username);
        localStorage.setItem('userid', storedvalss._id);
        localStorage.setItem('isadmin', storedvalss.isAdmin);

        cookies.set('username', storedvalss.username);
        console.log(cookies.get('username'));

        setIsAdmin(storedvalss.isAdmin);
        setIsLoggedIn(true);

        navigate('/');
      } else {
        // Handle login error
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={Onsubmitting}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={Onchanging}
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={Onchanging}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account?{' '}
                <Link to="/register">
                  <span className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up here</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
