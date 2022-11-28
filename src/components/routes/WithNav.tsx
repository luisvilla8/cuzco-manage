import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { Header, HistoryUrl } from "../../components"
import { useAuthContext } from "../../context/AuthProvider";
import { MainContainer } from "../../styled-components"

export const WithNav = () => {

  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) return navigate('/login')
  }, [])

  return (
    <MainContainer>
      <Header />
      <HistoryUrl />
      <Outlet />
    </MainContainer>
  )
}
