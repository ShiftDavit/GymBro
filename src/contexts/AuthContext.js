import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
    isLoggedIn: null,
    login: ()=>{},
    logout: ()=>{},
});

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}