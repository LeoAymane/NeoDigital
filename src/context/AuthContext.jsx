import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('nd_user');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      console.error('Failed to parse user from localStorage', e);
    }
  }, []);

  const login = async ({ email, password }) => {
    // Mock login - replace with real API call as needed
    // Accept any non-empty email/password for now
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const userData = { email, name: email.split('@')[0] };
    localStorage.setItem('nd_user', JSON.stringify(userData));
    setUser(userData);
    return userData;
  };

  const logout = () => {
    localStorage.removeItem('nd_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
