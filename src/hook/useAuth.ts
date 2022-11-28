import { useAuthContext } from "../context/AuthProvider";

export const useAuth = () => {
  
  const { handleLogin: login } = useAuthContext();

  const handleLogin = async (form = {}) => {
    const data = await callEndPoint(authUser(form));
    login(data);
  }
}
