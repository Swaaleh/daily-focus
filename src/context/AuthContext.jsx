import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (email, password) => {
    // In a real app, you'd make an API call here
    if (email === 'test@example.com' && password === '123') {
      setUser({ email, name: 'Test User' });
      return true;
    }
    return false;
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}