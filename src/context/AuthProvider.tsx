import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hook";

interface Props {
  children: ReactNode;
}

type User = {
  email: string;
  password: string;
}

const defaultContext = {
  isAuth: false,
  user: {},
  handleLogin: ({}: User) => {},
  handleLogout: () => {},
}

type AuthContextType = {
  isAuth: boolean;
  user: any;
  handleLogin: (user?: User) => void;
  handleLogout: () => void;
}

const AuthContext = createContext(defaultContext);
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }: Props) => {

  const { storedValue, setValue } = useLocalStorage('auth', {});
  const [isAuth, setIsAuth] = useState(storedValue.isAuth || false);
  const [user, setUser] = useState(storedValue.data || {})

  const handleLogin = ( user:any ) => {
    setIsAuth(true)
    setUser(user.data)
    const data = { ...user, isAuth: true}
    setValue(data)
  }
  const handleLogout = () => {
    setIsAuth(true)
    setUser({})
    setValue({})
  }

  const contextValue: AuthContextType = {
    isAuth,
    user,
    handleLogin,
    handleLogout
  }
  
  return (
    <AuthContext.Provider 
      value={ contextValue }
    >
      { children }
    </AuthContext.Provider>
  )
}
