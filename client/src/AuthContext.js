// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Context for the auth
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isadmin") === "true");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userid"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAdmin(localStorage.getItem("isadmin") === "true");
      setIsLoggedIn(!!localStorage.getItem("userid"));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const logout = () => {
    localStorage.clear();
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, isLoggedIn, setIsAdmin, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
