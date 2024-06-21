// import React, { useState, useEffect } from 'react';
// import AdminNavbar from './AdminNavbar';
// import Navbar from './Navbar';

// const Navigation = () => {
//   const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isadmin") === "true");

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsAdmin(localStorage.getItem("isadmin") === "true");
//     };

//     window.addEventListener('storage', handleStorageChange);

//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <div>
//       {isAdmin ? <AdminNavbar /> : <Navbar />}
//     </div>
//   );
// };

// export default Navigation;


import React, { useContext } from 'react';
import AdminNavbar from './AdminNavbar';
import Navbar from './Navbar';
import { AuthContext } from '../AuthContext';

const Navigation = () => {
  const { isAdmin } = useContext(AuthContext);

  return (
    <div>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
    </div>
  );
};

export default Navigation;
