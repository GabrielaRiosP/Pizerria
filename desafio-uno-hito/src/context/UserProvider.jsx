// src/context/UserProvider.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const token = user?.token || null;

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = async (email, password) => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok && data.token) {
      const userData = { token: data.token, email: data.email };
      login(userData);
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error en el registro:", error);
    return false;
  }
};


const getProfile = async () => {
  if (!user?.token) return null;

  try {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = await res.json();
    return res.ok ? data : null;
  } catch (error) {
    console.error("Error al obtener el perfil:", error);
    return null;
  }
};

  return (
    <UserContext.Provider value={{ user, login, logout, token, register, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};