import React, { createContext, useContext, useState } from 'react';

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  logOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@my-wallet:logged');
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email === 'nando@l.com' && password === '123') {
      localStorage.setItem('@my-wallet:logged', 'true');
      setLogged(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const logOut = () => {
    localStorage.removeItem('@my-wallet:logged');
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
