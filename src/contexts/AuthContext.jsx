import React, { createContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Implement your login logic here (e.g., API calls, token handling)
    setIsAuthenticated(true); // Set authenticated state after successful login
  };

  const logout = () => {
    // Implement your logout logic here (e.g., clearing tokens, session data)
    setIsAuthenticated(false); // Reset authenticated state after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
