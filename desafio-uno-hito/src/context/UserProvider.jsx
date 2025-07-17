// src/context/UserProvider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(!!user?.token);

  const login = (userData) => {
    setUser(userData);
    setToken(!!userData.token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, token }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};