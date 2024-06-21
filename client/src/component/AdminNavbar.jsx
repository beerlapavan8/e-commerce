// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect} from 'react';
// // import { set } from 'mongoose';
// import Cookies from 'universal-cookie';
// const AdminNavbar = () => {
//   const cookies = new Cookies(null, { path: '/' }); 
//   const [login, setLogin] = useState(false);

//   useEffect(() => {
//      const userId = localStorage.getItem("userid");
//     //const userId = cookies.get("userid");

//     if (userId) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }, []);

//   const onClicking = (e) => {
//     //e.preventDefaults();
//     console.log("Logout clicked");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userid");
//     localStorage.removeItem("isadmin");
//     localStorage.clear()
//     // cookies.remove("username");
//     // cookies.remove("userid");
//     // cookies.remove("isadmin");
//     setLogin(false);
//     console.log("Logged out, login state:", login);
//   }


//   return (
//     <div>
//       <div className='h-16 bg-yellow-400'>
//         <ul className='flex items-center justify-evenly'>   
//             <li className='flex items-center justify-center pt-5'><Link to="/product" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Products</Link></li>
//             <li className='flex items-center justify-center pt-5'><Link to="/users" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Users</Link></li> 
//               <li className='flex items-center justify-center pt-5'><Link to="/orders" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Orders</Link></li> 
//              <li className='flex items-center justify-center pt-5'><Link to="/productlist" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Add-products</Link></li>
//              {login ? (
//             <li onClick={onClicking} className='flex items-center justify-center pt-5'>
//               <Link to="/login" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Logout</Link>
//             </li>
//           ) : (
//             <li className='flex items-center justify-center pt-5'>
//               <Link to="/login" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Login</Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default AdminNavbar


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const AdminNavbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <div className='h-16 bg-yellow-400'>
        <ul className='flex items-center justify-evenly'>
          <li className='flex items-center justify-center pt-5'>
            <Link to="/product" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Products</Link>
          </li>
          <li className='flex items-center justify-center pt-5'>
            <Link to="/users" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Users</Link>
          </li>
          <li className='flex items-center justify-center pt-5'>
            <Link to="/orders" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Orders</Link>
          </li>
          <li className='flex items-center justify-center pt-5'>
            <Link to="/productlist" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Add-products</Link>
          </li>
          <li className='flex items-center justify-center pt-5'>
            <Link to="/addresslist" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Users-Address</Link>
          </li>
          {isLoggedIn ? (
            <li onClick={logout} className='flex items-center justify-center pt-5'>
              <Link to="/login" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Logout</Link>
            </li>
          ) : (
            <li className='flex items-center justify-center pt-5'>
              <Link to="/login" className='text-white text-[20px] bg-black px-10 rounded-lg py-1'>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;
